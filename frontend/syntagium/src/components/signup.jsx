import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth.js';


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange = e => {
        switch (e.target.id) {
            case "firstName":
                this.setState({ firstname: e.target.value })
            case "lastName":
                this.setState({ lastname: e.target.value })
            case "email":
                this.setState({ email: e.target.value })
            case "username":
                this.setState({ username: e.target.value })
            case "password":
                this.setState({ password: e.target.value })
        }
    }

    onSubmit = e => {
        e.preventDefault()
        console.log('Recieved values from form: ',
        this.state.firstname,
        this.state.lastname,
        this.state.email,
        this.state.username,
        this.state.password
        )
        this.props.onAuth(
            this.state.firstname,
            this.state.lastname,
            this.state.email,
            this.state.username,
            this.state.password
            )
        this.props.history.push('/syntagi');
    }

    render() {
        return (
            <div>
                <form className="form-signup mr-5 ml-5">
                    <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="firstName" placeholder="First Name" required value={this.state.password} onChange={this.onChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="lastName" placeholder="Last Name" required value={this.state.password} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="email" placeholder="Email" required value={this.state.password} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <input type="userName" className="form-control" id="username" placeholder="Username" required value={this.state.password} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" placeholder="Password" required value={this.state.password} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" required />
                            <label className="form-check-label" htmlFor="gridCheck">I agree to the <Link to="/policy">Terms of Service</Link></label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary mr-2">Sign in</button>
                        Have an account?
                        <Link to="/login"> Login</Link>
                    </div>
                </form>
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const dispatchToProps = dispatch => {
    return {
        onAuth: (firstname, lastname, email, username, password) => dispatch(actions.authSignup(firstname, lastname, email, username, password))
    }
}

export default connect(stateToProps, dispatchToProps)(Signup)