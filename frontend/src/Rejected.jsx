import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Rejected.css";

const Rejected = () => {
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
        <div className="rejected-content-area">
          <h1>REJECTED EVENTS</h1>
          <table className="rejected-table">
            <thead>
              <tr>
                <th>CODE</th>
                <th>REJECTED EVENTS</th>
              </tr>
            </thead>
            <tbody>
              <tr key="RBIT01">
                <td>RBIT01</td>
                <td>GALAXY</td>
              </tr>
              <tr key="RBIT02">
                <td>RBIT02</td>
                <td>MEDXPERIA</td>
              </tr>
              <tr key="RBIT03">
                <td>RBIT03</td>
                <td>FACTURERZ</td>
              </tr>
              <tr key="RBIT04">
                <td>RBIT04</td>
                <td>FORSCH'24</td>
              </tr>
              <tr key="RBIT05">
                <td>RBIT05</td>
                <td>KARIYA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Rejected;
