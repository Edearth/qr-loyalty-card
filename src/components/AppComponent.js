import React from 'react';
import { UserQRContainer, LoyaltyCardListContainer } from '../containers/index';

function AppComponent() {
    return (
      <div className="App" style={{/*align items->*/width:"100%"}}>  
        <div style={{/*set max width->*/maxWidth:"600px", minWidth:"350px", /*align to center*/margin:"auto"}}>
          <div style={{/*bg color*/ backgroundColor:"white"}}>
            <UserQRContainer />
            <h1 style={{fontWeight:"bolder", textAlign:"left", color:"red"}}>Your cards:</h1>
          </div>
          <div style={{/*bg color*/ backgroundColor:"slategray"}}>
            <LoyaltyCardListContainer />
          </div>
        </div> 
      </div>
    );
}

export { AppComponent };
