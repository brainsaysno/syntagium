import React from 'react';
import { Link } from 'react-router-dom';
import '../custom.css';
import '../styles.css';
import timeIcon from '../time.png';


function Syntagi(props) {
    console.log(props.id)
    return (
        <div className="col-xl-3 col-lg-6" >
            <div className="recipe-box" id="syntagi-dashboard-card">
            <Link to={`/syntagi/${props.id}`}>
                <div className="box-image">
                        <img src={props.imageUrl} alt="Image 3"/>
                </div>
                <div className="box-content">
                    <h2 className="text-primary">{props.title}</h2>
                    <div className="box-meta text-secondary">
                        By: <b>{props.author}</b> - <img src={timeIcon} style={{ width: '1rem', height: '1rem'}}></img> <time>{props.prepMins}</time>
                    </div>
                </div>
            </Link>
           </div>
        </div> 
        

    )
}

{/* <div className="col-xl-3 col-lg-6">
            <div className="card" style={{ backgroundColor: "#BEC1D5" }} id="syntagi-dashboard-card">
                <Link to={`/syntagi/${props.id}`}>
                    <img src={props.image} alt={props.title} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title text-center" id="syntagi-dashboard-card-title">{props.title}</h5>
                        <p className="card-text"><span className="text-left">By: <b>{props.author}</b></span><span className="text-right"><time>{props.prepMins} minutes</time></span></p>
                        <p className="card-text text-left">{'♣'.repeat(props.star_rating)}</p>
                    </div>
                </Link>
            </div>
        </div> */}


export default Syntagi;