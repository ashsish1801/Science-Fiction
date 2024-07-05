import React from 'react';
// import { Link } from 'react-router-dom';
import './StoryCard.css';

function StoryCard({ story }) {
  const gameImage = story.Image[1]; // Assuming story.Image is an array

  return (
    <div className="story-card">
      <img 
        src={`https://ik.imagekit.io/dev24/${gameImage}`} 
        alt={story.Title} 
        onError={(e) => e.target.src = 'fallback_image_url_here'} // Provide a fallback image URL
      />
      <div className="story-info">
        <h3>{story.Title}</h3>

        <button className='New-button' to={`/story/${story._id}`}>New</button>
      </div>
    </div>
  );
}

export default StoryCard;

