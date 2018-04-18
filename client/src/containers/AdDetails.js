import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


class AdDetails extends PureComponent {
    render() {
      const {ad} = this.props
      return (
        <div>
           <h1>{ad.title}</h1>
        </div>
      )
    }
  }


const mapStateToProps = function (state, props) {
  return {
    ad: state.ads.find(ad => ad.id === Number(props.match.params.id))
  }
}

export default connect(mapStateToProps)(AdDetails)