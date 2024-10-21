import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Faculties.css'; 

const Faculties = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <header className="header-bar">
                <h1 className="portal-title">EXTERNAL EVENT MANAGEMENT PORTAL</h1>
            </header>

            <div className="content">
                <aside className="sidebar">
                    <div className="menu-item" onClick={() => navigate('/dashboard')}>DASHBOARD</div>
                    <div className="menu-item" onClick={() => navigate('/external-events')}>EXTERNAL EVENTS</div>
                    <div className="dashboard-menu-item" onClick={() => navigate("/faculties")}>FACULTIES </div>
                    <div className="menu-item" onClick={() => navigate('/ira-status')}>IRA STATUS</div>
                    <div className="dashboard-menu-item" onClick={() => navigate('/')}>LOGOUT</div>
                </aside>

                <main className="faculties-main-content">
                <h1 className="portal-title">AVAILABLE FACULTIES</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Event</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Saveetha</td>
                                <td>CSE</td>
                                <td>Ninjacart</td>
                                <td>9.30-12.30</td>
                            </tr>
                            <tr>
                                <td>Dharsini</td>
                                <td>ECE</td>
                                <td>Aakruthi</td>
                                <td>1.30-4.30</td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        </div>
    );
}

export default Faculties;
