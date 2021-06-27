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
    <div style={{height:"80px", borderStyle:"1px solid black"}}>
      <img height="80px" src={props.store.picture} style= {{float:"left"}} alt={props.store.name + "'s picture"} />
      <div>
        <h2>{props.store.name}</h2>
        <p>{props.store.stampsCollected} / {props.store.stampsRequired}</p>
      </div>
    </div>
  )
}

function LoyaltyCardList(props) {
  let response = mockedListResponse();
  return (
    <div>
      { response.stores.map ( store =>
          <LoyaltyCardItem store={store} />
        )
      }
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div style={{height:"100vh"}}>
        <div style={{display:"flex", height:"80%", justifyContent:"center", alignItems:"center"}}>
          <QRCode value={user.id} size={window.screen.width - 20}/>
        </div>
        <div style={{position:"absolute", bottom:"5%", width:"100%"}}>
          <p>Welcome back, {user.name}!</p>
          <img height="30px" src={dragArrow} />
        </div>
      </div>
      <LoyaltyCardList />
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
        name: "Store 2",
        picture: "https://cdn2.thecatapi.com/images/2gh.jpg",
        stampsCollected: 15,
        stampsRequired: 20
      },
      {
        name: "Store 3",
        picture: "https://cdn2.thecatapi.com/images/xuYI_8ibY.jpg",
        stampsCollected: 8,
        stampsRequired: 10
      }
    ]
  };
}
