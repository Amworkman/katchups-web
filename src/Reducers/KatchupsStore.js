const KatchupsStore = ( state = {
  restaurants: [],
  loading: false
}, action ) => {
  switch ( action.type ) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      } 
    case 'USER_LOGIN':
      return {
        ...state,
        loading: false,
      } 
    case 'GET_RESTAURANTS': 
      return {
        ...state,
        restaurants: action.restaurants,
        loading: false        
      }
    default:
      return state; 
  }
};

export default KatchupsStore;