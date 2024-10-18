import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div
      style={{
        backgroundColor: '#f0f0f0',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          padding: '30px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          width: '400px'
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Welcome back</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px', color: '#6c757d' }}>
          Welcome back! Please enter your details.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ced4da'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ced4da'
              }}
            />
          </div>

          <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#6c757d' }}>Forgot password</a>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          ><Link to="/dashboard">
              Login
            </Link>

          </button>

          <button
            type="button"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#fff',
              color: '#000',
              border: '1px solid #ced4da',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            <FcGoogle style={{ width: '20px', marginRight: '10px' }} />


            Sign in with Google
          </button>
        </form>

        <p style={{ textAlign: 'center', color: '#6c757d' }}>
          Don’t have an account? <a href="#" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>Sign up for free</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
