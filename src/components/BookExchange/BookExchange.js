import React from "react";
import { connect } from 'react-redux';
import Header from "../Header";

const BookExchange = props => {
    return (
        <>
            <Header />
            <div>Hello</div>
        </>
    );
};

export default connect(null)(BookExchange);