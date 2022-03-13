import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, isSignedIn, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return isSignedIn ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />;
            }}
        />
    );
};

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(PrivateRoute);