import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../Utils';
import FollowHandler from './FollowHandler';

const FriendsHint = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [playOnce, setPlayOnce] = useState(true);
  const [friendsHint, setFriendsHint] = useState([]);
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);

  const notFriendList = () => {
    let array = [];
    usersData.map((user) => {
      if (user._id !== userData._id && !user.followers.includes(userData._id)) {
        return array.push(user._id);
      }
    });
    array.sort(() => 0.5 - Math.random());
    if (window.innerHeight > 780) {
      array.length = 5;
    } else if (window.innerHeight > 720) {
      array.length = 4;
    } else if (window.innerHeight > 615) {
      array.length = 3;
    } else if (window.innerHeight > 540) {
      array.length = 1;
    } else {
      array.length = 0;
    }
    setFriendsHint(array);
  };

  useEffect(() => {
    notFriendList();

    if (playOnce && !isEmpty(usersData[0]) && !isEmpty(userData._id)) {
      notFriendList();
      setIsLoading(false);
      setPlayOnce(false);
    }
  }, [usersData, userData, playOnce]);

  if (isLoading) {
    return (
      <div className='icon'>
        <i className='fas fa-spinner fa-pulse'></i>
      </div>
    );
  }

  return (
    <div className='friends-container'>
      <h4>Suggestions</h4>
      {friendsHint &&
        friendsHint.map((user) => {
          for (let i = 0; i < usersData.length; i++) {
            if (user === usersData[i]._id) {
              return (
                <div className='friends-card' key={user}>
                  <img
                    src={usersData[i].picture}
                    alt='user-pic'
                    id='friends-picture'
                  />
                  <div id='friends-content'>
                    <p>{usersData[i].pseudo}</p>
                    <FollowHandler
                      idToFollow={usersData[i]._id}
                      type={'suggestion'}
                    />
                  </div>
                </div>
              );
            }
          }
        })}
    </div>
  );
};

export default FriendsHint;
