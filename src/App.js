import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage';
import Gallery from './components/gallery';
import MusicDetailPage from './components/gallerydetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/music/:id" element={<MusicDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
