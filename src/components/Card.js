import React from "react";
import './styles/Card.css';

const Card = props =>{
    return (
        <div className="column">
            <div className="ui  segment">
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

export default Card;