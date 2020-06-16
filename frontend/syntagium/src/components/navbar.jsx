import React from 'react';
import { Link } from 'react-router-dom';

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
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to="/syntagi" className="nav-link">Recipes <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/import" className="nav-link">Import</Link>
                                </li>
                                {
                                    props.isAuthenticated ?
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">Logout</Link>
                                        </li>
                                        :
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link">Login</Link>
                                        </li>
                                }
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown link
                        </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <Link to="/" className="nav-link dropdown-item text-secondary">Link</Link>
                                        <Link to="/" className="nav-link dropdown-item text-secondary">Link</Link>
                                        <Link to="/" className="nav-link dropdown-item text-secondary">Link</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Navbar;