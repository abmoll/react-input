import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {

  state = {
    //persons: [
    userOutputs: [
      {id: '01', name: 'Alexander', age: 49, length: 2},
      {id: '02', name: 'David', age: 46, length: 4},
      {id: '03', name: 'Matthew', age: 47, length: 7}
    ],
    otherState: 'other value',
    showPersons: false

  }

  // switchNameHandler = (newName) => {
  //     console.log('was clicked');
  //     //DON'T DO THIS:  this.state.persons[0].name = "Alejandro";
  //     this.setState({
  //         userOutputs: [
  //           {name: newName, age: 49},
  //           {name: 'David', age: 42},
  //           {name: 'Matt', age: 47}
  //         ],
  //     })
  // }

  deletePersonHandler = (personIndex) => {
      const persons = this.state.userOutputs.slice();
      persons.splice(personIndex, 1);
      this.setState({userOutputs: persons});
  }

  nameChangedHandler = (event, id) => {
      const personIndex = this.state.userOutputs.findIndex(p => {
          return p.id === id;
      });

      const person = {
        ...this.state.userOutputs[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.userOutputs]
      persons[personIndex] = person;

      this.setState({
          // persons: [
          //   {name: 'Alex', age: 49},
          //   {name: event.target.value, age: 42},
          //   {name: 'Matt', age: 47}
          // ],
          userOutputs: persons

          // [
          //   {name: 'Alex', age: 49},
          //   {name: event.target.value, age: 42},
          //   {name: 'Tyler', age: 16}
          // ],
      })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {

    const mystyle = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    var persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.userOutputs.map((person, index) => {
            return <UserOutput
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              length={person.length}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
          </div>
        );
      }
          // <UserOutput
          //     name={this.state.userOutputs[0].name}
          //     age={this.state.userOutputs[0].age}/>
          // <UserOutput
          //     name={this.state.userOutputs[1].name}
          //     age={this.state.userOutputs[1].age}
          //     click={this.switchNameHandler.bind(this, "Alex!")}
          //     changed={this.nameChangedHandler}>Hobbies: Mountain Biking
          // </UserOutput>
          // <UserOutput
          //     name={this.state.userOutputs[2].name}
          //     age={this.state.userOutputs[2].age}/>
          // <UserInput changed={this.nameChangedHandler} currentName={this.state.userOutputs[1].name}/>


    return (
        <div className='App'>
            <h1>Application</h1>
            <p>Looks to be fine, just fine...</p>
            <button
                style={mystyle}
                //onClick={this.switchNameHandler.bind(this,"Alejandro!!")}>Switch Name</button>
                onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}

          </div>
            // <UserInput
            //     name={this.state.userInputs[2].name}
            //     age={this.state.userInputs[2].age}/>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  }
}

export default App;
