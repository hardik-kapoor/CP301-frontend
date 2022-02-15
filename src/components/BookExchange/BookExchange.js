import React from "react";
import { connect } from 'react-redux';
import SearchHeader from "./SearchHeader";

const BookExchange = props => {
    return (
        <>
            <SearchHeader />
            <div>Hello</div>
        </>
    );
};

export default connect(null)(BookExchange);