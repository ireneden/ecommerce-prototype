import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllAds} from '../actions/ads'
import {Link} from 'react-router-dom'




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
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    ads: state.ads
  }
}

export default connect(mapStateToProps, { fetchAllAds })(AdsList)
