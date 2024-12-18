import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useUser from '../../state/hooks/useUsers';

const ExampleComponent = () => {
  const { data, isLoading, error } = useSelector((state) => state.users);
  const makeUsersRequest = useUser();

  useEffect(() => {
    makeUsersRequest.getUsers()
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='mb-5'>
      <h1>Data:</h1>
      {data && data.map((user) => <div className='mb-3 text-danger' key={user._id}>{user.firstname} {user.lastname}</div>)}
    </div>
  );
};

export default ExampleComponent;
