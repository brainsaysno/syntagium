import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return (
            <div className="container">
                <h1>A place for all your recipes</h1>
                <button><Link to="/login">Get Started</Link></button>
            </div>
        );
    }
}

export default LandingPage;