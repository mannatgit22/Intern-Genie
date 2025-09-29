import React from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../assets/MainLogo.png';


const InternGenieRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: "AI Research Intern",
      company: "IBM",
      location: "Remote",
      duration: "3 months",
      skills: ["Python", "ML"],
      match: 85,
      description: "Work on cutting-edge AI research projects"
    },
    {
      id: 2,
      title: "Social Media Intern",
      company: "NGO",
      location: "Delhi",
      duration: "2 months",
      skills: ["Communication", "Canva"],
      match: 72,
      description: "Create engaging content for social impact"
    },
    {
      id: 3,
      title: "Web Dev Intern",
      company: "Startup",
      location: "Bangalore",
      duration: "3 months",
      skills: ["HTML", "CSS", "JS"],
      match: 65,
      description: "Build innovative web applications"
    }
  ];

  const handleApply = (internship) => {
    alert(`Redirecting to PM Internship Portal to apply for ${internship.title} at ${internship.company}`);
    // In real implementation, redirect to PM portal
    window.open('/', '_blank');
  };

  const handleSave = (internship) => {
    alert(`${internship.title} saved to your favorites!`);
  };

  return (
    <div className="recommendations-container">
      <header className="interngenie-header">
        <Link to="/interngenie" className="interngenie-logo">
          <img src={MainLogo} /> InternGenie
        </Link>
        <nav className="interngenie-nav">
          <Link to="/">Home</Link>
          <Link to="/interngenie/input">Find</Link>
          <Link to="/interngenie/help">Help</Link>
          <Link to="/interngenie/about">About</Link>
          <Link to="/interngenie/progress">Progress</Link>
        </nav>
      </header>
      
      <main className="recommendations-content">
        <div className="recommendations-header">
          <h1>Your Top Matches</h1>
          <p>Based on your skills & preferences</p>
        </div>

        {recommendations.map(internship => (
          <div key={internship.id} className="internship-card">
            <div className="card-header">
              <div>
                <div className="internship-title">
                  📌 {internship.title}
                </div>
                <div className="internship-details">
                  <div className="detail-item">
                    🏢 {internship.company}
                  </div>
                  <div className="detail-item">
                    📍 {internship.location}
                  </div>
                  <div className="detail-item">
                    🕒 {internship.duration}
                  </div>
                </div>
              </div>
              <div className="match-score">
                🎯 Match: {internship.match}%
              </div>
            </div>
            
            <div className="skills-required">
              <strong>🛠 Skills:</strong> {internship.skills.join(', ')}
            </div>
            
            <div className="card-actions">
              <button 
                className="apply-btn"
                onClick={() => handleApply(internship)}
              >
                👉 Apply Now
              </button>
              <button 
                className="save-btn"
                onClick={() => handleSave(internship)}
              >
                ⭐ Save
              </button>
              <button className="discussion-btn"><Link to="/interngenie/discussion">Discussion</Link></button>
            </div>
          </div>
        ))}
        <button className="skill-recommend"><Link to="/interngenie/Skills">Skill Recommendations</Link></button>

        <button className="resume-enhancer-btn"><Link to="/interngenie/resume-enhancer">✨ Enhance Your Current Resume</Link></button>
      </main>
    </div>
  );
};

export default InternGenieRecommendations;