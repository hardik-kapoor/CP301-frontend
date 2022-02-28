import React from "react";
import { Link } from "react-router-dom";
import './styles/Card.css';

const Card = props => {
    return (
        <div className="column">
            <Link to={props.link}>
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
            </Link>
        </div>
    );
};

export default Card;