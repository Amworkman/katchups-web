export const updateUser = (user, formData) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING'})
    fetch(`http://localhost:3000/users/${user.id}`,{
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: formData
    }).then(resp => {
      return resp.json()
    }).then(data => {
      localStorage.setItem('currentUser', JSON.stringify(data.user)) 
      return data
    }).then(data => {
      dispatch({ type: 'USER_UPDATED' })
    }).catch(err => console.log(err));
  }
}

export const searchUsers = (friendSearch) => {
  return async (dispatch) => {
    dispatch({ type: 'LOADING_USERS'})
    await fetch(`http://localhost:3000/users?search=${friendSearch}`,{
      method: "GET",
      headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
      }
  }).then(resp => {
    return resp.json()
  }).then(data => {
    dispatch({ type: 'GET_USERS', users: data })
  }).catch(err => console.log(err));
  }
}
