import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import SubscribeForm from './components/SubscribeForm';

const App = () => {
  return (
      <
          BrowserRouter basename
    >
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
       
              <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribe" element={<SubscribeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
