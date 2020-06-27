import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Person.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <div className="Person">
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please Login</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef}
          type="text"
          onChange={(e) => this.props.changed(e, this.props.id)}
          value={this.props.name}
        />
      </div>
    );
  }

  static propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    id: PropTypes.string,
    age: PropTypes.number,
  };
}

export default Person;
