import React, { useReducer }  from 'react';
import './RestaurantsContainer.scoped.css';
import { useEffect } from "react";
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

const user = JSON.parse(localStorage.currentUser)

const RestaurantsContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
	const storeDispatch = useDispatch();
	const restaurants = useSelector((state) => state.restaurants);
	const parsedRestaurants = []

	useEffect(() => {
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

	const renderRestaurants = () => {
		restaurants.filter(searchRestaurantList)
		return parsedRestaurants.map((restaurant) => ( <
      Restaurant
				key={restaurant.id}
				name={restaurant.name}
				price={restaurant.price}
				rating={restaurant.rating}
				location={restaurant.location}
				categories={restaurant.categories}
				img={restaurant.image_url}
			/>
		));
	}

	return (
    
		<div className="left-container">
			<input type="text" id="rest-search" name="search" className="search" onChange={handleChange} value={state.search} placeholder="Search Restaurants" />
			<div className="box-fade box-fade-top">
			</div>
				<div className="restaurant-container">				
        	{renderRestaurants()}
				</div> 
				<div className="box-fade box-fade-bottom">
				</div>     
		</div>
	);
};

export default RestaurantsContainer;
