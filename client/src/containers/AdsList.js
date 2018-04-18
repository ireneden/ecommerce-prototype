import React from 'react'
import PropTypes from 'prop-types'
import AdDetails from './AdDetails'

class AdsList extends React.Component {
    render() {
      return (
        <ul>
        {this.props.listAds.map((item, index) => (
          <Aditem key={index} text={item}
            {...item}
          />
        ))}
      </ul>
      );
    }
  }

export default AdsList
