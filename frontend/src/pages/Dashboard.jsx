import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/auth/me', {
          headers: { 'x-auth-token': token }
        });
        setUser(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      {/* Dashboard content */}
    </div>
  );
};

export default Dashboard;
