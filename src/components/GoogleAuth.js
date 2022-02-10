import React, { Component } from "react";
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component{
    onAuthChange = isSignedIn => {
        if (isSignedIn)
            this.props.signIn(this.auth.currentUser.get().getId())
        else
            this.props.signOut();
    };

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "971254412778-5u87cu758seqpe71o0r4tqp100q7qfpl.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    renderAuthButton = () => {
        if (this.props.isSignedIn === null)
            return null
        if (this.props.isSignedIn) {
            return (
                <button className="ui red button" onClick={() => this.auth.signOut()}>
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        }
        return (
            <>
                <button className="ui inverted button" onClick={() => this.auth.signIn()} style={{ marginRight: '0.5em' }}>
                    <i className="google icon"></i>
                    Log In with Google
                </button>
                <button className="ui inverted button">Sign Up</button>
            </>
        );
    };

    render(){
        return <>{this.renderAuthButton()}</>;
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);