import React from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../assets/mainlogo.png';


const InternGenieAbout = () => {
  return (
    <div className="about-container">
      <header className="interngenie-header">
        <Link to="/interngenie" className="interngenie-logo">
          <img src={MainLogo} /> InternGenie
        </Link>
        <nav className="interngenie-nav">
          <Link to="/">Home</Link>
          <Link to="/interngenie/input">Find</Link>
          <Link to="/interngenie/help">Help</Link>
        </nav>
      </header>
      
      <main className="about-content">
        <h1>About InternGenie</h1>
        
        <p>
          This tool helps students find internships easily by leveraging artificial intelligence 
          to match their skills, interests, and preferences with available opportunities.
        </p>
        
        <p>
          It supports the PM Internship Scheme by providing 3–5 personalized suggestions 
          based on user inputs, making the internship discovery process more efficient 
          and targeted.
        </p>
        
        <div className="disclaimer">
          <strong>Disclaimer:</strong> Applications happen only on the official PM Internship Portal. 
          InternGenie is a recommendation tool that helps you discover suitable opportunities 
          but does not handle the application process directly.
        </div>
        
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p><strong>Built by:</strong> InternGenie Development Team</p>
          <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>
            Supporting the PM Internship Scheme through AI-powered recommendations
          </p>
        </div>
      </main>
      
      <footer style={{ 
        background: 'var(--light-gray)', 
        padding: '20px', 
        textAlign: 'center',
        marginTop: '40px',
        borderTop: '1px solid var(--border-gray)'
      }}>
        <div style={{ marginBottom: '10px' }}>
          © 2025 InternGenie | <Link to="/">Home</Link> | <Link to="/interngenie/input">Find Internships</Link> | <Link to="/interngenie/help">Help</Link>
        </div>
        <div style={{ marginBottom: '10px', color: 'var(--text-gray)' }}>
          🌐 English | हिंदी | বাংলা | தமிழ்
        </div>
        <div>
          🔊 <button style={{ background: 'none', border: 'none', color: 'var(--primary-blue)', cursor: 'pointer' }}>
            Audio Assist
          </button>
        </div>
      </footer>
    </div>
  );
};

export default InternGenieAbout;