import React from 'react';
import AuthenticatedHeader from './AuthenticatedHeader';
import UnauthenticatedHeader from './UnauthenticatedHeader';
import { useSelector } from 'react-redux';

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)

  return (
    <div>
      {isLoggedIn ? <AuthenticatedHeader /> : <UnauthenticatedHeader />}
    </div>
  );
};

export default Header;
