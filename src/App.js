import React, { useContext, useEffect } from "react";
import "./App.css";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./Pages/Signup";
import LoginPage from './Pages/Login'
import {FirebaseContext, AuthContext } from "./FirebaseContext";
import Create from "./Components/Create/Create";

function App() {
    const {setUser} = useContext(AuthContext)  
    const {firebase} = useContext(FirebaseContext)
    
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  }, [])

  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
         

          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>

          <Route path="/create">
            <Create/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
