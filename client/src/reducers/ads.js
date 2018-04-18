const ads = (state = [], action) => {
    switch (action.type) {
      case 'ADD_AD':
        return [
          ...state,
          {
            id: action.id,
            ad: action.ad,
          }
        ]
      default:
        return state
  }
}

export default ads