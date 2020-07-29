import React from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

/**
 * Our data
 * ------------------------
 */
const user = {
  name: 'Chris on Code',
  location: 'Las Vegas',
  foodType: 'Everything',
  age: 28,
  likes: 'Coding into the wee hours of the morning',
  twitterUsername: 'chrisoncode',
  avatar:
    'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      {/*user*/}
      <div className="user-deets">
      	<img src={user.avatar}/>
	<h3>{user.name}</h3>
	<strong>Location</strong>
	<p>{user.location}</p>
        <strong>Eats</strong>
        <p>{user.foodType}</p>
	<strong>Age</strong>
	<p>{user.age}</p>
	<strong>Likes</strong>
	<p>{user.likes}</p>
	<strong>Twitter</strong>
	<a href={"https://www.twitter.com/" + user.twitterUsername}>@{user.twitterUsername}</a>
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
