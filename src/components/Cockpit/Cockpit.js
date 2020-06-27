import React from "react";

const Cockpit = (props) => {
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      background: "lightgreen",
      color: "black",
    },
  };

  const classes = [];
  if (props.persons.length <= 2) {
    classes.push("red"); // classes = "red"
  }
  if (props.persons.length <= 1) {
    classes.push("bold"); // classes = "red bold"
  }

  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>This is really working!</p>
      <button style={style} onClick={props.togglePersonsHandler}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
