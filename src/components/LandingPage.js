import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Welcome to webb</h1>
      <button onClick={() => navigate('/signup')}>Sign Up</button>
      <button onClick={() => navigate('/login')}>Log In</button>
    </div>
  );
}

export default LandingPage;
