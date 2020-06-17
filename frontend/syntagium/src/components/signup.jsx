import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth.js';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password1: '',
            password2: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange = e => {
        switch (e.target.id) {
            case "username":
                this.setState({ username: e.target.value });
                break;
            case "email":
                this.setState({ email: e.target.value });
                break;
            case "password1":
                this.setState({ password1: e.target.value });
                break;
            case "password2":
                this.setState({ password2: e.target.value });
                break;
            default:
                break;
        }
    }

    onSubmit = e => {
        e.preventDefault()
        console.log('Recieved values from form: ',
            this.state.username,
            this.state.email,
            this.state.password1,
            this.state.password2,
        )
        this.props.onAuth(
            this.state.username,
            this.state.email,
            this.state.password1,
            this.state.password2,
        )
        this.props.history.push('/syntagi');
    }

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }
        
        return (
            <div>
            {errorMessage}
                {
                    this.props.loading ?

                        <div className="spinner-border text-secondary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>

                        :

                <form className="form-signup mr-5 ml-5" onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                    <div className="form-group">
                        <input type="userName" className="form-control" id="username" placeholder="Username" required value={this.state.username} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="email" placeholder="Email" required value={this.state.email} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password1" placeholder="Password" required value={this.state.password1} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password2" placeholder="Repeat Password" required value={this.state.password2} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" required />
                            <label className="form-check-label" htmlFor="gridCheck">I agree to the <Link to="/policy">Terms of Service</Link></label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary mr-2">Sign up</button>Have an account? <Link to="/login">Login</Link>
                    </div>
                </form>
                }
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
        onAuth: (email, username, password1, password2) => dispatch(actions.authSignup(email, username, password1, password2))
    }
}

export default connect(stateToProps, dispatchToProps)(Signup)