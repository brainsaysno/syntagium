import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from './spinner';

class LandingPage extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center flex-column bg-1" style={{ height: '95vh', padding: "0" }}>
            <div className="bg-beige min-vw-100 mb-5 p-5">
                <h1 className="" style={{ fontSize: '60px', textAlign: "center" }}>A place for all your recipes</h1>
            </div>
                <button className="btn bg-beige get-started" style={{ width: '200px', height: '50px' }}><Link to={this.props.isAuthenticated ? "/syntagi" : "/login"} style={{ fontSize: '25px' }}>{this.props.isAuthenticated ? "Go To Recipes" : "Get Started"}</Link></button>
            </div>
        );
    }
}

export default connect()(LandingPage);