import React from "react";
import { Link } from "react-router-dom";
import '../styles/BookCard.css';

const BookCard = props => {
    const cost = props.cost == 0 ? "Free" : "Rs. " + toString(props.cost);
    const imgStyle = { maxWidth: '10vw', maxHeight: '70vh' }

    const renderButtons = () => {
        if (props.showButton)
            return (<button className="btn btn-danger align-self-end btn-block" style={{ marginTop: 'auto' }}>Remove</button>);
        return null;
    };

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
            <img src={props.imgSource} alt={props.imgAlt} style={imgStyle} className="p-2" />
            <div className='bookcard-details'>
                <Link to={`/bookexchange/${props.id}`} style={{ textDecoration: 'none' }} ><h1>{props.bookTitle}</h1></Link>
                <h2>by <span style={{ color: 'black !important' }}>{props.authorName}</span> | {cost}</h2>
                <p style={{ color: 'black !important' }}>{props.description}</p>
                <button className="btn btn-primary align-self-end btn-block mr-2" style={{ marginTop: 'auto' }}>Get</button>
                {renderButtons()}
            </div>
        </div>
    );
};

export default BookCard;

