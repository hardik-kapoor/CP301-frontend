import React from 'react';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='ui container'>
            <div className='ui large primary inverted menu'>
                <Link to='/' className='active item'>Home</Link>
                <Link to='/bookexchange' className='item'>Book Exchange</Link>
                <div className='right item'>
                    <GoogleAuth />
                    <Link to='/signup' className="ui inverted button">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default connect(null)(Header);