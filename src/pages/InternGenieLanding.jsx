import React from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../assets/MainLogo.png';

const InternGenieLanding = () => {
  return (
    <div className="interngenie-container">
      <header className="interngenie-header">
        <Link to="/interngenie" className="interngenie-logo">
          <img src={MainLogo} /> InternGenie
        </Link>
        <nav className="interngenie-nav">
          <Link to="/">Home</Link>
          <Link to="/interngenie/input">Find</Link>
          <Link to="/interngenie/help">Help</Link>
          <Link to="/interngenie/about">About</Link>
          
          <span>🌐 Language</span>

        </nav>
      </header>
      
      <main className="interngenie-content">
        <div className="landing-content">
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎓✨🚀</div>
          <h1>Find Your Perfect Internship</h1>
          <p>AI-powered recommendations tailored just for you</p>

          <div className="box">
            <div className="box-1">
              <div className="box-icon">📝</div>
              <h3 style={{ color:"black" }}>Tell Us About You</h3>
              <p >Share your skills, interests, and preferences</p>
            </div>

              <div className="box-2">
              <div className="box-icon">🎯</div>
              <h3 style={{ color:"black" }}>Get Matched</h3>
              <p >AI finds the best internships for you</p>
              </div>

              <div className="box-3">
                <div className="box-icon">🚀</div>
                <h3 style={{ color:"black" }}>Apply & Succeed</h3>
                <p >Apply directly through PM Portal</p>
              </div>
          </div>

          <Link to="/interngenie/input" className="start-button">
            Start Your Journey →
          </Link>
        </div>
      </main>
      
      <footer className="language-footer">
        🌐 Language: English | हिंदी
      </footer>
    </div>
  );
};

export default InternGenieLanding;