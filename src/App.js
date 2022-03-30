import React from "react";
import { connect } from "react-redux";

function App(props) {
  return (
    <div>
      <h1>{props.count}</h1>
      <button>-</button>
      <button>+</button>
    </div>
  );
}

const mapStateToProps = (globalState) => ({count: globalState})

export default connect(mapStateToProps, {})(App);
