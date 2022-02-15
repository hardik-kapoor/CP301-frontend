import React from "react";
import { connect } from 'react-redux';
import BookCard from "./BookCard";
import SearchHeader from "./SearchHeader";

const BookExchange = props => {
    return (
        <>
            <SearchHeader />
            <div className="ui two column grid">
                <div className="three wide column">
                    Hello
                </div>
                <div className="thirteen wide column">
                    <div className="ui four column grid" style={{paddingRight:'10px',paddingTop:'10px'}}>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' header='temp'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' header='temp'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' header='temp'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' header='temp'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' header='temp'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' header='temp'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' header='temp'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' header='temp'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' header='temp'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default connect(null)(BookExchange);