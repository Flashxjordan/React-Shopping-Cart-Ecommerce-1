import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes> 
            <Route path="/" />
            <Route path="cart" />
          </Routes>
      </Router>

    </div>
  );
}

export default App;
