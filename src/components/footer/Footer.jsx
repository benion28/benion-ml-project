import React, { useState } from 'react';
import AuthenticatedFooter from './AuthenticatedFooter';
import UnauthenticatedFooter from './UnauthenticatedFooter';

const Footer = () => {
  const [authenticated, setAuthenticated] = useState(true); // Change to manage real authentication state

  return (
    <div>
      {authenticated ? <AuthenticatedFooter /> : <UnauthenticatedFooter />}
    </div>
  );
};

export default Footer;
