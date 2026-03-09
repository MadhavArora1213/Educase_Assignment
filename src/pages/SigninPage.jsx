import React from 'react';
import { useNavigate } from 'react-router-dom';

const SigninPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="screen-padding">
      <h1 style={{ marginTop: '24px' }}>Signin to your <br /> PopX account</h1>
      <p className="description" style={{ fontSize: '18px', color: '#1D222699', marginTop: '14px' }}>
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit.
      </p>

      <form onSubmit={handleLogin} style={{ marginTop: '30px' }}>
        <div className="floating-label-input">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" required />
        </div>
        
        <div className="floating-label-input">
          <label>Password</label>
          <input type="password" placeholder="Enter password" required />
        </div>

        <button 
          type="submit"
          style={{ 
            backgroundColor: '#CBCBCB', // Initially gray as per design or state
            color: 'var(--white)', 
            padding: '14px', 
            width: '100%',
            marginTop: '8px',
            fontSize: '16px'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--primary)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#CBCBCB'}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SigninPage;
