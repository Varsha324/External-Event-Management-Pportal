import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            
            <header className="dashboard-header-bar">
                <h1 className="dashboard-portal-title">EXTERNAL EVENT MANAGEMENT PORTAL</h1>
            </header>

            <div className="dashboard-content">
               
                <aside className="dashboard-sidebar">
                    <div className="dashboard-menu-item" onClick={() => navigate('/dashboard')}>DASHBOARD</div>
                    <div className="dashboard-menu-item" onClick={() => navigate('/external-events')}>EXTERNAL EVENTS</div>
                    <div className="dashboard-menu-item" onClick={() => navigate('/ira-status')}>IRA STATUS</div>
                    <div className="dashboard-menu-item" onClick={() => navigate('/')}>LOGOUT</div>
                </aside>

                
                <main className="dashboard-main-content">
                    <header>
                        <h1>HI ADMIN!</h1>
                    </header>
                    <div className="dashboard-dashboard">
                        <div className="dashboard-dashboard-item">
                            <h2>TOTAL REQUESTS</h2>
                            <p>9</p>
                        </div>
                        <div className="dashboard-dashboard-item">
                            <h2>EVENTS ADDED</h2>
                            <p>20</p>
                           
                        </div>
                        <div className="dashboard-dashboard-item">
                            <h2>APPOINTMENTS</h2>
                            <p>10</p>
                        </div>
                        <div className="dashboard-dashboard-item">
                            <h2>STUDENTS DETAILS</h2>
                        </div>
                        <div className="dashboard-dashboard-item">
                            <h2>FACULTY DETAILS</h2>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
