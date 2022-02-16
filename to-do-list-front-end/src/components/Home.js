import React, { useContext } from 'react';
import Context from '../Context/Context';
import FormButton from './FormButton';
import FormToAdd from './FormToAdd';

const Home = () => {
  const {
    isOpen,
  } = useContext(Context);

  return (
    !isOpen ? <FormButton /> : <FormToAdd />
  );
};

export default Home;