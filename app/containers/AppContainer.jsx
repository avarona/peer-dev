import React, { Component } from 'react';
import { connect } from 'react-redux';

import Example from '../components/Example.jsx';
import UserForm from '../components/UserForm.jsx';
import { exampleUpdate } from '../redux/reducers/example';

class AppContainer extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div>
				<h1>Timezone App</h1>
        <Example name="Alex" time="EST" preferred="3pm" />
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
