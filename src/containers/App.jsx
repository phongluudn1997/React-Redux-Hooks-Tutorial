import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    this.nameChangedHandler = this.nameChangedHandler.bind(this);
    this.state = {
      persons: [
        { id: "asfa1", name: "Max", age: 28 },
        { id: "vasdf1", name: "Manu", age: 29 },
        { id: "asdf11", name: "Stephanie", age: 26 },
      ],
      otherState: "some other value",
      showPersons: false,
    };
  }

  nameChangedHandler(event, id) {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState((state) => {
      return { showPersons: !state.showPersons };
    });
  };

  render() {
    const { persons, showPersons } = this.state;

    return (
      <div className="App">
        <Cockpit
          togglePersonsHandler={this.togglePersonsHandler}
          persons={persons}
        />
        {showPersons && (
          <Persons
            persons={persons}
            deletePersonHandler={this.deletePersonHandler}
            nameChangedHandler={this.nameChangedHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
