import React, { useState } from 'react';
import AuthenticatedHeader from './AuthenticatedHeader';
import UnauthenticatedHeader from './UnauthenticatedHeader';

const Header = () => {
  const [authenticated, setAuthenticated] = useState(false); // Change to manage real authentication state

  return (
    <div>
      {authenticated ? <AuthenticatedHeader /> : <UnauthenticatedHeader />}
    </div>
  );
};

export default Header;
