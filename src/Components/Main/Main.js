import React from 'react';
import RestaurantsContainer from './Restaurants/RestaurantsContainer'
import FriendsContainer from './Friends/FriendsContainer'
import NavBar from './Nav/NavBar'

const Main = () => {
  return (
    <div>
      <h1>katchups</h1>
      <RestaurantsContainer />
      <FriendsContainer />
    </div>
  );
};

export default Main;