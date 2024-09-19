import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';


const RegistrationForm = () => {
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
                    <div className="menu-item" onClick={() => navigate('/dashboard')}>HOME</div>
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


                <div className="registration-form">
                    <h2>Registration form</h2>
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="NAME" />
                            <input type="text" placeholder="ROLL NUMBER" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="SPECIAL LAB" />
                            <input type="text" placeholder="EVENT" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="ORGANIZER" />
                            <input type="url" placeholder="WEBSITE LINK" />
                        </div>
                       
                     <div className="form-group">
                            <div className="location-group">
                                <input type="text" placeholder="COUNTRY" />
                                <input type="text" placeholder="STATE" />
                                <input type="text" placeholder="DISTRICT" />
                            </div>
                       
                        </div>
                        <div className="form-group">
                       
                    
                    <input type="text" placeholder="START DATE" />
                    <input type="text" placeholder="END DATE" />
                    </div>
                     
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default RegistrationForm;
