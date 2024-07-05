import React, { useEffect, useState } from 'react';
import { fetchStories } from '../pages/api';
import StoryCard from '../Components/storyCard';
import Header from '../Components/Header';
import './StoriesPage.css'

function StoriesPage() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getStories = async () => {
      const data = await fetchStories();
      setStories(data);
    };

    getStories();
  }, []);

  return (
    <div className="stories-page">
      <Header />
      <main className="story-container">
       { console.log(stories)}
        {stories.map(story => (
          <StoryCard key={story._id} story={story} />
        ))}
      </main>
    </div>
  );
}

export default StoriesPage;
