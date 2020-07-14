import React from 'react';

export default class Spinner extends React.Component {
    state = {
        message: "Loading..."
    }
    constructor(props) {
        super(props);
        if (this.props.messages.length) {
            this.state.message = this.props.messages[Math.floor(Math.random()* this.props.messages.length)];
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '90vh' }}>
                    <div className="spinner-border text-primary text-xl" style={{ width: "100px", height: "100px" }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <h1 className="text-center p-4 text-primary">{this.state.message}</h1>
                </div>
            </React.Fragment>
        );
    }
}