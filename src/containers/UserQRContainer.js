import { Component } from 'react';
import { UserQR } from '../components/index';
import uuid from "react-uuid";

var user = {
  id : uuid(),
  name : "Tester Test"
}

class UserQRContainer extends Component {
  state = { user: user };

  render() {
    return <UserQR user={this.state.user} />;
  }
}

export { UserQRContainer };