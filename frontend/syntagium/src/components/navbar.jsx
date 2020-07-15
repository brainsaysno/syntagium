import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../store/actions/auth.js'

class Navbar extends React.Component {

    render() {
        return (
            <header className="fixed-top page-header">
                <div className="container-fluid-max">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <Link to="/" className="navbar-brand text-light">Syntagium</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            {
                                this.props.isAuthenticated ?
                                    <React.Fragment>
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item">
                                                <Link to="/syntagi" className="nav-link">Recipes</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/import" className="nav-link">Import</Link>
                                            </li>
                                        </ul>
                                        <ul className="nav navbar-nav navbar-right">
                                            <li className="nav-item">
                                                    <Link to="/logout" className="nav-link" onClick={this.props.logout}>Logout</Link>
                                            </li>
                                        </ul>
                                    </React.Fragment>
                                    :
                                    <ul className="nav navbar-nav navbar-right ml-auto">
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link">Login</Link>
                                        </li>
                                    </ul>
                            }

                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Navbar);