import React from 'react';
import axios from 'axios';
import Syntagi from './syntagi-card.jsx';

class SyntagiDetail extends React.Component {
    state = {
        syntagi: []
    }

    componentDidMount() {
        const syntagiID = this.props.match.params.syntagiID;
        axios.get(`http://127.0.0.1:8000/api/syntagi/${syntagiID}`)
            .then(res => {
                this.setState({
                    syntagi: res.data
                });
            });
    }

    /* render () {
    return (
        <div className="container">
            <div className="row">
                {this.state.syntagiList.length ? this.state.syntagiList : 'You got no Syntagis'}
            </div>
        </div>
    ); */

    render () {
        return (
            <React.Fragment>
            <img src={this.state.image} alt={this.state.title} className="img-fluid"/>
            <div className="container">
                <div className="row">
                    {this.state.syntagiList[0]}
                    {this.state.syntagiList[1]}
                    {this.state.syntagiList[2]}
                </div>
                <div className="row">
                    
                </div>
            </div>
            </React.Fragment>
        );
}
}

export default SyntagiDetail;