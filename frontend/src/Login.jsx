import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Admin credentials
    if (email === 'admin@example.com' && password === 'password123') {
      navigate('/dashboard'); // Navigate to Dashboard.jsx for admin
    }
    // User credentials (varsha.ec22@bitsathy.ac.in)
    else if (email === 'varsha.ec22@bitsathy.ac.in' && password === 'password123') {
      navigate('/board'); // Navigate to Board.jsx for user
    } 
    // Handle incorrect credentials
    else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleGoogleSignIn = () => {
    navigate('/dashboard'); // You can adjust this for Google sign-in logic
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>EXTERNAL EVENT MANAGEMENT PORTAL</h2>
        <div className="input-group">
          <label htmlFor="email">EMAIL ID</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-sign-in-button" onClick={handleLogin}>
          SIGN IN
        </button>
        <p>OR</p>
        <button className="login-google-sign-in-button" onClick={handleGoogleSignIn}>
          SIGN IN WITH GOOGLE
        </button>
      </div>
    </div>
  );
}

export default Login;
