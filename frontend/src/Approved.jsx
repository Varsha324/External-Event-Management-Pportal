import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
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
                    <div className="menu-item" onClick={() => navigate('/board')}>HOME</div>
                    <div className="menu-item" onClick={toggleDropdown}>
                        EXTERNAL EVENTS {isDropdownOpen ? '▲' : '▼'}
                    </div>
                    {isDropdownOpen && (
                        <div className="submenu">
                           <div className="submenu-item" onClick={() => navigate('/events')}>EVENTS</div>
                           <div className="submenu-item" onClick={() => navigate('/registrationform')}>REGISTRATION</div>
                            <div className="submenu-item" onClick={() => navigate('/approved')}>LIST OF APPROVED & REJECTED EVENTS</div>
                        </div>
                    )}
                    <div className="menu-item" onClick={() => navigate('/ira')}>IRA REGISTRATION</div>
                    <div className="menu-item" onClick={() => navigate('/result')}>IRA RESULT</div>
                    <div className="menu-item" onClick={() => navigate('/')}>LOGOUT</div>
                </aside>
                <div className="content-area">
                    <h1>LIST OF APPROVED AND REJECTED EVENTS</h1>
                    <table className="events-table">
                        <thead>
                            <tr>
                                <th>APPROVED EVENTS</th>
                                <th>REJECTED EVENTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SIH</td>
                                <td>YUGAM</td>
                            </tr>
                            <tr>
                                <td>WORLD SKILL</td>
                                <td>DIGITRIX</td>
                            </tr>
                            <tr>
                                <td>GOOGLE AI HACKATHON</td>
                                <td>SPECTRA</td>
                            </tr>
                            <tr>
                                <td>ROBOCUP</td>
                                <td>INNOVATE</td>
                            </tr>
                            <tr>
                                <td>L & T TECHGIUM</td>
                                <td>TECHNOXIAN</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Approved;
