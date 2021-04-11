export const fetchFriends = () => {
  return async(dispatch) => {
    dispatch({ type: 'LOADING_FRIENDS'})
    await fetch(`http://localhost:3000/friends`,{
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
  return async(dispatch) => {
    dispatch({ type: 'LOADING_PENDING'})
    await fetch(`http://localhost:3000/friends/requests`,{
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

export const acceptFriendRequest = (userID, pendingID) => {
  return async(dispatch) => {
    dispatch({ type: 'LOADING'})
    await fetch(`http://localhost:3000/relationships/${userID}`,{
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: (`{ "user_id": ${userID}, "friend_id": ${pendingID}, "confirmed":"true"}`)
    })
    .then(resp => {
      return resp.json()      
    }).then(data => {
      dispatch({ type: 'DONE' })
    })
  }
}

export const rejectFriendRequest = (userID, pendingID) => {
  return async() => {
    await fetch(`http://localhost:3000/delete_pending`,{
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: (`{ "user_id":${userID}, "friend_id":${pendingID}}`)
    })
  }
}