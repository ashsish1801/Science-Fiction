import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoriesPage from './pages/StoriesPage';
import StoryDetailPage from './pages/StoryDetailPage';
import './App.css';
import Navbar from './Components/Navbar';
// import Header from './Components/Header';

function App() {
  return (
    <Router>
      <div className="app">
        
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<StoriesPage/>} />
          <Route path="/story/:id" element={<StoryDetailPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
