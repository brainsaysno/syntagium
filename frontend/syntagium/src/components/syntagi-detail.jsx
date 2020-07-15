import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import NotAuthenticated from './not-authenticated';
import { withRouter } from 'react-router-dom';


class SyntagiDetail extends React.Component {
    state = {
        syntagi: []
    }

    componentDidMount() {
        if (this.props.token) {
            axios.defaults.headers = {
                "Content-Type": "application/json",
                "Authorization": `Token ${this.props.token}`
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
                });
        }
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.isAuthenticated ?
                        <div className="bg-2" style={{ minHeight: '93vh', height: '100%' }}>
                            <div id="syntagi-detail">
                                <img src={this.state.imageUrl} alt={this.state.title} className="img-fluid w-100" />
                            </div>
                            <div className="page-header bg-primary min-vw-100 d-flex align-items-center justify-content-center sticky-top" style={{ height: '100px', top: '58.4px' }}>
                                <h1 className="text-center">{this.state.title}</h1>
                            </div>
                            <div className="container">

                                <div class="card mt-3 border-rounded border-primary border-2 bg-beige" style={{ border: '10px solid' }}>
                                    <div className="card-body">
                                        <h5>Prep Time: {this.state.prepMins}</h5>
                                        <hr className="solid" />
                                        <p className="text-justify">{this.state.description}</p>
                                    </div>
                                </div>
                                {
                                    window.matchMedia('(min-width: 992px)').matches ?
                                        <div className="row mt-4">
                                            <div className="col col-4">
                                                <div className="jumbotron border-rounded position-sticky border-primary border-2 bg-beige" style={{ border: '10px solid' }}>
                                                    <h3>Ingredients</h3>
                                                    <hr className="solid" />
                                                    <ul>
                                                        {this.state.ingredientList}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col col-8">
                                                <div className="jumbotron border-rounded border-primary border-2 bg-beige" style={{ border: '10px solid' }}>
                                                    <h2>Directions</h2>
                                                    <hr className="solid" />
                                                    <ul>
                                                        {this.state.directionList}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <React.Fragment>
                                            <div className="row mt-4">
                                                <div className="col">
                                                    <div className="jumbotron border-rounded position-sticky border-primary border-2 bg-beige" style={{ border: '10px solid' }}>
                                                        <h3>Ingredients</h3>
                                                        <hr className="solid" />
                                                        <ul>
                                                            {this.state.ingredientList}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="jumbotron border-rounded border-primary border-2 bg-beige" style={{ border: '10px solid' }}>
                                                        <h2>Directions</h2>
                                                        <hr className="solid" />
                                                        <ul>
                                                            {this.state.directionList}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                }

                            </div>
                        </div>
                        :
                        <NotAuthenticated />
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default withRouter(connect(mapStateToProps)(SyntagiDetail));