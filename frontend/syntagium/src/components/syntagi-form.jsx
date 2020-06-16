import React from 'react';
import axios from 'axios';


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
        alert('A syntagi has been submitted: ' + this.state.url)
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

export default SyntagiForm;