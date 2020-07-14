import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Syntagi from './syntagi-card.jsx';

import { connect } from 'react-redux';
import NotAuthenticated from './not-authenticated.jsx';

class SyntagiList extends React.Component {
    state = {
        syntagiData: [],
        hasSyntagi: true,
        syntagiList: []
    }

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount() {
        if (this.props.token) {
            axios.defaults.headers = {
                "Content-Type": "application/json",
                "Authorization": `Token ${this.props.token}`
            }
            axios.get('http://127.0.0.1:8000/api/syntagi/')
                .then(res => {
                    this.setState({
                        syntagiData: res.data,
                        syntagiList: res.data.map(syntagi => <Syntagi id={syntagi.id} title={syntagi.title} author={syntagi.author} prepMins={syntagi.prep_mins} starRating={syntagi.star_rating} image={syntagi.image} imageUrl={syntagi.image_url} />)
                    })
                    this.setState({
                        hasSyntagi: this.state.syntagiList.length !== 0
                    });
                });
        }
    }

    /* LEVENSHTEIN DISTANCE IMPLEMENTATION, NOT IN USE */

    /* levDistance(stringA, stringB) {
        if (stringA.length === 0) return stringA.length;
        if (stringB.length === 0) return stringB.length;

        let matrix = [];

        for (let i = 0; i <= stringB.length; i++) {
            matrix[i] = [i];
        }

        for (let i = 0; i <= stringA.length; i++) {
            matrix[0][i] = i;
        }

        for (let i = 1; i <= stringB.length; i++) {
            for (let j = 1; j <= stringA.length; j++) {
                if (stringB.charAt(i - 1) == stringA.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
                }
            }
        }
        return matrix[stringB.length][stringA.length];
    } */

    handleSearch = e => {
        let search = e.target.value
        console.log(search)
        this.setState({
            syntagiList: this.state.syntagiData.map(data => {
                console.log(data.title)
                if (data.title.toLowerCase().includes(search.toLowerCase())) {
                    return (
                        <Syntagi id={data.id} title={data.title} author={data.author} prepMins={data.prep_mins} starRating={data.star_rating} image={data.image} imageUrl={data.image_url} />
                    )
                } else {
                    return null
                }
            })
        })
    }


    render() {
        return (
            <div className="bg-2 pt-5" style={{ minHeight: '93vh', height: '100%' }}>
                {this.props.isAuthenticated ?
                    this.state.hasSyntagi ?
                        <div className="container">
                            <div>
                                <form className="form-inline mb-4">
                                    <input type="text" className="form-control w-50" id="searchbar" placeholder="Search:" onChange={this.handleSearch} />
                                </form>
                                <div className="row">
                                    {this.state.syntagiList}
                            </div>
                            </div>
                        </div>
                        :
                        <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '90vh' }}>
                            <h2 className="text-center">You have no recipes, add some <Link to="import">here</Link>!</h2>
                        </div>
                    :
                    <NotAuthenticated />
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(SyntagiList);
