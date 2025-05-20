import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    async function getMessage() {
      try {
        const response = await fetch('https://p9gv8wxkve.execute-api.us-east-1.amazonaws.com/prod/api');
        const data = await response.json();

        // Parse the 'body' string as JSON
        const parsedBody = JSON.parse(data.body);

        setMessage(parsedBody.message); // This should be "Hello from Lambda!"
      } catch (error) {
        console.error('Error fetching message:', error);
        setMessage('Error fetching message');
      }
    }

    getMessage();
  }, []);

  return (
    <div>
      <h1>Response from Lambda:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

