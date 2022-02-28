import React from 'react';
import CardHolder from './CardHolder';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BookExchange from './BookExchange/BookExchange';

const App = () => {
    return (
        <>
            <Helmet>
                <style>{'body {background-color:#EEEEEE}'}</style>
            </Helmet>
            <Router>
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
                </Switch>
            </Router>
        </>
    );
};

export default App;