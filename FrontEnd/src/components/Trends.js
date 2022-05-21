import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrends } from '../actions/post.actions';
import { isEmpty } from './Utils';
import { NavLink } from 'react-router-dom';

const Trends = () => {
  const posts = useSelector((state) => state.allPostsReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const trendList = useSelector((state) => state.trendingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(posts[0])) {
      const postsArr = Object.keys(posts).map((i) => posts[i]);
      // let sortedArray = postsArr.sort((a, b) => {
      //   return b.likers.length - a.likers.length;
      // });
      posts.length = 3;
      // sortedArray.length = 3;
      dispatch(getTrends(posts));
      // dispatch(getTrends(sortedArray));
    }
  }, [posts, dispatch]);

  return (
    <div className='trending-container'>
      <h4>Actualités</h4>
      <div>
        {trendList.length &&
          trendList.map((post) => {
            return (
              <div key={post._id} className='trending-card'>
                <NavLink exact to='/trending'>
                  <div className='trending-left'>
                    {post.picture && (
                      <img
                        src={post.picture}
                        alt='post-pic'
                        id='trending-picture'
                      />
                    )}
                    {post.video && (
                      <iframe
                        src={post.video}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        title={post._id}
                        id='trending-picture'
                      ></iframe>
                    )}
                    {isEmpty(post.picture) && isEmpty(post.video) && (
                      <img
                        src={
                          usersData[0] &&
                          usersData
                            .map((user) => {
                              if (user._id === post.posterId) {
                                return user.picture;
                              } else return null;
                            })
                            .join('')
                        }
                        alt='profil-pic'
                        id='trending-picture'
                      />
                    )}
                  </div>
                </NavLink>
                <div className='trend-content'>
                  {post.message.length > 80
                    ? post.message.slice(0, 75) + '...'
                    : post.message}
                </div>
                <span>Lire</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Trends;
