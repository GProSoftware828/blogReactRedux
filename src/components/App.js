import React from 'react';
import PostList from './PostList';
import userHeader from './userHeader';

const App = () => {
  return (
    <div className="ui container">
      <PostList />
      <div className="header">${userHeader}</div>
    </div>
  );
};

export default App;