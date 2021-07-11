export const createKatchup = (friend, date, location) => {
  return async(dispatch) => {
    dispatch({ type: 'LOADING'})
    await fetch(`http://localhost:3000/katchups`,{
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify({user_id: JSON.parse(localStorage.currentUser).id, friend_id: friend, starts_at: date, location: location}),
    })
    .then(resp => {
      return resp.json()
    }).then(data => {
      dispatch({ type: 'CURRENT_KATCHUP', currentKatchup: JSON.stringify(data)})
    })
  }
}