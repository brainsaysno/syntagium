import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth.js';
import Spinner from './spinner.jsx';


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
        this.props.onAuth(
            this.state.username,
            this.state.email,
            this.state.password1,
            this.state.password2,
        )
    }

    componentDidUpdate(prevProps) {
        if (prevProps.token !== this.props.token && this.props.token !== null) {
            this.props.history.push('/')
        }
    }

    render() {
        let errorMessage = null;
        if (this.props.error) {
            if (this.props.error.message === 'Request failed with status code 400') {
                errorMessage = (
                    <div class="alert alert-warning" role="alert">
                        Some data you entered may be incorrect. Please try again!
                    </div>
                )
            }
            if (this.props.error.message === 'Request failed with status code 500' || this.props.error.message === 'Network Error') {
                errorMessage = (
                    <div class="alert alert-warning" role="alert">
                        The page is having some trouble. Please try again later!
                    </div>
                )
            }
        }

        return (
            <div>
                {
                    this.props.loading ?
                        <Spinner messages={["Signing in...", "Filling out the recipes...", "Peeling some potatoes...", "Cracking some eggs...", "Adding some spice..."]} />
                        :
                        <div className="d-flex justify-content-center align-items-center flex-column bg-2" style={{ height: '90vh' }}>
                            <div className="card min-vw-100 p-5 bg-primary">
                                {errorMessage}
                                <form className="form-signup mr-5 ml-5" onSubmit={this.onSubmit}>
                                    <h1 className="h2 mb-3 font-weight-bold">Sign Up</h1>
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
                                            <label className="form-check-label" htmlFor="gridCheck">I agree to the <Link to="/policy" className="text-beige">Terms of Service</Link></label>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn bg-beige mr-2 text-primary">Sign up</button>Have an account? <Link to="/login" className="text-beige">Login</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));