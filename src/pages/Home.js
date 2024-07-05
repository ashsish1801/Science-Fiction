import React, { useEffect, useState } from 'react';
import { fetchStories } from './api';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [stories, setStories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getStories = async () => {
            try {
                const data = await fetchStories();
                console.log('Fetched stories:', data);
                setStories(data);
            } catch (error) {
                console.error("Error fetching stories:", error);
                setError(error.message);
            }
        };
        getStories();
    }, []);

    const handleImageError = (e) => {
        e.target.src = 'https://via.placeholder.com/150'; // Placeholder image URL
    };

    return (
        <div className="story-cards">
            {error && <div className="error-message">Error: {error}</div>}
            {stories.length === 0 && <div>No stories available</div>}
            {stories.map(story => (
                <div key={story.id} className="story-card">
                    <img 
                        src={`https://ik.imagekit.io/dev24/${story.Image}`} 
                        alt={story.title} 
                        onError={handleImageError} 
                    />
                    <h3>{story.title}</h3>
                    <p>{story.description}</p>
                    <Link to={`/story/${story.id}`}>Read More</Link>
                </div>
            ))}
        </div>
    );
};

export default Home;
