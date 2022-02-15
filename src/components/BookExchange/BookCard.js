import React from "react";
import '../styles/BookCard.css';

const BookCard = props =>{
    return (
        <div className="column">
            <div className="ui segment">
                <div>
                    <div className="imageHead image header">
                        <img src={props.imgSource} alt={props.imgAlt}></img>
                    </div>
                    <div className="contentHead ui header">
                        {props.header}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;