import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading from Lambda...');

  useEffect(() => {
    fetch('https://p9gv8wxkve.execute-api.us-east-1.amazonaws.com/prod/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error calling Lambda: ' + err));
  }, []);

  return (
    <div className="App">
      <h1>Hello from AWS Amplify!</h1>
      <p>This is a sample React frontend.</p>
      <h3>Lambda Response:</h3>
      <p>{message}</p>
    </div>
  );
}

export default App;
