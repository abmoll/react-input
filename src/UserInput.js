import React from 'react';
import './UserOutput.css';

const userInput = (props) => {

    return (
      <div className="UserInput">
          <input type="text" onChange={props.changed} value={props.currentName}/>
      </div>
    )
};

export default userInput;
