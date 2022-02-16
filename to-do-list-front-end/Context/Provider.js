import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from './Context';

function Provider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const providerValue = {
    isOpen,
    setIsOpen
  };

  return (
    <Context.Provider value={ providerValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType(PropTypes.node, PropTypes.func).isRequired,
};

export default Provider;