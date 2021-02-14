const KatchupsStore = ( state = {
  restaurants: [],
  friends: [],
  updated: false,
  loading: false,
  loggedIn: false
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
        loggedIn: true
      }
    case 'USER_UPDATED':
      return {
        updated: true
      }
    case 'USER_LOGOUT':
      return {
        ...state,
        loading: false,
        loggedIn: false
      } 
    case 'GET_RESTAURANTS':
      return {
        ...state,
        restaurants: action.restaurants,
        loading: false        
      }
    case 'GET_FRIENDS':
      return{
        ...state,
        friends: action.friends,
        loading: false
      }
    default:
      return state; 
  }
};

export default KatchupsStore;