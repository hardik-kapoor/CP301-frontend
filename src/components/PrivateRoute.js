import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import flask from '../apis/flask';

const PrivateRoute = ({ children, isSignedIn, userId, chk, ...rest }) => {
    const name = window.location.pathname;
    console.log(name);
    if (name === '/account') {
        return (
            <Route
                {...rest}
                render={({ location }) => {
                    return isSignedIn ? children : (<Redirect to={{ pathname: '/login', state: { from: location } }} />);
                }}
            />
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return isSignedIn ? (chk ? children : <Redirect to={{ pathname: '/account', state: { from: location } }} />) : (<Redirect to={{ pathname: '/login', state: { from: location } }} />);
            }}
        />
    );
};
    
const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId, chk: state.auth.detailsType };
};

export default connect(mapStateToProps)(PrivateRoute);