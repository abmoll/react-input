import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {

  state = {
    //persons: [
    userOutputs: [
      {name: 'Alex JimBob', age: 49},
      {name: 'David', age: 46},
      {name: 'Matt', age: 47}
    ],
    otherState: 'other value'
  }

  switchNameHandler = (newName) => {
      console.log('was clicked');
      //DON'T DO THIS:  this.state.persons[0].name = "Alejandro";
      this.setState({
          // persons: [
          //   {name: newName, age: 49},
          //   {name: 'David', age: 42},
          //   {name: 'Matt', age: 47}
          // ],
          userOutputs: [
            {name: newName, age: 49},
            {name: 'David', age: 42},
            {name: 'Matt', age: 47}
          ],
      })
  }

  nameChangedHandler = (event) => {
      this.setState({
          // persons: [
          //   {name: 'Alex', age: 49},
          //   {name: event.target.value, age: 42},
          //   {name: 'Matt', age: 47}
          // ],
          userOutputs: [
            {name: 'Alex', age: 49},
            {name: event.target.value, age: 42},
            {name: 'Tyler', age: 16}
          ],
      })
  }

  render() {

    const mystyle = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
        <div className='App'>
            <h1>I am another App</h1>
            <p>Looks to be fine, just fine...</p>
            <button
                style={mystyle}
                onClick={this.switchNameHandler.bind(this,"Alejandro!!")}>Switch Name</button>
            <UserOutput
                name={this.state.userOutputs[0].name}
                age={this.state.userOutputs[0].age}/>
            <UserOutput
                name={this.state.userOutputs[1].name}
                age={this.state.userOutputs[1].age}
                click={this.switchNameHandler.bind(this, "Alex!")}
                changed={this.nameChangedHandler}>Hobbies: Mountain Biking
            </UserOutput>
            <UserOutput
                name={this.state.userOutputs[2].name}
                age={this.state.userOutputs[2].age}/>
            <UserInput changed={this.nameChangedHandler} currentName={this.state.name}/>
          </div>
            // <UserInput
            //     name={this.state.userInputs[2].name}
            //     age={this.state.userInputs[2].age}/>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  }
}

export default App;
