import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setUserData(response.data);
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    // Fetch user data whenever count changes
    fetchUserData();
  }, [count]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrement</button>

      {loading && <p>Loading user data...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h2>User Information:</h2>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
        </div>
      )}
    </div>
  );
};

export default Counter;
