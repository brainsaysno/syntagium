import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center flex-column p-5" style={{ height: '90vh' }}>
                <h1 className="p-5 text-center">You have succesfully logged out!</h1>
                <button className="btn btn-primary" style={{ width: '200px', height: "50px" }}><Link to='/' className="text-beige" style={{ fontSize: '20px'}}>Back to Main Page</Link></button>
            </div>
        )
    }
}

export default Logout;