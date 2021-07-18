import { Component } from 'react';
import { UserQR } from '../components/index';
import uuid from "react-uuid";
import storage from './AppStorage';


var user = {
  id : initializeUuid(),
  name : "Tester Test"
}

function initializeUuid() {
  var client_id = storage.readProperty("client_id");
  if (client_id != null) {
    return client_id;
  } else {
    //if no id, create one and store it
    var id = uuid();
    storage.writeProperty("client_id", id);
    return id;
  }
}

class UserQRContainer extends Component {
  state = { user: user };

  render() {
    return <UserQR user={this.state.user} />;
  }
}

export { UserQRContainer };