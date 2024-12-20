import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useUser from '../../state/hooks/useUsers';
import useAuth from '../../state/hooks/useAuth';

const ExampleComponent = () => {
  const { data, isLoading, error } = useSelector((state) => state.users);
  const makeUsersRequest = useUser();
  const { login, signup, logout } = useAuth();

  const handleLogin = async () => {
    try {
      await login({ username: 'testUser', password: 'password123' });
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSignup = async () => {
    try {
      await signup({ username: 'newUser', email: 'test@example.com', password: 'password123' });
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    makeUsersRequest.getUsers()
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='mb-5'>
      <h1>Data:</h1>
      {data && data.map((user) => <div className='mb-3 text-danger' key={user._id}>{user.firstname} {user.lastname}</div>)}
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Signup</button>
        <button onClick={handleLogout}>Logout</button>
    </div>
    </div>
  );
};

export default ExampleComponent;
