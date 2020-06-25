import React from "react";

const User = (props) => {
  const { name, handleChange, handleDelete } = props;
  const style = {
    border: "solid 1px blue",
    textAlign: "center",
    padding: "20px",
    width: "60%",
    margin: "20px auto",
  };
  return (
    <div style={style} onClick={handleDelete}>
      <p>{name}</p>
      <input name="name" type="text" value={name} onChange={handleChange} />
    </div>
  );
};

export default User;
