import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from '../../services/auth';

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticate = async () => {
      const user = await checkAuth();
      if (user) {
        setIsAuthenticated(true);
      } else {
        navigate('/');
      }
    };

    authenticate();
  }, [navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="home-container">
      <h1>Welcome to webb</h1>
      <button onClick={() => navigate('/profile')}>Go to Profile</button>
      <button onClick={() => navigate('/chat')}>Go to Chat</button>
      {/* Add more navigation buttons as needed */}
    </div>
  );
}

export default Home;
