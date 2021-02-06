import React from 'react';
import './FriendsContainer.css'
import { useEffect } from 'react';
import { fetchFriends } from '../../../Actions/FriendActions'
import { useDispatch, useSelector } from "react-redux";
import Friend from './Friend';

const FriendsContainer = () => {
  const storeDispatch = useDispatch()
  const friends = useSelector(state => state.friends)

  useEffect(() => {
		storeDispatch(fetchFriends());
	}, [storeDispatch]);

  function renderFriends() {
    return friends.map( friend => <
      Friend
        key={friend.id}
        name={friend.name} 
        img={friend.profile_img}
        location={friend.location}
        email={friend.email}
    />)
  }

  return (
    <div className='right-container'>
      <div className='friend-container'>
        {renderFriends()}
      </div>
    </div>
  );
};

export default FriendsContainer;