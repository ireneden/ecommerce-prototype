
import {FETCH_ALL_ADS} from '../actions/ads'

// const ads = [
//     {
//       id: 1,
//       title: 'Advertisement with ID1',
//       price: 123
//     },
//     {
//       id: 5,
//       title: 'Advertisement with ID5',
//       price: 1000
//     }
//   ]

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_ALL_ADS:
        return action.payload
        
    default:
        return state
    }
  }