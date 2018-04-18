import React from 'react'
import AdsList from '../components/AdsList'

class AdsListPage extends React.Component {
    ads = ['one', 'two', 'three'];
    state = { listAds: [] };
    componentDidMount() {
        this.setState({ listAds: this.ads });
    }
    render() {
      return <List listAds={this.state.listAds} />;
    }
  }

  export default AdsListPage
