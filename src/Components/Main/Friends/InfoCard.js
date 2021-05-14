import React, { useDispatch } from 'react-redux';
import './FriendsContainer.scoped.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends} from '@fortawesome/free-solid-svg-icons'
import { friendRequest } from "../../../Actions/UserActions"

const InfoCard = (props) => {
  const storeDispatch = useDispatch()
  const userID = JSON.parse(localStorage.currentUser).id
  const friendID = props.friend.id

  const handleAddFriend = () => {
    storeDispatch(friendRequest(userID, friendID))
  }

  let button = <button className="katchupButton" onClick={props.handleKatchup}> katchup </button>

  if (props.friend.confirmed === false){
    button = <button className="katchupButton" style={{backgroundColor: "#5387e7"}} onClick={handleAddFriend}> <FontAwesomeIcon icon={faUserFriends} /> </button>
  }

  return (
    <>
      <div className="recents">            
          No recent katchups
        </div>
        <div className="cardInner-right">
          {button}
      </div>
    </>
  );
};

export default InfoCard;