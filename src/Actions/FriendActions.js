export const fetchFriends = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_FRIENDS'})
    fetch(`http://localhost:3000/friends`,{
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(resp => {
      return resp.json()
    }).then(data => {
      dispatch({ type: 'GET_FRIENDS', friends: data })
    })
  }
}

export const fetchFriendRequests = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PENDING'})
    fetch(`http://localhost:3000/friends/requests`,{
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(resp => {
      return resp.json()
    }).then(data => {
      dispatch({ type: 'GET_FRIEND_REQUESTS', friendRequests: data })
    })
  }
}