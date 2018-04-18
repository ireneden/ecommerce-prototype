import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAd } from '../actions/ads'



class AdDetails extends PureComponent {
  
  componentWillMount(props) {
    this.props.fetchAd(this.props.match.params.id)
  }  
  
  render() {
      const {ad} = this.props
      if (!ad) return null
      return (
        <div className="ProductTitles">
           <h1>Advertised product: {ad.title}</h1>
           <h2>Price: {ad.price} €</h2>
           <h3>Description: {ad.description}</h3>
           <h3>Link to image: <a href={ad.image}>{ad.image}</a></h3>
           <h3>Contact Email: <a href='mailto:'>{ad.email}</a></h3>
           <h3>Contact Phone number: {ad.phone}</h3>
        </div>
      )
    }
  }



const mapStateToProps = function (state, props) {
  return {
    ad: state.ad
  }
}

export default connect(mapStateToProps, {fetchAd})(AdDetails)

