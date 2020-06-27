import React from 'react';
import axios from 'axios';
import Syntagi from './syntagi-card.jsx';
import '../styles.css'

import { connect } from 'react-redux';

class SyntagiList extends React.Component {
    state = {
        syntagiList: []
    }

    componentWillReceiveProps(newProps) {
        if (newProps.token) {
            axios.defaults.headers = {
                "Content-Type": "application/json",
                "Authorization": `Token ${newProps.token}`
            }
            axios.get('http://127.0.0.1:8000/api/syntagi/')
                .then(res => {
                    this.setState({
                        syntagiList: res.data.map(syntagi => <Syntagi id={syntagi.id} title={syntagi.title} author={syntagi.author} prepMins={syntagi.prep_mins} starRating={syntagi.star_rating} image={syntagi.image} imageUrl={syntagi.image_url} />)
                    });
                });
        }
    }

    /* componentDidUpdate(prevProps) {
        if (this.props.token !== prevProps.token) {
            axios.defaults.headers = {
                "Content-Type": "application/json",
                "Authorization": `Token ${this.props.token}`
            }
            axios.get('http://127.0.0.1:8000/api/syntagi/')
                .then(res => {
                    this.setState({
                        syntagiList: res.data.map(syntagi => <Syntagi id={syntagi.id} title={syntagi.title} author={syntagi.author} prepMins={syntagi.prep_mins} starRating={syntagi.star_rating} image={syntagi.image} imageUrl={syntagi.image_url} />)
                    });
                });
        }
    } */

    render() {
        return (
            <div className="content container">
                <form className="form-inline">
                    <input type="text" className="form-control" id="searchbar" placeholder="Search:" />
                    <button type="submit" className="btn btn-primary mb-2">Go!</button>
                </form>
                <div className="row">
                    {this.state.syntagiList}
                </div>
            </div>
        );
    }
}

const stateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(stateToProps)(SyntagiList);
