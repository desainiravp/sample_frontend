import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    async function fetchMessage() {
      try {
        const response = await fetch('https://p9gv8wxkve.execute-api.us-east-1.amazonaws.com/prod/api');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Parse the body field from the API Gateway Lambda proxy response
        const parsedBody = JSON.parse(data.body);

        setMessage(parsedBody.message);
      } catch (error) {
        console.error('Fetch error:', error);
        setMessage('Failed to fetch message from Lambda');
      }
    }

    fetchMessage();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Response from Lambda:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

