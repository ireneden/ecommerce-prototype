import {FETCH_ALL_ADS, CREATE_AD} from '../actions/ads'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_ALL_ADS:
        return action.payload
        
        case CREATE_AD:
  	    return [...state, action.payload]
        
    default:
        return state
    }
  }