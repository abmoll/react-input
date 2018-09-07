import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {

    return (
      <div className="UserOutput">
          <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
          <p>{props.children}</p>

      </div>
    )
};

export default userOutput;
