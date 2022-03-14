import React from "react";
import '../styles/BookCard.css';

const BookCard = props =>{
    const cost=props.cost==0?"Free":"Rs. "+toString(props.cost);
    return (
        <div className='bookcard'>
            <img src={props.imgSource} alt={props.imgAlt} />
            <div className='bookcard-details'>
                <h1>{props.bookTitle}</h1>
                <h2>by <span>{props.authorName}</span> | {cost}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default BookCard;
