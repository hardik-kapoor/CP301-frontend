import React from "react";
import { Link } from "react-router-dom";
import '../styles/BookCard.css';
import flask from "../../apis/flask";

const BookCard = props => {
    const cost = props.cost == 0 ? "Free" : "Rs. " + props.cost;
    const imgStyle = { maxWidth: '10vw', maxHeight: '50vh' }
    const len = props.description.length < 100 ? props.description.length : 100;
    const flag = props.description.length < 100 ? false : true;
    let description = props.description.slice(0, len);
    if (flag)
        description = description + "...";

    const renderButtons = () => {
        if (props.showButton)
            return (<button className="btn btn-danger align-self-end btn-block" style={{ marginTop: 'auto' }} onClick={() => removeBook(props.id)}>Remove</button>);
        return null;
    };

    const getBook = id =>{
        
    };

    const removeBook = async id =>{
        // console.log('hello');
        const ans=window.confirm("Are you sure you want to delete?");
        if(ans){
            const response=await flask.delete(`/bookdelete/${id}`)
            props.rerender();
            console.log(response);
        }
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
        <div className="card my-1">
            <div className="card-body d-inline-flex">
                <img src={props.imgSource} alt={props.imgAlt} style={imgStyle} className="p-2 card-img-top" />
                <div className='bookcard-details'>
                    <Link to={`/bookexchange/${props.id}`} style={{ textDecoration: 'none' }} ><h2>{props.bookTitle}</h2></Link>
                    <h5>by <span style={{ color: 'black !important' }}>{props.authorName}</span> | {cost}</h5>
                    <p style={{ color: 'black !important' }}>{description}</p>
                    <button className="btn btn-primary align-self-end btn-block" style={{ marginTop: 'auto', marginRight: '10px' }} onClick={() => getBook(props.id)}>Get</button>
                    {renderButtons()}
                </div>
            </div>
        </div>
        // <div className='bookcard'>
        //     <img src={props.imgSource} alt={props.imgAlt} style={imgStyle} className="p-2" />
        //     <div className='bookcard-details'>
        //         <Link to={`/bookexchange/${props.id}`} style={{ textDecoration: 'none' }} ><h1>{props.bookTitle}</h1></Link>
        //         <h2>by <span style={{ color: 'black !important' }}>{props.authorName}</span> | {cost}</h2>
        //         <p style={{ color: 'black !important' }}>{props.description}</p>
        //         <button className="btn btn-primary align-self-end btn-block mx-2" style={{ marginTop: 'auto' }}>Get</button>
        //         {renderButtons()}
        //     </div>
        // </div>
    );
};

export default BookCard;

