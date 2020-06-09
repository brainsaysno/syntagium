import React from 'react';
import { Link } from 'react-router-dom';


function Syntagi(props) {
    return (
    <div className="col-sm">
        <div className="card" id="syntagi-dashboard-card">
            <Link to={`/syntagi/${props.id}`}>
            <img src={props.image} alt={props.title} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title text-left">{props.title}</h5>
                <p className="card-text text-left">{props.author}</p>
                <p className="card-text text-left">{'♣'.repeat(props.star_rating)}</p>
            </div>
            </Link>
        </div>
    </div>
    )
}

export default Syntagi;