import dragArrow from '../images/dragArrow.svg';
import React from 'react';
import QRCode from "react-qr-code";

function UserQR(props) {
  return (
    <div style={{/*vertical layout*/display:"flex", flexDirection:"column", /*take all screen size (hides list)*/height:"100vh"}}>
      <div style={{/*take 80% vertical space->*/ height:"80%", /*align items->*/display:"flex", justifyContent:"center", alignItems:"center"}}>
        <QRCode value={props.user.id} />
      </div>
      <div style={{height: "20%", /*raise*/bottom:"5%"}}>
        <p>Welcome back, {props.user.name}!</p>
        <img height="30px" src={dragArrow} />
       </div>
    </div>
  );
}

export { UserQR };