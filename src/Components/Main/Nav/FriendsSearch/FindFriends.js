import React, { useReducer, useRef, useEffect } from 'react';
import { searchUsers } from '../../../../Actions/UserActions';
import { useDispatch, useSelector } from "react-redux";
import FindFriendsCard from "./FindFriendsCard"
import '../NavBar.scoped.css'

function reducer(state, { name, value }) {
  return {
    ...state,
    [name]: value
  }
}

const FindFriends = () => {  

  const defaultText = "find friends"
  const defaultLength = 13 + "ch"
  const storeDispatch = useDispatch();
  
  let initialState = {
    friendsSearch: defaultText,
    searchLength: defaultLength,
    showCard: false
  } 
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const { friendsSearch, searchLength } = state
  const users = useSelector(state => state.users)
  const loading = useSelector(state => state.loading)  

  const handleSubmit = (e) => {
     e.preventDefault()
     storeDispatch(searchUsers(friendsSearch))
     dispatch({name: 'showCard', value: true})
    }

  const handleClearField = (e) => {
    dispatch({name: e.target.name, value: ""})
  }

  const handleResetField = (e) => {
    dispatch({name: e.target.name, value: defaultText})
    dispatch({name: e.target.id, value: defaultLength})
   }

   const handleBlur = () => {
    dispatch({name: 'showCard', value: false})
   }

  const handleChange = (e) => {
    dispatch({name: e.target.name, value: e.target.value})
    if (friendsSearch.length > 2){
      dispatch({name: e.target.id, value: e.target.value.length + 4 + "ch"})
    } else { dispatch({name: e.target.id, value: e.target.placeholder.length + 2 + "ch"})  }
  }

  if (state.showCard === true){
  
    return (
      <>
        <form onSubmit={handleSubmit}><input type="text" style={{width: searchLength}} id="searchLength" name="friendsSearch"  className="button button-find"  onChange={handleChange.bind(this)} onFocus={handleClearField} onBlur={handleResetField} placeholder="ENTER NAME" value={friendsSearch}></input></form>
        <FindFriendsCard users={users} handleBlur={handleBlur}/>
      </>
    );
  } else if (state.showCard === false) {
    return (
      <>
        <form onSubmit={handleSubmit}><input type="text" style={{width: searchLength}} id="searchLength" name="friendsSearch"  className="button button-find"  onChange={handleChange.bind(this)} onFocus={handleClearField} onBlur={handleResetField} placeholder="ENTER NAME" value={friendsSearch}></input></form>
      </>
    );
  }
};

export default FindFriends;