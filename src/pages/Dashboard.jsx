import React, { useState } from 'react';
import Operator from '../assets/operator.png';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <>
      <div className="dashboard-content">
      <aside className="sidebar">
        <div className="profile-section">
          <div className="profile-completion">
            Profile Completed:
          </div>
          <div className="profile-location">
            📍 East Singhbum, JHARKHAND
          </div>
          <ul className="profile-actions">
            <li><a href="#">👁️ View Profile / CV</a></li>
            <li><a href="#">🔒 Change Password</a></li>
            <li><a href="#">🚪 Sign Out</a></li>
          </ul>
        </div>
        
        <div className="grievance-section">
          <h3>
             File a Grievance
            <div className="human-assistance-icon"><img src={Operator}/></div>
          </h3>
          <button className="grievance-button">New Grievance</button>
          <h4>Grievance Status</h4>
          <ul className="grievance-status">
            <li>Pending <span className="status-count pending">0</span></li>
            <li>Disposed <span className="status-count disposed">0</span></li>
            <li>Clarification Asked <span className="status-count clarification">0</span></li>
            <li>Document(s) Asked <span className="status-count document">0</span></li>
            <li>Interim Reply <span className="status-count interim">0</span></li>
            <li>Re-Submitted <span className="status-count resubmitted">0</span></li>
            <li>Raised Appeal <span className="status-count appeal">0</span></li>
            <li>Final Disposed <span className="status-count final">0</span></li>
          </ul>
          <button className="nav-button" style={{width: '100%', marginTop: '15px'}}>
            🔄 Modify Consent
          </button>
        </div>
      </aside>

      <main className="main-content">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'current' ? 'active' : ''}`}
            onClick={() => setActiveTab('current')}
          >
            My Current Status
          </button>
          <button 
            className={`tab ${activeTab === 'opportunities' ? 'active' : ''}`}
            onClick={() => setActiveTab('opportunities')}
          >
            Internship Opportunities
          </button>
          <button 
            className={`tab ${activeTab === 'internship' ? 'active' : ''}`}
            onClick={() => setActiveTab('internship')}
          >
            My Internship
          </button>
          <button 
            className={`tab ${activeTab === 'news' ? 'active' : ''}`}
            onClick={() => setActiveTab('news')}
          >
            News & Events
          </button>
          <button 
            className={`tab ${activeTab === 'refer' ? 'active' : ''}`}
            onClick={() => setActiveTab('refer')}
          >
            Refer A Friend <span style={{background: '#dc3545', color: 'white', padding: '2px 6px', borderRadius: '3px', fontSize: '10px', marginLeft: '5px'}}>NEW</span>
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'current' && (
            <>
              <div className="tab-content-1"> 
                <div className="progress-section">
                  <h2 className="progress-title">Registration</h2>
                  <div className="progress-steps">
                    <div className="progress-step">
                      <div className="step-circle">✓</div>
                      <div className="step-label">Registration</div>
                    </div>
                    <div className="progress-step">
                      <div className="step-circle">✓</div>
                      <div className="step-label">Profile</div>
                    </div>
                    <div className="progress-step">
                      <div className="step-circle pending">3</div>
                      <div className="step-label">My Applications</div>
                    </div>
                    <div className="progress-step">
                      <div className="step-circle pending">4</div>
                      <div className="step-label">Offer Accepted</div>
                    </div>
                    <div className="progress-step">
                      <div className="step-circle pending">5</div>
                      <div className="step-label">Previously Joined</div>
                    </div>
                    <div className="progress-step">
                      <div className="step-circle pending">6</div>
                      <div className="step-label">Internship Started</div>
                    </div>
                    <div className="progress-step">
                      <div className="step-circle pending">7</div>
                      <div className="step-label">Internship Completed</div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="tab-content-2">
                <div className="candidate-profile">
                  <div className="profile-header">
                    <h2>Candidate Profile</h2>
                    <div className="profile-completion-text">
                      <span>Hi, Abhay Kumar Das</span>
                      <span>🎉 You have successfully completed your profile.</span>
                    </div>
                  </div>

                  <div className="progress-steps">
                    <div className="progress-step">
                      <div className="step-circle">✓</div>
                      <div className="step-label">e-KYC</div>
                    </div>
                    <div className="progress-step">
                      <div className="step-circle">✓</div>
                      <div className="step-label">Personal Details</div>
                    </div>
                    <div className="progress-step">
                      <div className="step-circle">✓</div>
                      <div className="step-label">Contact Details</div>
                    </div>
                    <div className="progress-step">
                      <div className="step-circle">✓</div>
                      <div className="step-label">Education Details</div>
                    </div>
                    <div className="progress-step">
                      <div className="step-circle">✓</div>
                      <div className="step-label">Bank Details</div>
                    </div>
                    <div className="progress-step">
                      <div className="step-circle">✓</div>
                      <div className="step-label">Skills & Languages</div>
                    </div>
                    <div className="progress-step">
                      <div className="step-circle">✓</div>
                      <div className="step-label">Profile Completed</div>
                    </div>
                  </div>

                  <div className="action-buttons">
                    <button className="action-button edit">
                      ✏️ Edit
                    </button>
                    <button className="action-button preview">
                      👁️ Preview
                    </button>
                    <button className="action-button apply">
                      🎯 Apply for Internship
                    </button>
                    <button className="action-button check">
                      🏦 Check Aadhaar Seeding Status
                    </button>
                    <button className="action-button aadhaar">
                      🔗 Click here for Aadhaar Seeding
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'opportunities' && (
            <div>
              <h2>Internship Opportunities</h2>
              <p>Browse available internship opportunities here.</p>
            </div>
          )}
          
          {activeTab === 'internship' && (
            <div>
              <h2>My Internship</h2>
              <p>Track your current internship progress here.</p>
            </div>
          )}
          
          {activeTab === 'news' && (
            <div>
              <h2>News & Events</h2>
              <p>Stay updated with latest news and events.</p>
            </div>
          )}
          
          {activeTab === 'refer' && (
            <div>
              <h2>Refer A Friend</h2>
              <p>Invite friends to join the PM Internship program.</p>
            </div>
          )}
        </div>
      </main>
      </div>

      <button 
        className="notifications-toggle"
        onClick={() => setNotificationsOpen(!notificationsOpen)}
      >
        Notifications
      </button>

      <aside className={`notifications ${notificationsOpen ? 'open' : ''}`}>
        <h3>🔔 Notifications</h3>
        <div className="notification-item">
          <div className="notification-title">Action Required - How to Join after Accepting Your PM Inter...</div>
          <div className="notification-text">How to Join, after you have accepted your offer letter: 1...</div>
          <div className="notification-date">June 2, 2025 at 14:45</div>
          <a href="#" className="read-more">Read More</a>
        </div>
        
        <div className="notification-item">
          <div className="notification-title">Action Required - How to Accept Your PM Internship Offer</div>
          <div className="notification-text">Dear Candidate, To accept your internship offer, please fol...</div>
          <div className="notification-date">June 2, 2025 at 14:42</div>
          <a href="#" className="read-more">Read More</a>
        </div>
        
        <div className="notification-item">
          <div className="notification-title">Now check the status of your Aadhaar-seeded bank account dir...</div>
          <div className="notification-text">Dear Candidate, You can now check the status of your Aadhaa...</div>
          <div className="notification-date">May 28, 2025 at 11:25</div>
          <a href="#" className="read-more">Read More</a>
        </div>
      </aside>

      <button className="help-circle">
        Need Help?
      </button>

      <button className="dos-donts-circle">
        Do's Don'ts
      </button>
    </>
  );
};

export default Dashboard;