import React, { useState, useEffect } from 'react';
import Homepage from './pages/Homepage';
import ScrollToTop from './ScrollToTop';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { dashboardUrl, exampleUrl, homeUrl } from '../services/paths';
import Loader from './Loader'; // Import the loader component
import ExampleComponent from './pages/ExampleComponent';
import Dashboard from './pages/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


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
      <ToastContainer />
      <Routes>
        <Route exact path={homeUrl} element={<Homepage />} />
        <Route exact path={dashboardUrl} element={<Dashboard />} />
        <Route exact path={exampleUrl} element={<ExampleComponent />} />
      </Routes>
      <ScrollToTop />
    </Layout>
  );
};

export default Main;
