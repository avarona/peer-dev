import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import UserEntry from '../components/UserEntry.jsx';
import UserForm from './UserForm.jsx';
import { exampleUpdate } from '../redux/reducers/example';

class AppContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			time: moment().format('MMMM Do YYYY, h:mm:ss a')
		}
		this.tick = this.tick.bind(this);
	}

	tick() {
		this.setState({
			time: new moment().format('MMMM Do YYYY, h:mm:ss a')
		})
	}

	componentDidMount() {
		this.timer = setInterval(
      () => this.tick(),
      1000
    );
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<div>
				<h1>Timezone App</h1>
				<h3>{this.state.time}</h3>
			<hr />
			<br />
        <UserEntry
					name="Alex"
					time="EST"
					preferred="3pm" />
				<button>Join Session</button>
				<UserForm />
      </div>
    )
  }
}

/* REDUX CONTAINER */

const mapStateToProps = ({ example }) => ({ example });

const mapDispatchToProps = dispatch => ({
  update: () => dispatch(exampleUpdate())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
