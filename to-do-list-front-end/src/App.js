import React from 'react';
import ListOfTasks from './components/ListOfTasks';
import FomrsPath from './components/FomrsPath';
import Provider from './Context/Provider';

function App() {
  return (
    <Provider>
      <ListOfTasks />
      <FomrsPath />
    </Provider>
  );
}

export default App;
