import React, { useContext } from 'react';
import Context from '../Context/Context';

const FormButton = () => {
  const { setIsOpen } = useContext(Context);
  return(
    <button
      data-testid='FormButton'
      type='button'
      onClick={ () => setIsOpen(true) }
    >
      Add a new Task
    </button>
  );
};

export default FormButton;
