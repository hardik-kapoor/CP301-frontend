import React from 'react';
import { connect } from 'react-redux';
// import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';

const Header = props => {

    const renderButtons = ()=>{
        if(props.isSignedIn)
            return <SignOut />;
        else
        {
            return (
                <>
                    <Link to='/signup' className="ui inverted button" style={{marginRight:'5px'}}>Sign Up</Link>
                    <Link to='/login' className="ui inverted button" style={{marginRight:'5px'}}>Log In</Link>
                </>
            );
        }
    };

    return (
        <div className='ui container'>
            <div className='ui large primary inverted menu'>
                <Link to='/' className='active item'>Home</Link>
                <Link to='/bookexchange' className='item'>Book Exchange</Link>
                <div className='right item'>
                    {/* <GoogleAuth /> */}
                    {renderButtons()}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state=>{
    return {...state.auth}
};

export default connect(mapStateToProps)(Header);