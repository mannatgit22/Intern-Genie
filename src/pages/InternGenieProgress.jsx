import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLogo from '../assets/mainlogo.png';


const InternGenieProgress = () => {
  const navigate = useNavigate();

  const progressSteps = [
    { id: 1, title: 'Profile Setup', status: 'completed', description: 'Basic information collected' },
    { id: 2, title: 'Skills Assessment', status: 'completed', description: 'Skills and interests identified' },
    { id: 3, title: 'Matching Algorithm', status: 'in-progress', description: 'AI analyzing your profile...' },
    { id: 4, title: 'Recommendations Ready', status: 'pending', description: 'Personalized matches generated' },
    { id: 5, title: 'Application Support', status: 'pending', description: 'Guidance for applications' }
  ];

  const handleViewRecommendations = () => {
    navigate('/interngenie/recommendations');
  };

  const handleViewReport = () => {
    navigate('/interngenie/report');
  };

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
        </nav>
      </header>
      
      <main className="interngenie-content">
        <div className="input-content">
          <h1 style={{ color: 'var(--primary-blue)', textAlign: 'center', marginBottom: '30px' }}>
            📊 Your Progress Tracker
          </h1>

          <div className="progress-tracker">
            {progressSteps.map((step, index) => (
              <div key={step.id} className="tracker-step">
                <div className="tracker-line">
                  <div className={`tracker-circle ${step.status}`}>
                    {step.status === 'completed' ? '✓' : 
                     step.status === 'in-progress' ? '⏳' : step.id}
                  </div>
                  {index < progressSteps.length - 1 && (
                    <div className={`tracker-connector ${step.status === 'completed' ? 'completed' : ''}`}></div>
                  )}
                </div>
                <div className="tracker-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="progress-actions">
            <button 
              onClick={handleViewRecommendations}
              className="submit-button"
              style={{ marginRight: '15px' }}
            >
              View Recommendations 🎯
            </button>
            <button 
              onClick={handleViewReport}
              className="submit-button"
              style={{ background: 'var(--primary-blue)' }}
            >
              View Learning Report 📈
            </button>
          </div>

          <div className="completion-stats">
            <div className="stat-card">
              <h4>Profile Completion</h4>
              <div className="stat-value">85%</div>
            </div>
            <div className="stat-card">
              <h4>Skills Matched</h4>
              <div className="stat-value">12</div>
            </div>
            <div className="stat-card">
              <h4>Recommendations</h4>
              <div className="stat-value">5</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InternGenieProgress;