import React from 'react';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className='ui container'>
            <div className='ui large primary inverted menu'>
                <a className='active item'>Home</a>
                <a className='item'>Pages</a>
                <div className='right item'>
                    <GoogleAuth />
                </div>
            </div>
        </div>
    );
};

export default connect(null)(Header);