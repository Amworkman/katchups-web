export const userLogin = (userParams, url) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING'})
    fetch(`http://localhost:3000/${url}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userParams)
    })
    .then(resp => {
      return resp.json()
    }).then(data => {
      localStorage.setItem('token', data.token) 
      localStorage.setItem('currentUser', JSON.stringify(data.user)) 
      return data
    }).then(data => {
      dispatch({ type: 'USER_LOGIN', user: data.user })
    })
  }
}