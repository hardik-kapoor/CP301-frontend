import React from 'react';
import CardHolder from './CardHolder';
import Header from './Header';
import { Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BookExchange from './BookExchange/BookExchange';
import SignUp from './SignUp';
import Auth from './Auth';
import history from '../history';
import LogIn from './LogIn';

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
                    <Route path="/bookexchange">
                        <BookExchange />
                    </Route>
                    <Route path='/signup'>
                        <Auth type='Sign Up'/>
                    </Route>
                    <Route path='/login'>
                        <Auth type='Log In'/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;