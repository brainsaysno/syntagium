import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NotAuthenticated extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '95vh' }}>
                <div className="bg-primary min-vw-100 mb-5 p-5">
                    <h1 className="text-center">You are not logged in. <Link className="text-beige" to="/login">Log in</Link></h1>
                </div>
            </div>
        )
    }
}
