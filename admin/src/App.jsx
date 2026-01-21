import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Slidebar from './components/Slidebar/Slidebar.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Slidebar />
      </div>
    </div>
  );
};

export default App;
