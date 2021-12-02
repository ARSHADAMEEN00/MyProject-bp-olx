import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../FirebaseContext';

import Logo from '../../olx-logo.png';
import Loading from '../Loading';
import './Signup.css';
const initialState = {
  name: "",
  email: "",
  phone: "",
  password: "",
};

export default function Signup() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [username, setUsername] = useState(initialState)
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()

  const onHandleChnge = (e) => {
    const { name, value } = e.target;
    setUsername({
      ...username,
      [name]: value,
    });
    console.log(username);
  };
  
  const onHandleSubmit=(e)=>{
    setIsLoaded(currentIsLoaded => !currentIsLoaded)
    setTimeout(() => setIsLoaded(false), 3000)
    e.preventDefault()
    console.log(firebase)
    firebase.auth().createUserWithEmailAndPassword(username.email, username.password).then((result)=>{
      result.user.updateProfile({displayName:username.name}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username: username.name,
          phone:username.phone
        })
        .then(()=>{
          history.push("/login")
        })
      })
      console.log(result)
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
    {isLoaded === false ? 
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo' ></img>
        <form  onSubmit={onHandleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            defaultValue="John"
            name="name"
            value={username.name}
            onChange={onHandleChnge}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            defaultValue="John"
            name="email"
            value={username.email}
            onChange={onHandleChnge}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            defaultValue="Doe"
            name="phone"
            value={username.phone}
            onChange={onHandleChnge}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            defaultValue="Doe"
            name="password"
            value={username.password}
            onChange={onHandleChnge}
          />
          <br />
          <br />
          <button >Signup</button>
        </form>
        
          <Link to='/login'>
        <a style={{margin:'10px'}} >Login</a>
          </Link>
      </div> 
         : <Loading/>}
    </div>
  );
}
