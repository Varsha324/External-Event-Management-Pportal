import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Board.css';

const Board = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate(); 

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

                <main className="main-content">
                    <header>
                        <h1>WELCOME BACK VARSHA K !!</h1>
                    </header>
                    <section className="rules">
                        <h2>SPECIAL LAB RULES AND REGULATIONS :</h2>
                        <ul>
                            <li>All the students are expected to follow the dress code accordingly.</li>
                            <li>Must register for IRA assessment for the events which are under category 1, 2, 3.</li>
                            <li>Students can fill the request form for the events which they are aware of.</li>
                            <li>All the students are expected to complete their SSIG target within the given period of time.</li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Board;
