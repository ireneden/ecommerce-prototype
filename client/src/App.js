import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AdDetails from './containers/AdDetails'
import AdsList from './containers/AdsList'
// import {connect} from 'react-redux'


const ads = [
  {
    id: 1,
    title: 'Ad1',
    price: 123
  },
  {
    id: 5,
    title: 'Ad2',
    price: 1000
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <AdsList />
        <AdDetails ads={ ads[0] } />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    ads: state.ads
  }
}

// export default connect(mapStateToProps)(AdsList)
export default App;
