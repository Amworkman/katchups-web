import React from "react";
import "./RestaurantsContainer.css";
import { useEffect } from "react";
import { fetchRestaurants } from "../../../Actions/RestaurantActions";
import { useDispatch, useSelector } from "react-redux";
import Restaurant from "./Restaurant";

const RestaurantsContainer = () => {
  
	const storeDispatch = useDispatch();
	const restaurants = useSelector((state) => state.restaurants);
	useEffect(() => {
		storeDispatch(fetchRestaurants());
	}, [storeDispatch]);

	const renderRestaurants = () => {
		return restaurants.map((restaurant) => ( <
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
			<div className="restaurant-container">
        {renderRestaurants()}
      </div>
		</div>
	);
};

export default RestaurantsContainer;
