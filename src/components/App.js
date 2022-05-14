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
import BookDetails from './BookExchange/BookDetails';
import Orders from './BookExchange/Orders';
import Lend from './BookExchange/Lend';
import './styles/App.css'
import CardSlider from './ImageSlider';
import { bgUrl } from '../imageUrl';
import Account from '../Account';
// import './styles/App.scss';

const App = () => {
    return (
        <div className="root">
            <Helmet>
                {/* <style>{'body {background-color:#EEEEEE}'}</style> */}
            </Helmet>
            <Router history={history}>
                <Switch>
                    <Route exact path="/">
                        <div className="main-div">
                            <Header />
                            <h1 className="cut-text">Student Welfare Portal</h1>
                            <div className="sub-div">
                                <img src={bgUrl} className='bgImg'/>
                                <CardSlider />
                            </div>
                        </div>
                    </Route>
                    <PrivateRoute exact path="/bookexchange/newbook">
                        <CreateBook />
                    </PrivateRoute>
                    <PrivateRoute exact path="/bookexchange/orders">
                        <Orders/>
                    </PrivateRoute>
                    <PrivateRoute exact path="/bookexchange/tolend">
                        <Lend/>
                    </PrivateRoute>
                    <Route path="/bookexchange">
                        <BookExchange />
                    </Route>
                    <Route exact path="/bookexchange/:id">
                        <BookDetails />
                    </Route>
                    <Route exact path='/signup'>
                        <Auth type='Sign Up' />
                    </Route>
                    <Route exact path='/login'>
                        <Auth type='Log In' />
                    </Route>
                    <Route exact path='/account'>
                        <Account/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;