import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import PageContent from './containers/index'


function App() {
  const [currentPage, setCurrentPage] = useState('Danny');
  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PageContent currentPage={currentPage} />
      <Footer />
    </>
  );
}

export default App;
