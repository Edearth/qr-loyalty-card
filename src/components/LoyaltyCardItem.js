
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

export { LoyaltyCardItem };
