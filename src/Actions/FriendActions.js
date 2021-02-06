export const fetchFriends = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING'})
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