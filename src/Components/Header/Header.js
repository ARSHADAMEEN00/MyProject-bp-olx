import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../FirebaseContext';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function Header() {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
            <Link to='/login' >
          <span style={{fontSize:'20px'}} >{user ? `${user.displayName} ` : 'Login'}</span>
          </Link>
          {/* <i className='ui icon big user' ></i> */}
          {/* <img src="" alt="userlog" /> */}
         {user ? <i className="ui icon user" ></i> : ''}
        </div>
       {user ? <span onClick={()=>{
         firebase.auth().signOut();
         history.push('/signup')
       }}  style={{cursor:'pointer'}} ><i className="ui icon big logout "></i> </span> : ''}
        <div className="sellMenu">
          <SellButton></SellButton>
           <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to='/create' >
           <span>SELL</span> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
