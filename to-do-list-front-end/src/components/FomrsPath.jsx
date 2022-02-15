import React, { useContext } from 'react';
import FomrsButton from './FormsButton';
import FormToNewTask from './FormsToNewTask';
import Context from '../Context/Context';

const FomrsPath = () => {
  const {
    openForms
  } = useContext(Context);
  return (
    !openForms ? <FomrsButton /> : <FormToNewTask />
  );
};

export default FomrsPath;
