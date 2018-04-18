import {FETCH_ALL_ADS} from '../actions/ads'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_ALL_ADS:
        return action.payload
        
    default:
        return state
    }
  }