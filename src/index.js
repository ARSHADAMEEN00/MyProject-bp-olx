import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context, { FirebaseContext } from "./FirebaseContext";
import firebase from "./firebase";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>,

  document.getElementById("root")
);
