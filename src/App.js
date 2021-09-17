import React from 'react';

import Beats from "./pages/beats/beats";
import Bio from './pages/bio/bio'
import Contact from './pages/contact/contact';
// import Navigation from './components/Navigation';
import PageNav from './components/nav/nav';
import FirstPage from './pages/firstPage/firstPage';
import Services from './pages/services/services';

import './App.css';

export default function App() {
  return (
    <div>
      <PageNav />
      <FirstPage />
      <Beats />
      <Services />
      <Bio />
      <Contact />
    </div>
  );
}
