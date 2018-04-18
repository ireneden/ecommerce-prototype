import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllAds, createAd} from '../actions/ads'
import {Link} from 'react-router-dom'
import AdForm from './AdForm'




class AdsList extends PureComponent {
  static propTypes = {
    ads: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.number.isRequired
    })).isRequired
  }

  createAd = (ad) => {
    this.props.createAd(ad)
  }

  componentWillMount() {
    this.props.fetchAllAds()
  }

  render() {
    const {ads} = this.props
    return (
      <div>
        <h1>List of all adverts:</h1>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { ads.map(ad => (<tr key={ad.id}>
              <td>{ad.id}</td>
              <td><Link to={ `/ads/${ad.id}` }>{ad.title}</Link></td>              
              <td>&euro; {ad.price}.00</td>
            </tr>)) }
          </tbody>
				</table>
        <h1>Create a new advertisement</h1>
        <AdForm onSubmit={this.createAd} />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    ads: state.ads
  }
}

export default connect(mapStateToProps, { fetchAllAds, createAd })(AdsList)
