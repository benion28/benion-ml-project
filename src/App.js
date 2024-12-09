import React from 'react';
import Main from './components/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

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
