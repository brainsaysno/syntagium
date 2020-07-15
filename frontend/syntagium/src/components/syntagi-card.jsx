import React from 'react';
import { Link } from 'react-router-dom';
import timeIcon from '../time.png';

class Syntagi extends React.Component {

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