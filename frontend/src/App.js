import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login'; 
import Board from './Board'; 
import Events from './Events'; 
import RegistrationForm from './RegistrationForm';
import IRA from './IRA';
import Approved from './Approved';
import Result from './Result';
import Dashboard from './Dashboard';
import Eventapproval from './Eventapproval';
import Status from './Status';
import Rejected from './Rejected';
import Faculties from './Faculties';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/board" element={<Board />} />
        <Route path="/events" element={<Events />} /> 
         <Route path="/approved" element={<Approved />} /> 
         <Route path="/rejected" element={<Rejected />} /> 
         <Route path="/result" element={<Result />} /> 
        <Route path="/registrationform" element={<RegistrationForm />} /> 
        <Route path="/ira" element={<IRA />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/external-events" element={<Eventapproval />} />
        <Route path="/ira-status" element={<Status />} />
        <Route path="/faculties" element={<Faculties />} />
      </Routes>
    </Router>
  );
}

export default App;
