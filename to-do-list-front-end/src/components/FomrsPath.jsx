import React from 'react';
import FomrsButton from './FormsButton';
import FormToNewTask from './FormsToNewTask';
import { openForms } from '../Context/Provider';

const FomrsPath = () => {
  return (
    openForms ? <FomrsButton /> : <FormToNewTask />
  );
};

export default FomrsPath;
