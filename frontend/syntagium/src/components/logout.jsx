import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {
    render() {
        return (
            <div className="container">
                <h1>You have succesfully logged out!</h1>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsum consequuntur temporibus dolorum, laborum perferendis debitis consectetur nihil! Sed sapiente quaerat incidunt soluta quasi dolores debitis, consectetur a perspiciatis ad.</h4>
                <Link to='/'>Back to Main Page</Link>
            </div>
        )
    }
}

export default Logout;