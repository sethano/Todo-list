import React from 'react';
import './App.css';
import Provider from './Context/Provider';
import Home from './components/Home';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
