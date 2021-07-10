import { LoyaltyCardItem } from './index';

function LoyaltyCardList(props) {
    return (
      <div style={{/*vertical layout*/display:"flex", flexDirection:"column"}}>
        { props.stores.map ( store =>
            <LoyaltyCardItem store={store} />
          )
        }
      </div>
    );
  }

export { LoyaltyCardList };