import React from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../assets/mainlogo.png';


const InternGenieHelp = () => {
  const steps = [
    {
      number: 1,
      icon: "✍️",
      title: "Fill in details",
      description: "Provide your education level, skills, interests, and location preferences"
    },
    {
      number: 2,
      icon: "🔍",
      title: "Get your top matches",
      description: "Our AI analyzes your profile and suggests 3-5 best internship opportunities"
    },
    {
      number: 3,
      icon: "🚀",
      title: "Apply on PM Portal",
      description: "Click Apply Now to be redirected to the official PM Internship Portal for final application"
    }
  ];

  return (
    <div className="help-container">
      <header className="interngenie-header">
        <Link to="/interngenie" className="interngenie-logo">
          <img src={MainLogo} /> InternGenie
        </Link>
        <nav className="interngenie-nav">
          <Link to="/">Home</Link>
          <Link to="/interngenie/input">Find</Link>
          <Link to="/interngenie/about">About</Link>
        </nav>
      </header>
      
      <main className="help-content">
        <h1 style={{ color: 'var(--primary-blue)', textAlign: 'center', marginBottom: '40px' }}>
          How to use InternGenie in 3 simple steps
        </h1>

        <div className="steps-container">
          {steps.map(step => (
            <div key={step.number} className="step-item">
              <div className="step-number">
                {step.number}
              </div>
              <div className="step-content">
                <h3>{step.icon} {step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
            📋➡️🎯➡️🚀
          </div>
          <button className="video-button">
            ▶️ Watch Video - 30 sec guide
          </button>
        </div>
      </main>
    </div>
  );
};

export default InternGenieHelp;