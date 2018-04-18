import React from 'react'
import PropTypes from 'prop-types'

class AdDetails extends React.Component {
    render() {
      return (
        <li>
          {this.props.text}
        </li>
      );
    }
  }

export default AdDetails
