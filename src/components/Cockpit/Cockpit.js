import React, { useRef, useEffect, useContext } from "react";

import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  useEffect(() => {
    toggleButtonRef.current.click();
  }, []);

  const authContext = useContext(AuthContext);

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
      <button
        ref={toggleButtonRef}
        style={style}
        onClick={props.togglePersonsHandler}
      >
        Toggle Persons
      </button>
      <button onClick={authContext.login}>
        {authContext.authenticated ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Cockpit;
