import React, { Component } from 'react';
import moment from 'moment-timezone';

// UserForm form adds user info to database

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      time: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleTimeChange(event) {
    this.setState({time: event.target.value})
  }

  handleSubmit() {
    // TODO: Send state to db and create entry on grid
    console.log('submit', this.state)
    this.setState({name: '', time: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={this.handleNameChange}
          value={this.state.name} />
        <input
          type="text"
          placeholder="Preferred time"
          onChange={this.handleTimeChange}
          value={this.state.time} />
        <button type="submit">Submit</button>

        {/* Get timezone from browser (moment.js) */}
        {/* {moment.tz(moment.tz.guess()).format('hh:mm a, z')} */}

      </form>
    )
  }
}

export default UserForm;
