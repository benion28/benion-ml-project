import React, { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import ScrollToTop from './ScrollToTop';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { homeUrl } from '../services/paths';
import Loader from './Loader'; // Import the loader component

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Set a timeout to stop loading after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer); // Clear timer on cleanup
  }, []);

  return (
    <Layout>
      {isLoading && <Loader />} {/* Show the loader if isLoading is true */}
      <Routes>
        <Route exact path={homeUrl} element={<Homepage />} />
      </Routes>
      <ScrollToTop />
    </Layout>
  );
};

export default Main;
