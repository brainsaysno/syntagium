import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/navbar.jsx';
import BaseRouter from './routes.jsx';
import * as actions from './store/actions/auth.js';


class App extends React.Component {

	componentDidMount() {
		this.props.onTryAutoSignup();
	}

	render() {
		return (
			<Router>
				<Navbar {...this.props} />
				<BaseRouter />
			</Router>
		);
	}
}


const stateToProps = state => {
	return {
		isAuthenticated: state.token !== null
	}
}

const dispatchToProps = dispatch => {
	return {
		onTryAutoSignup: () => dispatch(actions.authCheckState())
	}
}

export default connect(stateToProps, dispatchToProps)(App);
