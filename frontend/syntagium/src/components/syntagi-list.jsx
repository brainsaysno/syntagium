import React from 'react';
import axios from 'axios';
import syntagiData from '../assets/syntagi-data.js';
import Syntagi from './syntagi.jsx';

class SyntagiList extends React.Component {
    state = {
        syntagiList: []
    }

    componentDidMount() {

        axios.get('http://127.0.0.1:8000/api/syntagi/')
            .then(res => {
                this.setState({
                    syntagiList: res.data.map(syntagi => <Syntagi title={syntagi.title} author={syntagi.author} starRating={syntagi.star_rating} image={syntagi.image} />)
                });
                console.log(this.state.syntagiList)
            });
        let syntagiRows = [[]];
        let index = 0;
        for (let element of this.state.syntagiList) {
            if (syntagiRows[index].length === 4) {
                syntagiRows.push([element]);
                index++;
            } else {
                syntagiRows[index].push(element);
            }
        }
        console.log(syntagiRows)
    }

    render () {
    return (
        <div className="container">
            <div className="row">
                {this.state.syntagiList.length ? this.state.syntagiList : 'You got no Syntagis'}
            </div>
        </div>
    );
}
}

export default SyntagiList;