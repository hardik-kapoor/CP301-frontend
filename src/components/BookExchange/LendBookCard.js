import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/BookCard.css';
import Select from 'react-select';

const LendBookCard = props => {
    const cost = props.cost == 0 ? "Free" : "Rs. " + props.cost;
    const imgStyle = { maxWidth: '10vw', maxHeight: '50vh' }
    const len = props.description.length < 100 ? props.description.length : 100;
    const flag = props.description.length < 100 ? false : true;
    let description = props.description.slice(0, len);
    if (flag)
        description = description + "...";

    const [sellTo,setSellTo]=useState(null);

    const createOptions = orders =>{
        const options=[];
        orders.map(order=>{
            options.push({value:order.user_id,label:`Username: ${order.username} | Email Id: ${order.email_id}`});
        });
        return options;
    };

    const renderDropdown = () => {
        const options=createOptions(props.Orders)
        return (
            <div className="field w-75">
                <div className="font-weight-bold">Sell To</div>
                <div className="">
                <Select
                    onChange={value => setSellTo(value)}
                    isClearable={true}
                    options={options}
                />
                </div>
            </div>
        );
    };

    return (
        <div className="card my-1" style={{ height: '35vh' }}>
            <div className="card-body d-inline-flex">
                <img src={props.imgSource} alt={props.imgAlt} style={imgStyle} className="p-2 card-img-top" />
                <div className='bookcard-details w-100'>
                    <Link to={`/bookexchange/${props.id}`} style={{ textDecoration: 'none' }} ><h2>{props.bookTitle}</h2></Link>
                    <h5>by <span style={{ color: 'black !important' }}>{props.authorName}</span> | {cost}</h5>
                    <p style={{ color: 'black !important' }}>{description}</p>
                    {renderDropdown()}
                </div>
            </div>
        </div>
    );
};

export default LendBookCard;

