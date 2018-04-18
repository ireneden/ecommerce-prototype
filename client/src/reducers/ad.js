import {FETCH_DETAILED_AD} from '../actions/ads'

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_DETAILED_AD:
      return action.payload

    default:
      return state
  }
}