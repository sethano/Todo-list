import React from 'react';
import ListOfTasks from './components/ListOfTasks.jsx';
import FomrsPath from './components/FomrsPath.jsx';
import Provider from './Context/Provider.js';

function App() {
  return (
    <Provider>
      <ListOfTasks />
      <FomrsPath />
    </Provider>
  );
}

export default App;
