import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center p-5 bg-2" style={{ height: '90vh' }}>
                    <div className="bg-primary min-vw-100 mb-5 p-5 d-flex justify-content-center align-items-center flex-column">
                        <h1 className="p-5 text-center">You have succesfully logged out!</h1>
                        <Link to='/'><button className="btn bg-beige" style={{ width: '200px', height: "50px", fontSize: '20px' }}>Back to Main Page</button></Link>
                    </div>
            </div>
        )
    }
}

export default Logout;