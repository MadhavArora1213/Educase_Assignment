import React from 'react';

const ProfilePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ 
        padding: '24px', 
        backgroundColor: 'var(--white)', 
        borderBottom: '1px solid #E5E5E5',
        fontSize: '18px',
        fontWeight: '400',
        color: 'var(--text-primary)'
      }}>
        Account Settings
      </div>

      <div style={{ flex: 1, backgroundColor: '#F7F8F9', position: 'relative' }}>
        <div style={{ padding: '24px 24px 0 24px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150" 
                alt="Profile" 
                style={{ width: '76px', height: '76px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                right: '0', 
                backgroundColor: 'var(--primary)', 
                borderRadius: '50%', 
                width: '24px', 
                height: '24px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '2px solid var(--white)'
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </div>
            </div>
            
            <div style={{ paddingTop: '8px' }}>
              <p style={{ fontSize: '15px', fontWeight: '500', color: 'var(--text-primary)' }}>Marry Doe</p>
              <p style={{ fontSize: '14px', color: 'var(--text-primary)' }}>Marry@Gmail.Com</p>
            </div>
          </div>

          <p style={{ 
            fontSize: '14px', 
            color: 'var(--text-primary)', 
            lineHeight: '1.6', 
            marginTop: '24px',
            paddingBottom: '24px',
            borderBottom: '1px dashed #CBCBCB'
          }}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* Gray spacer area as seen in design */}
        <div style={{ height: 'calc(100% - 250px)', backgroundColor: '#F7F8F9', borderTop: '1px dashed #CBCBCB' }}></div>
      </div>
    </div>
  );
};

export default ProfilePage;
