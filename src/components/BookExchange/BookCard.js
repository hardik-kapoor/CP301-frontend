import React from "react";
import '../styles/BookCard.css';

const BookCard = props =>{
    const cost=props.cost==0?"Free":"Rs. "+toString(props.cost);
    const imgStyle={ maxWidth: '10vw', maxHeight: '70vh' }
    return (
        // <div className="column">
        //     <div className="ui segment" style={{backgroundColor:''}}>
        //         <div>
        //             <div className="imageHead image header">
        //                 <img src={props.imgSource} alt={props.imgAlt}></img>
        //             </div>
        //             <div className="contentHead ui header">
        //                 {props.header}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='bookcard'>
            <img src={props.imgSource} alt={props.imgAlt} style={imgStyle} className="p-2"/>
            <div className='bookcard-details'>
                <h1>{props.bookTitle}</h1>
                <h2>by <span style={{color: 'black !important'}}>{props.authorName}</span> | {cost}</h2>
                <p style={{color: 'black !important'}}>{props.description}</p>
            </div>
        </div>
    );
};

export default BookCard;

