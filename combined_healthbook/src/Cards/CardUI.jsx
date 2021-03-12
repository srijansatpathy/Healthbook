import React from 'react';
import "./Cards.css";

const Card = props => {
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt='Image 1' className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <h1 className="card-text text-secondary">{props.body1}</h1>
                <h1 className="card-text text-secondary">{props.body2}</h1>
                <h1 className="card-text text-secondary">{props.body3}</h1>
                <h1 className="card-text text-secondary">{props.body4}</h1>
                <a href="#" className="btn btn-outline 
                success">{props.b1}</a>
                <p></p>
                <a href="#" className="btn btn-outline 
                success">{props.b2}</a>
                <p></p>
                <a href="#" className="btn btn-outline 
                success">{props.b3}</a>
            </div>
        </div>
    );
}

export default Card;