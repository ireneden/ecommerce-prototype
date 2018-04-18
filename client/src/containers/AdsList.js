import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

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
              <td>{ad.title}</td>
              <td>&euro; {ad.price}.00</td>
            </tr>)) }
          </tbody>
				</table>
      </div>
    )
  }
}

export default AdsList