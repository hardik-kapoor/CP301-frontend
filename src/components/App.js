import React from 'react';
import CardHolder from './CardHolder';
import Header from './Header';
import { Helmet } from 'react-helmet';

const App = () => {
    return(
        <div>
            <Helmet>
                <style>{'body {background-color:#EEEEEE}'}</style>
            </Helmet>
            <Header />
            <CardHolder />
        </div>
    );
};

export default App;