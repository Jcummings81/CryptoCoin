import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import axios from 'axios'

class Home extends Component {
  state = { coin: {}}

  clicky = () => {
    axios.post('/api/coins?coin=btc')
      .then( res => { debugger })
  }

  clicky2 = () => {
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=')
      .then( res => { debugger })
  }
  render() {
    return (
      <>
      <Button onClick={this.clicky}>
      Click Me!
      </Button>
      <Button onClick={this.clicky2}>
      coins
      </Button>
      </>
    );
  }
}

export default Home;

