import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';

const Account = props =>{
    return (
        <>
            <Header />
            
        </>
        );
};

const mapStateToProps = state =>{
    return {...state.auth};
};

export default connect(mapStateToProps)(Account)