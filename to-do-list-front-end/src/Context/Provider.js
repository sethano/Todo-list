import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context.js';

function Provider({ children }) {
  const [openForms, setOpenForms] = useState(false);
  
  const providerValue = {
    openForms,
    setOpenForms,
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
