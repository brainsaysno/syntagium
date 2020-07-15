import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap'

import NotAuthenticated from './not-authenticated.jsx';
import Spinner from './spinner.jsx';

class SyntagiForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            loading: false,
            error: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange = e => {
        this.setState({ url: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        this.setState({ loading: true })
        axios.defaults.headers = {
            "Content-Type": "application/json",
            "Authorization": `Token ${this.props.token}`
        }
        axios.post('http://127.0.0.1:8000/api/syntagi/', { url: this.state.url })
            .then(() => {
                this.props.history.push('/syntagi');
            }).catch(() => {
                this.setState({
                    loading: false,
                    error: true,
                });
            });
    }

    render() {
        let errorMessage = null;
        if (this.state.error) {
            errorMessage = (
                <div class="alert alert-warning sticky-top" style={{ top: '58.6px' }} role="alert">
                    The url you entered is incorrect or the website is not currently supported. Please try again!
                </div>
            )
        }

        return (
            <div className="bg-2" style={{ minHeight: '93vh', height: '100%' }}>
                {
                    this.props.isAuthenticated ?
                        this.state.loading ?
                            <Spinner messages={["We're getting the best for you...", "Kitchen working at 100%...", "Steaks are high...", "Washing the cutlery...", "Sharpening the knives..."]} />
                            :
                            <div>
                                <form onSubmit={this.onSubmit} className="min-vw-100" style={{ height: '90vh' }}>
                                    {errorMessage}
                                    <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '90vh' }} >
                                        <div className="input-group mb-2 w-75">
                                            <input type="text" className="form-control" id="url" placeholder="Enter url" value={this.state.url} onChange={this.onChange} />
                                            <div className="input-group-append">
                                                <OverlayTrigger overlay={<Tooltip id="tooltip-top">Supported Websites: www.allrecipes.com</Tooltip>} placement="top">
                                                    <Button>
                                                        <i className="material-icons" style={{ fontSize: '16px' }}>info</i>
                                                    </Button>
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Import Syntagi</button>
                                    </div>
                                </form>
                            </div>
                        :
                        <NotAuthenticated />
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default withRouter(connect(mapStateToProps)(SyntagiForm));