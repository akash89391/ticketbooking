import React from 'react';
import Nav from './routing/Nav';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './routing/Home';
import About from './routing/About';
import Contact from './routing/Contact';
import Upcoming from './routing/Upcoming';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        {/* Default route */}
        <Route path="/" element={<Home />} />

        {/* Other pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upcoming" element={<Upcoming />} />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
