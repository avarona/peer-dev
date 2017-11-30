import React from 'react';

const Example = (props) => {
  return (
    <div>
      <ul>
        <li>Name {props.name}</li>
        <li>Timezone {props.time}</li>
        <li>preferred time {props.preferred}</li>
      </ul>
    </div>
  )
}

export default Example;
