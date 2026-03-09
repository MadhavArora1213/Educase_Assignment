import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="screen-padding" style={{ justifyContent: 'flex-end', paddingBottom: '40px' }}>
      <h1>Welcome to PopX</h1>
      <p className="description">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit.
      </p>
      
      <button 
        style={{ 
          backgroundColor: 'var(--primary)', 
          color: 'var(--white)', 
          padding: '14px', 
          width: '100%', 
          marginBottom: '12px',
          fontSize: '16px'
        }}
        onClick={() => navigate('/signup')}
      >
        Create Account
      </button>
      
      <button 
        style={{ 
          backgroundColor: 'var(--primary-light)', 
          color: 'var(--text-primary)', 
          padding: '14px', 
          width: '100%',
          fontSize: '16px'
        }}
        onClick={() => navigate('/signin')}
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default LandingPage;
