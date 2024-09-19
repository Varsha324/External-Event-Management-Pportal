import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Eventapproval.css'; 

const Eventapproval = () => {
    const navigate = useNavigate();

    return (
        <div className="eventapproval-container">
           
            <header className="eventapproval-header-bar">
                <h1 className="eventapproval-portal-title">EXTERNAL EVENT MANAGEMENT PORTAL</h1>
            </header>

            <div className="eventapproval-content">
                
                <aside className="eventapproval-sidebar">
                    <div className="eventapproval-menu-item" onClick={() => navigate('/dashboard')}>DASHBOARD</div>
                    <div className="eventapproval-menu-item" onClick={() => navigate('/external-events')}>EXTERNAL EVENTS</div>
                    <div className="eventapproval-menu-item" onClick={() => navigate('/ira-status')}>IRA STATUS</div>
                    <div className="dashboard-menu-item" onClick={() => navigate('/')}>LOGOUT</div>
                </aside>

             
                <main className="eventapproval-main-content">
                    <header>
                        <h1>EXTERNAL EVENTS</h1>
                    </header>
                    <div className="eventapproval-table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Roll Number</th>
                                    <th>Events</th>
                                    <th>Status</th>
                                    <th> </th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Varsha K</td>
                                    <td>7376221EC335</td>
                                    <td>Ninjacart Hackathon</td>
                                    <td className="eventapproval-status approved">Approved</td>
                                    <td className="eventapproval-status rejected">Rejected</td>
                                    <td className="eventapproval-status remarks">Remarks</td>
                                </tr>
                                <tr>
                                    <td>Dharsini R</td>
                                    <td>7376221EC147</td>
                                    <td>Aakruthi</td>
                                    <td className="eventapproval-status approved">Approved</td>
                                    <td className="eventapproval-status rejected">Rejected</td>
                                    <td className="eventapproval-status remarks">Remarks</td>
                                </tr>
                                <tr>
                                    <td>Selvarani T</td>
                                    <td>7376221EC304</td>
                                    <td>Google AI Hackathon</td>
                                    <td className="eventapproval-status approved">Approved</td>
                                    <td className="eventapproval-status rejected">Rejected</td>
                                    <td className="eventapproval-status remarks">Remarks</td>
                                </tr>
                                <tr>
                                    <td>Sukirtha L</td>
                                    <td>7376221EC304</td>
                                    <td>Robocup</td>
                                    <td className="eventapproval-status approved">Approved</td>
                                    <td className="eventapproval-status rejected">Rejected</td>
                                    <td className="eventapproval-status remarks">Remarks</td>
                                </tr>
                                <tr>
                                    <td>Ambuja S</td>
                                    <td>7376221EC111</td>
                                    <td>Yugam</td>
                                    <td className="eventapproval-status approved">Approved</td>
                                    <td className="eventapproval-status rejected">Rejected</td>
                                    <td className="eventapproval-status remarks">Remarks</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Eventapproval;
