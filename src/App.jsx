import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import InternGenieLanding from './pages/InternGenieLanding';
import InternGenieInput from './pages/InternGenieInput';
import InternGenieRecommendations from './pages/InternGenieRecommendations';
import InternGenieHelp from './pages/InternGenieHelp';
import InternGenieAbout from './pages/InternGenieAbout';
import InternGenieSkills from './pages/InternGenieSkills';
import InternGenieProgress from './pages/InternGenieProgress';
import InternGenieReport from './pages/InternGenieReport';
import InternGenieDiscussion from './pages/InternGenieDiscussion';
import ResumeEnhancer from './pages/ResumeEnhancer';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/interngenie" element={<InternGenieLanding />} />
        <Route path="/interngenie/input" element={<InternGenieInput />} />
        <Route path="/interngenie/skills" element={<InternGenieSkills />} />
        <Route path="/interngenie/progress" element={<InternGenieProgress />} />
        <Route path="/interngenie/report" element={<InternGenieReport />} />
        <Route path="/interngenie/recommendations" element={<InternGenieRecommendations />} />
        <Route path="/interngenie/help" element={<InternGenieHelp />} />
        <Route path="/interngenie/about" element={<InternGenieAbout />} />
        <Route path="/interngenie/discussion" element={<InternGenieDiscussion />} />
        <Route path="/interngenie/resume-enhancer" element={<ResumeEnhancer />} />
      </Routes>
    </Router>
  );
}

export default App;