import React from 'react';
import { Link } from 'react-router-dom';
import timeIcon from '../time.png';
import axios from 'axios';

class Syntagi extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDelete = e => {
        const id = this.props.id;
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`
        }
        axios.delete(`http://127.0.0.1:8000/api/syntagi`).then(() => this.forceUpdate());
    }

    render() {
        return (
            <div className="col-xl-3 col-lg-6" >
                <div className="recipe-box" id="syntagi-dashboard-card">
                    <Link to={`/syntagi/${this.props.id}`}>
                        <div className="box-image">
                            <img src={this.props.imageUrl} alt={this.props.title} loading="lazy" />
                        </div>
                        <div className="box-content">
                            <h2 className="text-primary">{this.props.title}</h2>
                            <div className="box-meta text-secondary">
                                By: <b>{this.props.author}</b> - <img src={timeIcon} alt="time" className="not-draggable" style={{ width: '1rem', height: '1rem' }} draggable='false'></img> <time>{this.props.prepMins}</time>
                            </div>

                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Syntagi;