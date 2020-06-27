import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';


class SyntagiDetail extends React.Component {
    state = {
        syntagi: []
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        if (newProps.token) {
            axios.defaults.headers = {
                "Content-Type": "application/json",
                "Authorization": `Token ${newProps.token}`
            }
            const id = this.props.match.params.id;
            axios.get(`http://127.0.0.1:8000/api/syntagi/${id}/`)
                .then(res => {
                    this.setState({
                        title: res.data.title,
                        author: res.data.author,
                        description: res.data.description,
                        ingredientList: res.data.ingredients.split("\n").map(obj => {
                            return (
                                <li>{obj}</li>
                            )
                        }),
                        directionList: res.data.directions.split("\n").map(obj => {
                            return (
                                <li>{obj}</li>
                            )
                        }),
                        prepMins: res.data.prep_mins,
                        imageUrl: res.data.image_url
                    });
                    console.log(this.state.syntagi)
                });
        }
    }

    /* render () {
    return (
        <div className="container">
            <div className="row">
                {this.state.syntagiList.length ? this.state.syntagiList : 'You got no Syntagis'}
            </div>
        </div>
    ); */

    render() {
        return (
            <React.Fragment>
                <div id="syntagi-detail">
                    <img src={this.state.imageUrl} alt={this.state.title} className="img-fluid w-100 h-sm" />
                </div>
                <div className="container">
                    <div className="page-header mt-3">
                        <h1>{this.state.title}</h1>
                    </div>
                    <div class="card mt-3 border border-rounded" style={{ backgroundColor: '#eee' }}>
                        <div class="card-body">Prep Time: {this.state.prepMins}</div>
                    </div>
                    <div className="row mt-4">
                        <div className="col col-4">
                            <div className="jumbotron border border-rounded position-sticky">
                                <h3>Ingredients</h3>
                                <hr className="solid" />
                                <ul>
                                    {this.state.ingredientList}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-8">
                            <div className="jumbotron border border-rounded">
                                <h2>Directions</h2>
                                <hr className="solid" />
                                <ul>
                                    {this.state.directionList}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const stateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(stateToProps)(SyntagiDetail);