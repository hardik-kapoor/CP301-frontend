import React from 'react';
import { connect } from 'react-redux';

const Header = () => {
    return (
        <div className='ui container'>
            <div className='ui large primary inverted menu'>
                <a className='active item'>Home</a>
                <a className='item'>Pages</a>
                <div className='right item'>
                    <a className='ui inverted button' style={{ marginRight: '0.5em' }}>Log In</a>
                    <a className='ui inverted button'>Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default connect(null)(Header);