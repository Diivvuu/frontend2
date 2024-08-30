import React from 'react';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to DoWell Random Graph
      </h1>
      <p>
        Click here to{' '}
        <a href="/subscribe" className="text-blue-500">
          Subscribe
        </a>{' '}
      </p>
    </div>
  );
};

export default Home;
