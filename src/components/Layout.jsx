import React from 'react';
import { Link } from 'react-router-dom';
import MCA from '../assets/MCA.png'; 
import PM from '../assets/PM.png';
import FAQs from '../assets/FAQs.svg';
import Guidelines from '../assets/Guidelines.png';
import PartnerCompanies from '../assets/Partnercompanies.svg';
import Manuals from '../assets/Manuals.png';
import Tutorials from '../assets/Tutorials.png';
import Language from '../assets/Language.png';


const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <header className="header">
        <div className="header-top">
          Ministry of Corporate Affairs, Government of India
        </div>
        <div className="header-main">
          <div className="logo-section">
            <div className="govt-logo">
              <img src={MCA} alt="Government Logo" />
             
            </div>
            <div className="pm-internship-logo">
              <img src={PM} alt="Government Logo" />

            </div>
          </div>
          <div className="header-right">
            <nav className="navigation">
              <a href="#" className="nav-link"><img src={FAQs}/> FAQs</a>
              <a href="#" className="nav-link"><img src={Guidelines}/> Guidelines</a>
              <a href="#" className="nav-link"><img src={PartnerCompanies}/> Partner Companies</a>
              <a href="#" className="nav-link"><img src={Manuals}/> Manuals</a>
              <a href="#" className="nav-link"><img src={Tutorials}/> Tutorials/Guidance Videos</a>
              <Link to="/interngenie" className="nav-button interngenie">
                InternGenie
              </Link>
              <a href="#" className="nav-button">Apply Insurance</a>
              <a href="#" className="nav-button">My Bharat Portal</a>
            </nav>
            <div className="language-selector">
              <div className="language-icon"><img src={Language}/></div>
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-left">
            © PM Internship Scheme, MCA. All Rights Reserved.
          </div>
          <div className="footer-right">
            Technical collaboration with BISAG-N
            <div className="ai-assistance-icon">🤖</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;