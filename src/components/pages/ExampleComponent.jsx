import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useApi from '../../state/hooks/useApi';

const ExampleComponent = () => {
  const { data, isLoading, error } = useSelector((state) => state.api);
  const makeRequest = useApi();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await makeRequest({ url: '/benion-users/api/users', method: 'GET' }); // Default is GET
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [makeRequest]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='mb-5'>
      <h1>Data:</h1>
      <h1 className='text-danger'>Hello:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <h1>Data:</h1>
      <h1 className='text-danger'>Hello:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <h1>Data:</h1>
      <h1 className='text-danger'>Hello:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>


      <h1>Data:</h1>
      <h1 className='text-danger'>Hello:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <h1>Data:</h1>
      <h1 className='text-danger'>Hello:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>


      <h1>Data:</h1>
      <h1 className='text-danger'>Hello:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>


      <h1>Data:</h1>
      <h1 className='text-danger'>Hello:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ExampleComponent;
