import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RandomGraph from './components/RandomGraph';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graph" element={<RandomGraph />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
