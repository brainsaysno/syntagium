import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class SyntagiForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ url: event.target.value })
    }

    handleSubmit(event) {
        alert('A syntagi has been submitted: ' + this.state.url)
        axios.post('http://127.0.0.1:8000/api/syntagi/', {url: this.state.url})
            .then(response => { alert(response.data) })
        event.preventDefault()
    }

    render() {
        return (
            <div className="content">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="url">Url:</label>
                        <input type="text" class="form-control" id="url" placeholder="Enter url" value={this.state.url} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Import Syntagi</button>
                </form>
            </div>
        )
    }
}

export default SyntagiForm;