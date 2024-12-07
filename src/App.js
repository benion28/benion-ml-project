import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const { Fragment } = React
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
