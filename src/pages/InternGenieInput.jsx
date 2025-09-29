import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLogo from '../assets/MainLogo.png';


const InternGenieInput = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    education: '',
    skills: [],
    interest: '',
    location: ''
  });

  const skills = ['Python', 'Marketing', 'Design', 'Communication', 'AI', 'JavaScript', 'Data Analysis', 'Content Writing'];

  const handleSkillChange = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) 
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/interngenie/recommendations');
  };

  return (
    <div className="input-container">
      <header className="interngenie-header">
        <Link to="/interngenie" className="interngenie-logo">
          <img src={MainLogo} /> InternGenie
        </Link>
        <nav className="interngenie-nav">
          <Link to="/interngenie">Home</Link>
          <Link to="/interngenie/help">Help</Link>
          <Link to="/interngenie/about">About</Link>
          

          <span>🌐 Language</span>
        </nav>
      </header>
      
      <main className="interngenie-content">
        <div className="input-content">
          <h1 style={{ color: 'var(--primary-blue)', textAlign: 'center', marginBottom: '30px' }}>
            Tell us about yourself
          </h1>
          <p style={{ paddingBottom:"20px"}}>Step 2 of 4 - Skills & Interests</p>
          
         
          
          
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>🎓 Education Level</h3>
              <div className="form-group">
                <select 
                  className="form-control"
                  value={formData.education}
                  onChange={(e) => setFormData(prev => ({ ...prev, education: e.target.value }))}
                  required
                >
                  <option value="">Select Education Level</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgraduate">Post Graduate</option>
                  <option value="diploma">Diploma</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <h3>🛠 Skills</h3>
              <div className="skills-grid">
                {skills.map(skill => (
                  <div 
                    key={skill}
                    className={`skill-checkbox ${formData.skills.includes(skill) ? 'checked' : ''}`}
                    onClick={() => handleSkillChange(skill)}
                  >
                    <input 
                      type="checkbox" 
                      checked={formData.skills.includes(skill)}
                      onChange={() => handleSkillChange(skill)}
                    />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-section">
              <h3>💡 Area of Interest</h3>
              <div className="form-group">
                <select 
                  className="form-control"
                  value={formData.interest}
                  onChange={(e) => setFormData(prev => ({ ...prev, interest: e.target.value }))}
                  required
                >
                  <option value="">Select Area of Interest</option>
                  <option value="technology">Technology</option>
                  <option value="marketing">Marketing</option>
                  <option value="design">Design</option>
                  <option value="research">Research</option>
                  <option value="social-work">Social Work</option>
                  <option value="business">Business</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <h3>📍 Location</h3>
              <div className="form-group">
                <select 
                  className="form-control"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  required
                >
                  <option value="">Select Location</option>
                  <option value="remote">Remote</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="pune">Pune</option>
                  <option value="chennai">Chennai</option>
                  <option value="kolkata">Kolkata</option>
                </select>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Get Recommendations
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default InternGenieInput;