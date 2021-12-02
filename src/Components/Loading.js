import React from "react";
import Logo from '.././olx-logo.png';

function Loading() {
  return (
    <div style={{display:'grid',justifyContent: 'center', alignItems: 'center', margin:'150px'}} >
      <div class="ui card"  >
          <img src={Logo} alt='logos' ></img>
        <div class="ui active inverted dimmer">
          <div class="ui large text loader">Loading</div>
        </div>
      </div>
    
    </div>
  );
}

export default Loading;