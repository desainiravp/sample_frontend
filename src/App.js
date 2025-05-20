import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('https://p9gv8wxkve.execute-api.us-east-1.amazonaws.com/prod/api');
        const result = await response.json();
        const parsed = typeof result === 'string' ? JSON.parse(result) : result;
        setMessage(parsed.message);
      } catch (error) {
        console.error('Error fetching message:', error);
        setMessage('Error fetching message');
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="App">
      <h1>Hello from AWS Amplify!</h1>
      <p>This is a sample React frontend.</p>
      <h2>Response from Lambda:</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;
