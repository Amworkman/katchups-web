const KatchupsStore = ( state = {
  user: "",
  loading: false
}, action ) => {
  switch ( action.type ) {
    case 'LOADING':
      debugger
      return {
        ...state,
        loading: true
      } 
    case 'USER_LOGIN':
      debugger
      return {
        ...state,
        loading: false,
      }  
    default:
      return state; 
  }
};

export default KatchupsStore;