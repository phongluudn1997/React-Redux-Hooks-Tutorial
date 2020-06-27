import React from "react";
import Person from "./Person/Person";

class Persons extends React.Component {
  render() {
    return (
      <div>
        {this.props.persons.map((person, index) => {
          return (
            <Person
              click={() => this.props.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              id={person.id}
              changed={this.props.nameChangedHandler}
            />
          );
        })}
      </div>
    );
  }
}

export default Persons;
