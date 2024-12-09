import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useApi from '../../state/hooks/useUser';
import { requestMethod } from '../../services/helpers';

const ExampleComponent = () => {
  const { data, isLoading, error } = useSelector((state) => state.users);
  const makeRequest = useApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await makeRequest({ url: '/benion-users/api/users', method: requestMethod.get, successMessage: 'Users' }); // Default is GET
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
