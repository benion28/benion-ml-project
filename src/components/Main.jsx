import React, { useState, useEffect } from 'react'
import Homepage from './pages/Homepage'
import ScrollToTop from './ScrollToTop'
import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import { dashboardUrl, exampleUrl, homeUrl, aiUrl } from '../services/paths'
import Loader from './custom/Loader'
import ExampleComponent from './pages/ExampleComponent'
import Dashboard from './pages/Dashboard'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import AiMl from './pages/AiMl'


const Main = () => {
  const [isLoading, setIsLoading] = useState(true)

  // Set a timeout to stop loading after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000) // 3000ms = 3 seconds

    return () => clearTimeout(timer) // Clear timer on cleanup
  }, [])

  return (
    <Layout>
      {isLoading && 
        <div className="loader-container">
          <Loader size='large' tip="Loading, please wait..." />
        </div>
      } {/* Show the loader if isLoading is true */}
      <ToastContainer />
      <Routes>
        <Route exact path={homeUrl} element={<Homepage />} />
        <Route exact path={dashboardUrl} element={<Dashboard />} />
        <Route exact path={aiUrl} element={<AiMl />} />
        <Route exact path={exampleUrl} element={<ExampleComponent />} />
      </Routes>
      <ScrollToTop />
    </Layout>
  )
}

export default Main
