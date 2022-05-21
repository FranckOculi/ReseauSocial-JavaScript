import React, { useContext } from 'react';
import { UidContext } from '../components/AppContext';
import NewPostForm from '../components/Post/NewPostForm';
import Thread from '../components/Thread';
import Authenticate from '../components/Authenticate';
import Trends from '../components/Trends';
import FriendsHint from '../components/Profil/FriendsHint';

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className='home'>
      <div className='main'>
        {uid ? <NewPostForm /> : <Authenticate signin={true} signup={false} />}
        <Thread />
      </div>
      <div className='right-side'>
        <Trends />
        {uid && <FriendsHint />}
      </div>
    </div>
  );
};

export default Home;
