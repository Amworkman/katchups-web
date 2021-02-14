export const fetchRestaurants = (location) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING'})
    fetch(`http://localhost:3000/restaurants?location=${location}`,{
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(resp => {
      return resp.json()
    }).then(data => {
      dispatch({ type: 'GET_RESTAURANTS', restaurants: data.businesses })
    })
  }
}