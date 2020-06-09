import React from 'react';
import burguer from '../assets/burguer.jpg'
import pizza from '../assets/pizza.jpg'
import tacos from '../assets/tacos.jpg'

function Syntagi(props) {
    return (
    <div className="col-sm">
        <div className="card" style={{ width: '100%' }}>
            <img src={props.image} alt={props.title} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title text-left">{props.title}</h5>
                <p className="card-text text-left">{props.author}</p>
                <p className="card-text text-left">{'♣'.repeat(props.star_rating)}</p>
            </div>
        </div>
    </div>
    )
}

export default Syntagi;