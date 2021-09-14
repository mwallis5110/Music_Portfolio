import React from 'react';

import Bio from './components/bio'
import Contact from './components/contact';
import Nav from './components/nav';
import firstPage from './components/firstPage';
import Services from './components/services';
import Songs from './components/songs';

import './App.css';

export default function App() {
  return (
    <div>
      <Nav />
      <firstPage />
      <Songs />
      <Services />
      <Bio />
      <Contact />
    </div>
  );
}

