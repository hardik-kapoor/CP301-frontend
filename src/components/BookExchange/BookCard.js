import React from "react";
import '../styles/BookCard.css';

const BookCard = props =>{
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
            <img src={props.imgSource} alt={props.imgAlt} />
            <div className='bookcard-details'>
                <h1>{props.bookTitle}</h1>
                <h2>by <span>{props.authorName}</span> | {props.dateSubmitted}</h2>
                <p>lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam</p>
            </div>
        </div>
    );
};

export default BookCard;

