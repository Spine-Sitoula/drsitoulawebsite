import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FellowshipsPage from './pages/FellowshipsPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router basename="/drsitoulawebsite">
      <div className="app">
        <div className="bg-layer"></div>
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <h1>Dr. Prakash Sitoula</h1>
              <p>Orthopaedic Spine Surgeon</p>
            </div>
            <div className="nav-links">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/fellowships">Fellowships</NavLink>
              <NavLink to="/research">Research</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fellowships" element={<FellowshipsPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          <footer>
            <p>© 2025 Dr. Prakash Sitoula — Orthopaedic Spine Surgeon</p>
            <p className="footer-small">Global Fellowships: Australia, France, South Korea, Denmark, Japan, Singapore</p>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;