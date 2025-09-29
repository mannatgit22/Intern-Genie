import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLogo from '../assets/MainLogo.png';

const InternGenieSkills = () => {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skillCategories = {
    'Technical Skills': ['Python', 'JavaScript', 'Java', 'React', 'Node.js', 'SQL', 'Data Analysis', 'Machine Learning', 'AI', 'Cybersecurity'],
    'Creative Skills': ['Graphic Design', 'UI/UX Design', 'Video Editing', 'Content Writing', 'Photography', 'Animation', 'Web Design'],
    'Business Skills': ['Marketing', 'Sales', 'Project Management', 'Business Analysis', 'Finance', 'Accounting', 'HR', 'Operations'],
    'Communication Skills': ['Public Speaking', 'Writing', 'Social Media', 'Presentation', 'Translation', 'Customer Service']
  };

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleNext = () => {
    navigate('/interngenie/progress');
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
          <Link to="/interngenie/report">Report</Link>
        </nav>
      </header>
      
      <main className="interngenie-content">
        <div className="input-content">
          <h1 style={{ color: 'var(--primary-blue)', textAlign: 'center', marginBottom: '30px' }}>
            🎯 Skill-Based Recommendations
          </h1>
          
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '75%' }}></div>
          </div>
          <div style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-gray)' }}>
            ▓▓▓▓░ 75%
          </div>

          <p style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--text-gray)' }}>
            Select skills you have or want to develop for targeted internship recommendations
          </p>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="form-section">
              <h3>{category}</h3>
              <div className="skills-grid">
                {skills.map(skill => (
                  <div 
                    key={skill}
                    className={`skill-checkbox ${selectedSkills.includes(skill) ? 'checked' : ''}`}
                    onClick={() => handleSkillToggle(skill)}
                  >
                    <input 
                      type="checkbox" 
                      checked={selectedSkills.includes(skill)}
                      onChange={() => handleSkillToggle(skill)}
                    />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <p style={{ color: 'var(--text-gray)', marginBottom: '20px' }}>
              Selected Skills: {selectedSkills.length}
            </p>
            <button 
              onClick={handleNext}
              className="submit-button"
              disabled={selectedSkills.length === 0}
            >
              Continue to Progress Tracker →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InternGenieSkills;