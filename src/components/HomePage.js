import React from "react";
import Header from './Header';

const HomePage = () =>{
    return (
        <div className='ui inverted masthead center aligned segment'>
            <Header />
            <div className="ui text container">
                <h1 className="ui inverted header">Student activity portal</h1>
                <h2>TEXT</h2>
                <div className="ui huge primary button">
                    Log In
                    <i className="right arrow icon"></i>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
