import React from 'react';
import axios from 'axios';


class SyntagiDetail extends React.Component {
    state = {
        syntagi: []
    }


    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/syntagi/${id}`)
            .then(res => {
                this.setState({
                    syntagi: res.data
                });
                console.log(this.state.syntagi)
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
            <div id="syntagi-detail">
            <img src={this.state.syntagi.image_url} alt={this.state.syntagi.title} className="img-fluid w-100"/>
            </div>
            <div className="container">
                <div className="row">
                </div>
                <div className="row">
                    
                </div>
            </div>
            </React.Fragment>
        );
}
}

export default SyntagiDetail;