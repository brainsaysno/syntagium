import React from 'react';
import axios from 'axios';
import Syntagi from './syntagi-card.jsx';
import '../styles.css'

class SyntagiList extends React.Component {
    state = {
        syntagiList: []
    }

    componentDidMount() {

        axios.get('http://127.0.0.1:8000/api/syntagi/')
            .then(res => {
                this.setState({
                    syntagiList: res.data.map(syntagi => <Syntagi id={syntagi.id} title={syntagi.title} author={syntagi.author} prepMins={syntagi.prep_mins} starRating={syntagi.star_rating} image={syntagi.image} imageUrl={syntagi.image_url} />)
                });
                console.log(res);
            });
        /* let syntagiRows = [[]];
        let index = 0;
        for (let element of this.state.syntagiList) {
            if (syntagiRows[index].length === 4) {
                syntagiRows.push([element]);
                index++;
            } else {
                syntagiRows[index].push(element);
            }
        }
        console.log(syntagiRows) */
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
            <div className="content container">
                <form className="form-inline">
                    <input type="text" className="form-control" id="searchbar" placeholder="Search:" />
                    <button type="submit" className="btn btn-primary mb-2">Go!</button>
                </form>

                <div className="row">
                    {this.state.syntagiList}
                </div>
                <div className="row">

                </div>
            </div>
        );
    }
}

export default SyntagiList;

