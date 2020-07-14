import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../store/actions/auth.js'
import Spinner from './spinner.jsx';

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
    }

    componentDidUpdate(prevProps) {
        if (prevProps.token !== this.props.token && this.props.token !== null) {
            this.props.history.push('/')
        }
    }

    render() {
        let errorMessage = null;
        if (this.props.error) {
            console.log(this.props.error.message)
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
                        <Spinner messages={["Logging in...", '1', 'asdasdasd', '312314', '312315151356']} />
                        :
                        <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '90vh' }}>
                            <div className="card min-vw-100 p-5 bg-primary">
                                {errorMessage}
                                <form className="form-signin mr-5 ml-5" onSubmit={this.onSubmit}>
                                    <h1 className="h2 mb-3 font-weight-bold">Please Sign In</h1>
                                    <div className="form-group">
                                        <input type="text" id="inputUsername" className="form-control" placeholder="Username" required autoFocus value={this.state.username} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.onChange} />
                                    </div>
                                    <div>
                                        <button className="btn bg-beige mr-2 text-primary" type="submit">Sign in</button>Don't have an account? <Link to='/signup' className="text-beige">Sign Up</Link>
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
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));