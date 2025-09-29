import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../assets/MainLogo.png";

const ResumeEnhancer = () => {
  // Full-length example of current (simple) resume
  const currentResume = {
    name: "Mannat Mishra",
    email: "mannat@example.com",
    phone: "+91 9876543210",
    summary: "Final-year Computer Science student looking for internship opportunities.",
    education: [
      { degree: "B.Tech CSE", institution: "ABC University", year: "2020-2024", cgpa: "7.8/10" },
      { degree: "High School", institution: "XYZ School", year: "2018-2020", marks: "85%" },
    ],
    skills: ["HTML", "CSS", "JavaScript"],
    internships: ["Local Startup – Web Development (1 month)"],
    projects: ["Simple Portfolio Website"],
    achievements: ["School coding competition winner"],
    certifications: [],
    interests: ["Reading", "Traveling"],
  };

  // Full-length example of enhanced resume
  const enhancedResume = {
    name: "Mannat Mishra",
    email: "mannat@example.com",
    phone: "+91 9876543210",
    summary:
      "Final-year Computer Science student passionate about AI/ML and full-stack development. Successfully completed multiple internships and projects demonstrating practical skills and problem-solving ability.",
    education: [
      { degree: "B.Tech CSE", institution: "ABC University", year: "2020-2024", cgpa: "8.9/10" },
      { degree: "High School", institution: "XYZ School", year: "2018-2020", marks: "92%" },
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "TensorFlow",
      "SQL",
      "Git/GitHub",
      "Docker",
    ],
    internships: [
      "Google Summer Internship – Frontend Developer (3 months)",
      "IBM AI Research Intern – Machine Learning (2 months)",
      "Microsoft Campus Connect Internship – Full Stack Developer (1 month)",
    ],
    projects: [
      "AI-based Resume Analyzer (Python, TensorFlow)",
      "E-commerce Website (React, Node.js, MongoDB)",
      "Portfolio Website with Interactive Animations",
    ],
    achievements: [
      "Winner – HackTheCode Hackathon 2023",
      "Top 5% – LeetCode Contest 2023",
      "Dean’s List – ABC University 2022 & 2023",
    ],
    certifications: [
      "AWS Certified Solutions Architect",
      "Deep Learning Specialization – Coursera",
      "Full-Stack Web Development – Udemy",
    ],
    interests: ["AI/ML Research", "Open Source Contribution", "Traveling", "Reading Tech Blogs"],
  };

  // Helper function to render resume sections
  const renderResume = (resume) => (
    <>
      <p><strong>Name:</strong> {resume.name}</p>
      <p><strong>Email:</strong> {resume.email}</p>
      <p><strong>Phone:</strong> {resume.phone}</p>
      <p><strong>Summary:</strong> {resume.summary}</p>
      <h4>Education:</h4>
      <ul>
        {resume.education.map((edu, i) => (
          <li key={i}>
            {edu.degree}, {edu.institution} ({edu.year}) {edu.cgpa ? `| CGPA: ${edu.cgpa}` : `| Marks: ${edu.marks}`}
          </li>
        ))}
      </ul>
      <h4>Skills:</h4>
      <p>{resume.skills.join(", ")}</p>
      <h4>Internships:</h4>
      <ul>
        {resume.internships.map((intern, i) => (<li key={i}>{intern}</li>))}
      </ul>
      <h4>Projects:</h4>
      <ul>
        {resume.projects.map((proj, i) => (<li key={i}>{proj}</li>))}
      </ul>
      {resume.achievements.length > 0 && (
        <>
          <h4>Achievements:</h4>
          <ul>
            {resume.achievements.map((ach, i) => (<li key={i}>{ach}</li>))}
          </ul>
        </>
      )}
      {resume.certifications.length > 0 && (
        <>
          <h4>Certifications:</h4>
          <ul>
            {resume.certifications.map((cert, i) => (<li key={i}>{cert}</li>))}
          </ul>
        </>
      )}
      <h4>Interests:</h4>
      <p>{resume.interests.join(", ")}</p>
    </>
  );

  return (
    <div className="interngenie-container">
      <header className="interngenie-header">
        <Link to="/interngenie" className="interngenie-logo">
          <img src={MainLogo} alt="InternGenie Logo" />
          <span>InternGenie</span>
        </Link>
        <nav className="interngenie-nav">
          <Link to="/">Home</Link>
          <Link to="/interngenie/input">Find</Link>
          <Link to="/interngenie/help">Help</Link>
          <Link to="/interngenie/about">About</Link>
          <span>🌐 Language</span>
        </nav>
      </header>

      {/* Resume Comparison Section */}
      <main className="resume-enhancer">
        <h1>Enhance Your Resume 🚀</h1>
        <p className="subtitle">
          Compare your current resume with an enhanced, high-impact version.
        </p>

        <div className="resume-comparison">
          {/* Current Resume */}
          <div className="resume-card current">
            <h2>Current Resume</h2>
            {renderResume(currentResume)}
          </div>

          {/* Arrow */}
          <div className="arrow">➡️</div>

          {/* Enhanced Resume */}
          <div className="resume-card enhanced">
            <h2>Enhanced Resume</h2>
            {renderResume(enhancedResume)}
          </div>
        </div>

        <div className="resume-btn-container">
          <button className="resume-btn"><Link to="/interngenie/recommendations">Recommendations</Link></button>
          <button className="resume-btn"><Link to="/interngenie/progress">Progress Report</Link></button>
          <button className="resume-btn"><Link to="/interngenie/recommendations">Update My Resume</Link></button>
        </div>
      </main>
    </div>
  );
};

export default ResumeEnhancer;