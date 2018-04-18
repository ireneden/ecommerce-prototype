import * as request from 'superagent'
const baseUrl = 'http://localhost:4001'

export const FETCH_DETAILED_AD = 'FETCH_DETAILED_AD'
export const FETCH_ALL_ADS = 'FETCH_ALL_ADS'

export const fetchAd = (adId) => (dispatch) => {
  request
    .get(`${baseUrl}/ads/${adId}`)
    .then(response => dispatch({
      type: FETCH_DETAILED_AD,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchAllAds = () => (dispatch) => {
    request
    .get(`${baseUrl}/ads`)
    .then(response => dispatch({
      type: FETCH_ALL_ADS,
      payload: response.body.ads
    }))
    .catch(err => alert(err))
}


