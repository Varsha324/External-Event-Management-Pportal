import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Approved.css";

const Approved = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container">
      <header className="header-bar">
        <h1 className="portal-title">EXTERNAL EVENT MANAGEMENT PORTAL</h1>
      </header>

      <div className="content">
        <aside className="sidebar">
          <div className="menu-item" onClick={() => navigate("/board")}>
            HOME
          </div>
          <div className="menu-item" onClick={toggleDropdown}>
            EXTERNAL EVENTS {isDropdownOpen ? "▲" : "▼"}
          </div>
          {isDropdownOpen && (
            <div className="submenu">
              <div className="submenu-item" onClick={() => navigate("/events")}>
                EVENTS
              </div>
              <div
                className="submenu-item"
                onClick={() => navigate("/registrationform")}
              >
                REGISTRATION
              </div>
              <div
                className="submenu-item"
                onClick={() => navigate("/approved")}
              >
                APPROVED EVENTS
              </div>
              <div
                className="submenu-item"
                onClick={() => navigate("/rejected")}
              >
                REJECTED EVENTS
              </div>
            </div>
          )}
          <div className="menu-item" onClick={() => navigate("/ira")}>
            IRA REGISTRATION
          </div>
          <div className="menu-item" onClick={() => navigate("/result")}>
            IRA RESULT
          </div>
          <div className="menu-item" onClick={() => navigate("/")}>
            LOGOUT
          </div>
        </aside>
        <div className="approved-content-area">
          <h1>LIST OF APPROVED EVENTS</h1>
          <table className="approved-table">
            <thead>
              <tr>
                <th>CODE</th>
                <th>APPROVED EVENTS</th>
                <th>IRA</th>
              </tr>
            </thead>
            <tbody>
              <tr key="BIT01">
                <td>BIT01</td>
                <td>SIH</td>
                <td>REQUIRED</td>
              </tr>
              <tr key="BIT02">
                <td>BIT02</td>
                <td>WORLD SKILL</td>
                <td>NOT REQUIRED</td>
              </tr>
              <tr key="BIT03-1">
                <td>BIT03</td>
                <td>GOOGLE AI HACKATHON</td>
                <td>NOT REQUIRED</td>
              </tr>
              <tr key="BIT03-2">
                <td>BIT03</td>
                <td>ROBOCUP</td>
                <td>REQUIRED</td>
              </tr>
              <tr key="BIT04">
                <td>BIT04</td>
                <td>L & T TECHGIUM</td>
                <td>NOT REQUIRED</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Approved;
