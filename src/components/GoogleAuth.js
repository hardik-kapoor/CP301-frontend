import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const GoogleAuth = props => {
    const onAuthChange = isSignedIn => {
        if (isSignedIn)
            props.signIn(auth.currentUser.get().getId())
        else
            props.signOut();
    };

    let auth=null;

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "971254412778-5u87cu758seqpe71o0r4tqp100q7qfpl.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                auth = window.gapi.auth2.getAuthInstance();
                onAuthChange(auth.isSignedIn.get());
                auth.isSignedIn.listen(onAuthChange);
            })
        })
    }, []);

    const renderAuthButton = () => {
        if (props.isSignedIn === null)
            return null
        if (props.isSignedIn) {
            return (
                <button className="ui red button" onClick={() => auth.signOut()}>
                    <i className="google icon"></i>
                    Sign Out
                </button>
            );
        }
        return (
            <>
                <button className="ui inverted button" onClick={() => auth.signIn()} style={{ marginRight: '0.5em' }}>
                    <i className="google icon"></i>
                    Log In with Google
                </button>
                <button className="ui inverted button">Sign Up</button>
            </>
        );
    };

    return <>{renderAuthButton()}</>;
};

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);