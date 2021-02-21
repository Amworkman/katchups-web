import React, { useRef, useEffect } from 'react';
import '../NavBar.scoped.css'
import User from './User'

function useOutsideAlerter(ref, props) {
  useEffect(() => {
      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
              props.handleBlur()
          }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref]);
}

const FindFriendsCard = (props) => {
  const users = props.users
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props);

  function renderUsers() {
  return users.map( user => <
    User
      key={user.id}
      name={user.name} 
      img={user.profile_img}
      location={user.location}
      email={user.email}
  />)
}

  return (
    <div className="card" ref={wrapperRef}>
      <div className="cardInner">
        {renderUsers()}
      </div>
    </div>
  );
};

export default FindFriendsCard;