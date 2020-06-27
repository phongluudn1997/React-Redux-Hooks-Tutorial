import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
        <Layout>
          <p>Test Main Page.</p>
        </Layout>
      </h1>
    );
  }
}

export default App;
