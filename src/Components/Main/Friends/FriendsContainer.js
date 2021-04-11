import React, { useReducer, useState, useEffect }  from 'react';
import './FriendsContainer.scoped.css'
import { fetchFriends, fetchFriendRequests } from '../../../Actions/FriendActions'
import { useDispatch, useSelector } from "react-redux";
import Friend from './Friend';

const FriendsContainer = (props) => {
  

  const initialState = {
    search: '',
  }
  
  function reducer(state, { name, value }) {
    return {
      ...state,
      [name]: value
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState);
  const storeDispatch = useDispatch()
  const friends = useSelector(state => state.friends) 
  const friendRequests = useSelector(state => state.friendRequests)
  const parsedFriends = []
  const [allFriends, setAllFriends] = useState([])

  const fetchAllFriends = (props) => {
    storeDispatch(fetchFriends());
    storeDispatch(fetchFriendRequests());
  }

  useEffect(() => {
    fetchAllFriends()
  }, [])

  useEffect(() => { 
    setAllFriends([].concat(friends, friendRequests))    
  }, [friends, friendRequests])

 
  const handleChange = (e) => {
    dispatch({name: e.target.name, value: e.target.value})
  }

  const searchFriendList = (friend) => {
    let user = ""
    if (friend.friend) {
      user = friend.friend
      user.status = "friend"
    }else if (friend.request) {
      user = friend.request
      user.status = "request"
    }
    if (user.name.toLowerCase().includes(state.search.toLowerCase())){
      parsedFriends.push(user)
    }   
  }

  const refreshFriendsList = () => {
    fetchAllFriends()
  }

  const renderFriends = (props) => {
    allFriends.filter(searchFriendList)
    return parsedFriends.map( friend => <
      Friend
        key={friend.id}
        id={friend.id}
        name={friend.name} 
        img={friend.profile_img_url}
        location={friend.location}
        email={friend.email}
        handleSelectedFriend={props.handleSelectedFriend}
        confirmed={true}
        status={friend.status}
        refreshFriendsList={() => refreshFriendsList()}
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