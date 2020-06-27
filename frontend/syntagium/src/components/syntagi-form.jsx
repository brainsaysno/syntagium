import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';


class SyntagiForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: '' }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange = e => {
        this.setState({ url: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        alert(this.props.token)
        axios.defaults.headers = {
            "Content-Type": "application/json",
            "Authorization": `Token ${this.props.token}`
        }
        axios.post('http://127.0.0.1:8000/api/syntagi/', {url: this.state.url})
            .then(response => { alert(response.data) })
    }

    render() {
        return (
            <div className="content">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="url">Url:</label>
                        <input type="text" class="form-control" id="url" placeholder="Enter url" value={this.state.url} onChange={this.onChange}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Import Syntagi</button>
                </form>
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(stateToProps)(SyntagiForm);