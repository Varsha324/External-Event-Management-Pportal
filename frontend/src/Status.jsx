import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Status.css'; 

const Status = () => {
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
                    <div className="menu-item" onClick={() => navigate('/ira-status')}>IRA STATUS</div>
                    <div className="dashboard-menu-item" onClick={() => navigate('/')}>LOGOUT</div>
                </aside>

        
           <main className="main-content">
                    <header>
                        <h1>IRA STATUS</h1>
                    </header>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Roll Number</th>
                                    <th>Events</th>
                                    <th>Status</th>
                                    <th>       </th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Varsha K</td>
                                    <td>7376221EC335</td>
                                    <td>Ninjacart Hackathon</td>
                                    <td className="status approved">Approved</td>
                                    <td className="status rejected">Rejected</td>
                                    <td className="status remarks">Remarks</td>
                                </tr>
                                <tr>
                                    <td>Dharsini R</td>
                                    <td>7376221EC147</td>
                                    <td>Aakruthi</td>
                                    <td className="status approved">Approved</td>
                                    <td className="status rejected">Rejected</td>
                                    <td className="status remarks">Remarks</td>
                                </tr>
                                <tr>
                                    <td>Selvarani T</td>
                                    <td>7376221EC304</td>
                                    <td>Google AI Hackathon</td>
                                    <td className="status approved">Approved</td>
                                    <td className="status rejected">Rejected</td>
                                    <td className="status remarks">Remarks</td>
                                </tr>
                                <tr>
                                    <td>Sukirtha L</td>
                                    <td>7376221EC304</td>
                                    <td>Robocup</td>
                                    <td className="status approved">Approved</td>
                                    <td className="status rejected">Rejected</td>
                                    <td className="status remarks">Remarks</td>
                                </tr>
                                <tr>
                                    <td>Ambuja S</td>
                                    <td>7376221EC111</td>
                                    <td>Yugam</td>
                                    <td className="status approved">Approved</td>
                                    <td className="status rejected">Rejected</td>
                                    <td className="status remarks">Remarks</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Status;
