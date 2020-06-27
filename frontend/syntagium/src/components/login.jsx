import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../store/actions/auth.js'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange = e => {
        if (e.target.id === 'inputUsername') {
            this.setState({ username: e.target.value })
        } else {
            this.setState({ password: e.target.value })
        }
    }

    onSubmit = e => {
        e.preventDefault()
        console.log('Recieved values from form: ', this.state.username, this.state.password)
        this.props.onAuth(this.state.username, this.state.password)
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

                        <form className="form-signin mr-5 ml-5" onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <input type="text" id="inputUsername" className="form-control" placeholder="Username" required autoFocus value={this.state.username} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.onChange} />
                            </div>
                            <div>
                                <button className="btn btn-primary mr-2" type="submit">Sign in</button>Don't have an account? <Link to='/signup'>Sign Up</Link>
                            </div>
                        </form>

                    /* <form className="form-signin mr-5 ml-5">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                    </form> */
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
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(stateToProps, dispatchToProps)(Login);