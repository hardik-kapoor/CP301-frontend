import React from 'react';
import CardHolder from './CardHolder';
import Header from './Header';
import { Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BookExchange from './BookExchange/BookExchange';
import Auth from './Auth';
import history from '../history';
import CreateBook from './BookExchange/CreateBook';
import PrivateRoute from './PrivateRoute';

const App = () => {
    return (
        <>
            <Helmet>
                <style>{'body {background-color:#EEEEEE}'}</style>
            </Helmet>
            <Router history={history}>
                <Switch>
                    <Route exact path="/">
                        <div>
                            <Header />
                            <CardHolder />
                        </div>
                    </Route>
                    <Route exact path="/bookexchange">
                        <BookExchange />
                    </Route>
                    <Route exact path='/signup'>
                        <Auth type='Sign Up' />
                    </Route>
                    <Route exact path='/login'>
                        <Auth type='Log In' />
                    </Route>
                    <PrivateRoute exact path="/bookexchange/newbook">
                        <CreateBook />
                    </PrivateRoute>
                </Switch>
            </Router>
        </>
    );
};

export default App;