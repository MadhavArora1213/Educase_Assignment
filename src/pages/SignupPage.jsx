import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="screen-padding" style={{ paddingBottom: '100px' }}>
      <h1 style={{ marginTop: '24px' }}>Create your <br /> PopX account</h1>

      <form onSubmit={handleSignup} style={{ marginTop: '40px' }}>
        <div className="floating-label-input">
          <label>Full Name<span style={{ color: 'red' }}>*</span></label>
          <input type="text" placeholder="Marry Doe" required />
        </div>
        
        <div className="floating-label-input">
          <label>Phone number<span style={{ color: 'red' }}>*</span></label>
          <input type="text" placeholder="Marry Doe" required />
        </div>

        <div className="floating-label-input">
          <label>Email address<span style={{ color: 'red' }}>*</span></label>
          <input type="email" placeholder="Marry Doe" required />
        </div>

        <div className="floating-label-input">
          <label>Password<span style={{ color: 'red' }}>*</span></label>
          <input type="password" placeholder="Marry Doe" required />
        </div>

        <div className="floating-label-input">
          <label>Company name</label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div style={{ marginTop: '10px' }}>
          <p style={{ fontSize: '16px', marginBottom: '12px' }}>Are you an Agency?<span style={{ color: 'red' }}>*</span></p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input type="radio" name="agency" value="yes" required style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }} />
              Yes
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input type="radio" name="agency" value="no" style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }} />
              No
            </label>
          </div>
        </div>

        <button 
          type="submit"
          style={{ 
            backgroundColor: 'var(--primary)', 
            color: 'var(--white)', 
            padding: '14px', 
            width: 'calc(100% - 48px)',
            fontSize: '16px',
            position: 'absolute',
            bottom: '24px',
            left: '24px'
          }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
