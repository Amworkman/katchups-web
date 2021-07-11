import React, { useReducer, useEffect }  from 'react';
import './RestaurantsContainer.scoped.css';
import { fetchRestaurants } from "../../../Actions/RestaurantActions";
import { useDispatch, useSelector } from "react-redux";
import Restaurant from "./Restaurant";

const initialState = {
  search: ""   
}

function reducer(state, { name, value }) {
  return {
    ...state,
    [name]: value
  }
}



const RestaurantsContainer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
	const storeDispatch = useDispatch();
	const restaurants = useSelector((state) => state.restaurants);
	const parsedRestaurants = []

	useEffect(() => {
		const user = JSON.parse(localStorage.currentUser)
		storeDispatch(fetchRestaurants(user.location));
	}, [storeDispatch]);

	const handleChange = (e) => {
    dispatch({name: e.target.name, value: e.target.value})
  }

  function searchRestaurantList(restaurant){
    if (restaurant.name.toLowerCase().includes(state.search.toLowerCase())){
      parsedRestaurants.push(restaurant)
    }
  }

	const renderRestaurants = (props) => {
		restaurants.filter(searchRestaurantList)
		return parsedRestaurants.map((restaurant) => ( <
      Restaurant
				key={restaurant.id}
				id={restaurant.id}
				name={restaurant.name}
				price={restaurant.price}
				rating={restaurant.rating}
				location={restaurant.location.formatted_address}
				categories={restaurant.categories}
				img={restaurant.photos[0]}
				phone={restaurant.display_phone}
				url={restaurant.url}
				reviewCount={restaurant.review_count}
				closed={restaurant.is_closed}
				handleSelectedRestaurant={props.handleSelectedRestaurant}
			/>
		));
	}

	return (    
		<div className="left-container">
			<input type="text" id="rest-search" name="search" className="search" onChange={handleChange} value={state.search} placeholder="Search Restaurants" />
			<div className="box-fade box-fade-top"/>
				<div className="restaurant-container">				
        	{renderRestaurants(props)}
				</div> 
				<div className="box-fade box-fade-bottom"/>     
		</div>
	);
};

export default RestaurantsContainer;
