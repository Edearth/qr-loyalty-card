import dragArrow from './dragArrow.svg';
import './App.css';
import QRCode from "react-qr-code";
import uuid from "react-uuid";

var user = {
  id : uuid(),
  name : "Tester Test"
}

function LoyaltyCardItem(props) {
  return (
    <div style={{/*horizontal layout*/display:"flex", /*card size*/ height:"150px",/*border*/ margin: "10px", borderWidth:"4px", borderColor:"orangered", borderStyle:"solid", borderTopWidth:"0", borderLeftWidth:"0"/*borderTopColor:"red", borderTopWidth:"1px", borderLeftColor:"red", borderLeftWidth:"1px"*/ , /*bg color*/ backgroundColor:"white" }}>
      <img src={props.store.picture} style= {{/*card image size with crop*/width:"30%", height:"150px", objectFit:"cover"}} alt={props.store.name + "'s picture"} />
      <div style={{/*card text size*/flex:"70%", /*margins to align content*/marginLeft:"5%", marginRight:"5%"}}>
        <h3 style={{height:"1.4em", lineHeight:"1.4em", textAlign:"left", textOverflow:"ellipsis", overflow:"hidden"}}>{props.store.name}</h3>
        <div style={{display:"flex"}}>
          <p style={{textAlign:"right", margin:"0", /*take all left space*/ marginLeft:"auto", /*highlight*/fontWeight:"bold", color:"orangered"}}>{props.store.stampsCollected} / {props.store.stampsRequired}</p>
          <p style={{textAlign:"right", margin:"0", fontWeight:"bold"}}>&nbsp;collected</p>
        </div>
        <p style={{color:"gray"}}>You need to collect {props.store.stampsRequired - props.store.stampsCollected} stamps more to get your reward!</p>
      </div>
    </div>
  )
}

function LoyaltyCardList(props) {
  let response = mockedListResponse();
  return (
    <div style={{/*vertical layout*/display:"flex", flexDirection:"column"}}>
      { response.stores.map ( store =>
          <LoyaltyCardItem store={store} />
        )
      }
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{/*align items->*/width:"100%"}}>
      <div style={{/*set max width->*/maxWidth:"600px", minWidth:"350px", /*align to center*/margin:"auto", /*bg color*/ backgroundColor:"white"}}>
        <div style={{/*vertical layout*/display:"flex", flexDirection:"column", /*take all screen size (hides list)*/height:"100vh"}}>
          <div style={{/*take 80% vertical space->*/ height:"80%", /*align items->*/display:"flex", justifyContent:"center", alignItems:"center"}}>
            <QRCode value={user.id} />
          </div>
          <div style={{height: "20%", /*raise*/bottom:"5%"}}>
            <p>Welcome back, {user.name}!</p>
            <img height="30px" src={dragArrow} />
          </div>
        </div>
        <h1 style={{fontWeight:"bolder", textAlign:"left", color:"red"}}>Your cards:</h1>
      </div>
      <div style={{/*set max width->*/maxWidth:"600px", minWidth:"350px", /*align to center*/margin:"auto", /*bg color*/ backgroundColor:"slategray"}}>
        <LoyaltyCardList />
      </div>
    </div>
  );
}

export default App;





function mockedListResponse() {
  return {
    stores : [
      {
        name: "Store 1",
        picture: "https://cdn2.thecatapi.com/images/twnYLeQRZ.png",
        stampsCollected: 3,
        stampsRequired: 10
      },
      {
        name: "Long name for Store 2",
        picture: "https://cdn2.thecatapi.com/images/2gh.jpg",
        stampsCollected: 15,
        stampsRequired: 20
      },
      {
        name: "Super extremely lorem ipsumified and over 100 character long name that this Store 3 has been able to write into the DB",
        picture: "https://cdn2.thecatapi.com/images/xuYI_8ibY.jpg",
        stampsCollected: 8,
        stampsRequired: 10
      }
    ]
  };
}
