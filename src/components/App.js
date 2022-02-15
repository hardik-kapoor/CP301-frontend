import React from 'react';
import CardHolder from './CardHolder';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BookExchange from './BookExchange/BookExchange';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div>
                        <Helmet>
                            <style>{'body {background-color:#EEEEEE}'}</style>
                        </Helmet>
                        <Header />
                        <CardHolder />
                    </div>
                </Route>
                <Route path="/bookexchange">
                    <BookExchange />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;