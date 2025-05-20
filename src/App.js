useEffect(() => {
  const fetchMessage = async () => {
    try {
      const response = await fetch('https://p9gv8wxkve.execute-api.us-east-1.amazonaws.com/prod/api');
      const data = await response.json();

      // Parse the JSON string in the 'body' property
      const parsedBody = JSON.parse(data.body);

      setMessage(parsedBody.message);  // "Hello from Lambda!"
    } catch (error) {
      console.error('Error fetching message:', error);
      setMessage('Error fetching message');
    }
  };

  fetchMessage();
}, []);
