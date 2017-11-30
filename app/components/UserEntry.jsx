import React from 'react';

// UserEntry creates a row for the user who signs up

const UserEntry = (props) => {
  return (
    <div>
      {/* TODO: change to grid system */}
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Timezone:</strong> {props.time}
        </li>
        <li>
          <strong>Preferred:</strong> {props.preferred}
        </li>
      </ul>
    </div>
  )
}

export default UserEntry;
