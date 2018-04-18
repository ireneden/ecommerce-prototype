import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'


class AdDetails extends PureComponent {
    render() {
      const {ads} = this.props
      return (
        <div>
          <h2>{ads.title}</h2>
        </div>
      )
    }
  }

export default AdDetails
