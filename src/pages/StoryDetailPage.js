import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStoryById } from '../pages/api';
// import './StoryDetailPage.css';

function StoryDetailPage() {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    const getStory = async () => {
      const data = await fetchStoryById(id);
      setStory(data);
    };

    getStory();
  }, [id]);

  if (!story) return <div>Loading...</div>;

  return (
    <div className="story-detail-page">
      <header className="story-header">
        <h1>{story.Title}</h1>
      </header>
      <div className="story-tabs">
        <div className="tab">Tab 1</div>
        <div className="tab">Tab 2</div>
        <div className="tab">Tab 3</div>
      </div>
      <div className="tab-content">
        {/* Display tab content here */}
      </div>
    </div>
  );
}

export default StoryDetailPage;
