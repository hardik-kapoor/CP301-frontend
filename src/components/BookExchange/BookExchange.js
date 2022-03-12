import React from "react";
import { connect } from 'react-redux';
import Header from "../Header";
import BookCard from "./BookCard";

const BookExchange = props => {
    return (
        <>
            <Header dropdown={true} />
            <div className="ui two column grid" style={{margin: '0px'}}>
                <div className="three wide column">
                    Hello
                </div>
                <div className="thirteen wide column">
                    <div className="ui four column grid" style={{paddingRight:'10px',paddingTop:'10px'}}>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' bookTitle='temp' authorName='Lorem Ipsum' dateSubmitted='07 Jan 2022'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' bookTitle='temp' authorName='Lorem Ipsum' dateSubmitted='07 Jan 2022'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' bookTitle='temp' authorName='Lorem Ipsum' dateSubmitted='07 Jan 2022'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' bookTitle='temp' authorName='Lorem Ipsum' dateSubmitted='07 Jan 2022'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' bookTitle='temp' authorName='Lorem Ipsum' dateSubmitted='07 Jan 2022'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' bookTitle='temp' authorName='Lorem Ipsum' dateSubmitted='07 Jan 2022'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' bookTitle='temp' authorName='Lorem Ipsum' dateSubmitted='07 Jan 2022'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' bookTitle='temp' authorName='Lorem Ipsum' dateSubmitted='07 Jan 2022'/>
                        <BookCard imgSource='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' bookTitle='temp' authorName='Lorem Ipsum' dateSubmitted='07 Jan 2022'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default connect(null)(BookExchange);