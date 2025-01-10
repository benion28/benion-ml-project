import React from 'react';
import AuthenticatedFooter from './AuthenticatedFooter';
import UnauthenticatedFooter from './UnauthenticatedFooter';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)

  return (
    <div>
      {isLoggedIn ? <AuthenticatedFooter /> : <UnauthenticatedFooter />}
    </div>
  );
};

export default Footer;
