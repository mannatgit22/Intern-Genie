import React from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../assets/mainlogo.png';


const InternGenieReport = () => {
  const learningPath = [
    {
      phase: 'Foundation',
      skills: ['Communication', 'Basic Computer Skills', 'Time Management'],
      duration: '2-4 weeks',
      status: 'completed'
    },
    {
      phase: 'Skill Development',
      skills: ['Python Programming', 'Data Analysis', 'Project Management'],
      duration: '6-8 weeks',
      status: 'in-progress'
    },
    {
      phase: 'Specialization',
      skills: ['Machine Learning', 'Advanced Analytics', 'Leadership'],
      duration: '8-12 weeks',
      status: 'upcoming'
    },
    {
      phase: 'Professional Ready',
      skills: ['Industry Projects', 'Networking', 'Interview Skills'],
      duration: '4-6 weeks',
      status: 'upcoming'
    }
  ];

  const recommendations = [
    { category: 'Online Courses', items: ['Python for Beginners', 'Data Science Fundamentals', 'Communication Skills'] },
    { category: 'Certifications', items: ['Google Data Analytics', 'Microsoft Excel', 'Project Management'] },
    { category: 'Practice Projects', items: ['Build a Portfolio Website', 'Data Visualization Dashboard', 'Research Project'] }
  ];

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
            📈 Your Learning Report & Roadmap
          </h1>

          <div className="report-section">
            <h2>🎯 Personalized Learning Path</h2>
            <div className="learning-roadmap">
              {learningPath.map((phase, index) => (
                <div key={index} className="roadmap-phase">
                  <div className={`phase-header ${phase.status}`}>
                    <div className="phase-number">{index + 1}</div>
                    <div className="phase-info">
                      <h3>{phase.phase}</h3>
                      <span className="phase-duration">{phase.duration}</span>
                    </div>
                    <div className={`phase-status ${phase.status}`}>
                      {phase.status === 'completed' ? '✅' : 
                       phase.status === 'in-progress' ? '🔄' : '⏳'}
                    </div>
                  </div>
                  <div className="phase-skills">
                    {phase.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  {index < learningPath.length - 1 && <div className="roadmap-arrow">↓</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="report-section">
            <h2>📚 Recommended Resources</h2>
            <div className="recommendations-grid">
              {recommendations.map((rec, index) => (
                <div key={index} className="recommendation-card">
                  <h3>{rec.category}</h3>
                  <ul>
                    {rec.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="report-section">
            <h2>📊 Progress Analytics</h2>
            <div className="analytics-grid">
              <div className="analytics-card">
                <h4>Skills Gap Analysis</h4>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '70%' }}></div>
                </div>
                <p>70% skills match with target internships</p>
              </div>
              <div className="analytics-card">
                <h4>Learning Velocity</h4>
                <div className="velocity-indicator">📈 Fast Track</div>
                <p>Estimated completion: 3-4 months</p>
              </div>
              <div className="analytics-card">
                <h4>Internship Readiness</h4>
                <div className="readiness-score">75%</div>
                <p>Ready for entry-level positions</p>
              </div>
            </div>
          </div>

          <div className="action-buttons" style={{ marginTop: '40px' }}>
            <Link to="/interngenie/recommendations" className="submit-button">
              View Internship Matches 🎯
            </Link>
            <Link to="/interngenie/progress" className="submit-button" style={{ background: 'var(--primary-blue)', marginLeft: '15px' }}>
              Back to Progress 📊
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InternGenieReport;