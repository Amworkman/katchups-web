import React, { useReducer }  from 'react';
import './FriendsContainer.scoped.css'
import { useEffect } from 'react';
import { fetchFriends } from '../../../Actions/FriendActions'
import { useDispatch, useSelector } from "react-redux";
import Friend from './Friend';

const initialState = {
  search: ''  
}

function reducer(state, { name, value }) {
  return {
    ...state,
    [name]: value
  }
}

const FriendsContainer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const storeDispatch = useDispatch()
  const friends = useSelector(state => state.friends)
  const parsedFriends = []

  useEffect(() => {
    storeDispatch(fetchFriends());    
  }, [storeDispatch])

  const handleChange = (e) => {
    dispatch({name: e.target.name, value: e.target.value})
  }

  const searchFriendList = (friend) => {
    if (friend.name.toLowerCase().includes(state.search.toLowerCase())){
      parsedFriends.push(friend)
    }
  }

  const renderFriends = (props) => {
    friends.filter(searchFriendList)
    return parsedFriends.map( friend => <
      Friend
        key={friend.id}
        id={friend.id}
        name={friend.name} 
        img={friend.profile_img_url}
        location={friend.location}
        email={friend.email}
        handleSelectedFriend={props.handleSelectedFriend}
    />)
  }

  return (    
    <div className='right-container'>
      <input type="text" id="friend-search" name="search" className="search" value={state.search} onChange={handleChange} placeholder="Search Friends" />
      <div className="box-fade box-fade-top"/>
      <div className='friend-container'>        
        {renderFriends(props)}   
      </div>
      <div className="box-fade box-fade-bottom"/>
    </div>
  );
};

export default FriendsContainer;