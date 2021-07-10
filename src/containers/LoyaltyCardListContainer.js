import { Component } from 'react';
import { LoyaltyCardList } from '../components/index';

class LoyaltyCardListContainer extends Component {
  state = { stores: [] };

  componentDidMount() {
    this.setState({ stores: mockedListResponse() });
  }

  render() {
    return <LoyaltyCardList stores={this.state.stores} />;
  }
}

function mockedListResponse() {
  return [
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
    ];
}

export { LoyaltyCardListContainer };