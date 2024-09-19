import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './IRA.css';

const IRA = () => {
    const navigate = useNavigate(); 
    const [isExternalEventsDropdownOpen, setIsExternalEventsDropdownOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);
    const [availableEvents, setAvailableEvents] = useState([]);

    const toggleExternalEventsDropdown = () => {
        setIsExternalEventsDropdownOpen(!isExternalEventsDropdownOpen);
    };

    const handleEventChange = (event) => {
        const selectedCategory = event.target.value;
        setSelectedEvent(selectedCategory);

        let events = [];
        if (selectedCategory === 'category1') {
            events = ['Event 1', 'Event 2', 'Event 3'];
        } else if (selectedCategory === 'category2') {
            events = ['Event 4', 'Event 5', 'Event 6'];
        } else if (selectedCategory === 'category3') {
            events = ['Event 7', 'Event 8', 'Event 9'];
        }
        setAvailableEvents(events);
        setAvailableTimes([]);  
        setSelectedSlot('');    
    };

    const handleSlotChange = (event) => {
        const slot = event.target.value;
        setSelectedSlot(slot);

        let times = [];
        if (slot === 'slot1') {
            times = ['09:00 - 09:30 a.m', '09:30 - 10:00 a.m', '10:00 - 10:30 a.m', '10:30 - 11:00 a.m'];
        } else if (slot === 'slot2') {
            times = ['11:00 - 11:30 a.m', '11:30 - 12:00 p.m', '12:00 - 12:30 p.m', '12:30 - 01:00 p.m'];
        } else if (slot === 'slot3') {
            times = ['01:00 - 01:30 p.m', '01:30 - 02:00 p.m', '02:00 - 02:30 p.m', '02:30 - 03:00 p.m'];
        }
        setAvailableTimes(times);
    };

    return (
        <div className="container">
            
            <header className="header-bar">
                <h1 className="portal-title">EXTERNAL EVENT MANAGEMENT PORTAL</h1>
            </header>

            <div className="content">
                
                <aside className="sidebar">
                    <div className="menu-item" onClick={() => navigate('/board')}>HOME</div>
                    <div className="menu-item" onClick={toggleExternalEventsDropdown}>
                        EXTERNAL EVENTS {isExternalEventsDropdownOpen ? '▲' : '▼'}
                    </div>
                    {isExternalEventsDropdownOpen && (
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
                    <h2>REGISTRATION FORM</h2>
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="NAME" />
                            <input type="text" placeholder="ROLL NUMBER" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="TEAM OR INDIVIDUAL" />
                            <input type="text" placeholder="PS STATUS" />
                        </div>
                        <div className="form-group">
                            <select onChange={handleEventChange} value={selectedEvent}>
                                <option value="" disabled>Select Category</option>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category 2</option>
                                <option value="category3">Category 3</option>
                            </select>
                            {availableEvents.length > 0 && (
                                <select>
                                    <option value="" disabled>Select Event</option>
                                    {availableEvents.map((event, index) => (
                                        <option key={index} value={event}>{event}</option>
                                    ))}
                                </select>
                            )}
                       
                            <select onChange={handleSlotChange} value={selectedSlot}>
                                <option value="" disabled>Select Slot</option>
                                <option value="slot1">SLOT 1: 09.00 a.m - 11.00 a.m</option>
                                <option value="slot2">SLOT 2: 11.00 a.m - 01.00 p.m</option>
                                <option value="slot3">SLOT 3: 01.00 p.m - 03.00 p.m</option>
                            </select>
                        </div>
                        {availableTimes.length > 0 && (
                            <div className="form-group">
                                <select>
                                    <option value="" disabled>Select Time</option>
                                    {availableTimes.map((time, index) => (
                                        <option key={index} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default IRA;
