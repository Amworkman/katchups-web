const KatchupsStore = ( state = {
  restaurants: [],
  friends: [],
  users: [],
  friendRequests: [],
  updated: false,
  loading: false,
  loadingFriends: false,
  loadingUsers: false,
  loggedIn: false
}, action ) => {
  switch ( action.type ) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      } 
      case 'DONE':
      return {
        ...state,
        loading: false
      }
      case 'LOADING_FRIENDS':
      return {
        ...state,
        loadingFriends: true
      }
      case 'LOADING_FRIEND_REQUESTS':
      return {
        ...state,
        loadingFriendRequests: true
      }
      case 'LOADING_USERS':
      return {
        ...state,
        loadingUsers: true
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
    case 'GET_USERS':
      return {
        ...state,
        loading: false,
        users: action.users
      }
    case 'GET_RESTAURANTS':
      return {
        ...state,
        restaurants: action.restaurants,
        loading: false        
      }
    case 'GET_FRIENDS':
      return {
        ...state,
        friends: action.friends,
        loading: false
      }
      case 'GET_FRIEND_REQUESTS':
      return {
        ...state,
        friendRequests: action.friendRequests,
        loading: false
      }
    default:
      return state; 
  }
};

export default KatchupsStore;