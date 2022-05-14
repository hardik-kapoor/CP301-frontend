import React from "react";
import { Link } from "react-router-dom";
import '../styles/BookCard.css';

const BookCard = props => {
    const cost = props.cost == 0 ? "Free" : "Rs. " + props.cost;
    const imgStyle = { maxWidth: '10vw', maxHeight: '50vh' }
    const len = props.description.length < 100 ? props.description.length : 100;
    const flag = props.description.length < 100 ? false : true;
    let description = props.description.slice(0, len);
    if (flag)
        description = description + "...";

    const renderButtons = () => {
        if(props.userId===null)
            return null;
        if (props.showButton)
            return (<button className="btn btn-danger align-self-end btn-block" style={{ width: '5vw', marginTop: 'auto' }} onClick={() => props.funButton(props.id)}>Remove</button>);
        else{
            if(props.showButton2)
                return (<button className="btn btn-primary align-self-end btn-block" style={{ width: '5vw', marginRight: '10px' }} onClick={() => props.funButton2(props.id)}>Get</button>);
            else
                return null;
        }
    };


    const renderInfo = () =>{
        if(props.book.status==='NOT_CHECKED')
            return null;
        if(props.book.status==='REJECTED')
            return <div className="">REJECTED!</div>
        else
            return (<div className="">
                        <div className="h-3 font-weight-bold">ACCEPTED!</div>
                        <p className="h-5 font-weight-bold">{`Collect from ${props.book.name} from ${props.book.hostel_name} , ${props.book.room_no}, phone number: ${props.book.phone_no}`}</p>
                    </div>);
    };

    return (
        <div className="card my-1" style={{height:'35vh'}}>
            <div className="card-body d-inline-flex">
                <img src={props.imgSource} alt={props.imgAlt} style={imgStyle} className="p-2 card-img-top" />
                <div className='bookcard-details'>
                    <Link to={`/bookexchange/${props.id}`} style={{ textDecoration: 'none' }} ><h2>{props.bookTitle}</h2></Link>
                    <h5>by <span style={{ color: 'black !important' }}>{props.authorName}</span> | {cost}</h5>
                    <p style={{ color: 'black !important' }}>{description}</p>
                    {renderButtons()}
                    {renderInfo()}
                </div>
            </div>
        </div>
    );
};

export default BookCard;

