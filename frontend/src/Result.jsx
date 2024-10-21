// src/Result.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Result.css'; // Import the correct CSS file

const Result = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header-bar">
        <h1 className="portal-title">EXTERNAL EVENT MANAGEMENT PORTAL</h1>
      </header>

      <div className="content">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="menu-item" onClick={() => navigate('/board')}>HOME</div>
          <div className="menu-item" onClick={toggleDropdown}>
            EXTERNAL EVENTS {isDropdownOpen ? '▲' : '▼'}
          </div>
          {isDropdownOpen && (
            <div className="submenu">
             <div className="submenu-item" onClick={() => navigate('/events')}>EVENTS</div>
             <div className="submenu-item" onClick={() => navigate('/registrationform')}>REGISTRATION</div>
             <div className="submenu-item" onClick={() => navigate('/approved')}>APPROVED EVENTS</div>
             <div className="submenu-item" onClick={() => navigate('/rejected')}>REJECTED EVENTS</div>
            </div>
          )}
          <div className="menu-item" onClick={() => navigate('/ira')}>IRA REGISTRATION</div>
          <div className="menu-item" onClick={() => navigate('/result')}>IRA RESULT</div>
          <div className="menu-item" onClick={() => navigate('/')}>LOGOUT</div>
        </aside>

        {/* Main Content */}
        <main className="result-main-content">
          <div className="header">
            <h2 className="title">RESULT</h2>
          </div>
          <table className="result-registration-table">
            <thead>
              <tr>
                <th>ROLL NUMBER</th>
                <th>CATEGORY</th>
                <th>EVENT</th>
                <th>STATUS</th>
                <th>REMARKS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7376221EC335</td>
                <td>SOFTWARE</td>
                <td>NINJACART HACKATHON</td>
                <td><span className="status initiated">INITIATED</span></td>
                <td>-</td>
              </tr>
              <tr>
                <td>7376221EC335</td>
                <td>HARDWARE</td>
                <td>DIGITRIX</td>
                <td><span className="status rejected">REJECTED</span></td>
                <td>NEED TECHNICAL ADVANCEMENTS</td>
              </tr>
              <tr>
                <td>7376221EC335</td>
                <td>SOFTWARE</td>
                <td>GOOGLE AI HACKATHON</td>
                <td><span className="status approved">APPROVED</span></td>
                <td>-</td>
              </tr>
              <tr>
                <td>7376221EC335</td>
                <td>HARDWARE</td>
                <td>ROBOCUP</td>
                <td><span className="status approved">APPROVED</span></td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default Result;
