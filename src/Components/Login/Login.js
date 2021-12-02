import React, { useContext, useState } from "react";
import Logo from "../../olx-logo.png";
import "./Login.css";
import Loading from "../Loading";
import { FirebaseContext } from "../../FirebaseContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [login, setLogin] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const onHandleChngelogin = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
    console.log(login);
  };
  const handleLogin = (e) => {
    setLoading((currentloading) => !currentloading);
    setTimeout(() => setLoading(false), 2000);
    
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(login.email, login.password)
      .then(() => {
        
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      {loading === false ? 
        <div className="loginParentDiv">
          <img width="200px" height="200px" src={Logo} alt="logoLogin"></img>
          <form onSubmit={handleLogin}>
            <label htmlFor="fname">Email</label>
            <br />
            <input
              className="input"
              type="email"
              id="fname"
              name="email"
              defaultValue="John"
              value={login.name}
              onChange={onHandleChngelogin}
            />
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input 
              className="input"
              type="password"
              id="lname"
              name="password"
              defaultValue="Doe"
              value={login.password}
              onChange={onHandleChngelogin}
            />
            <br />
            <br />
            <button>Login</button>
          </form>
          <Link to='/signup' >
          <a style={{margin:'12px'}} >Signup</a>
          </Link>
        </div>
      : <Loading />}
    </div>
  );
}

export default Login;
