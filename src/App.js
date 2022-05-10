import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  let [message, setMessage] = useState('');

  useEffect(() => {
    fetchMessage();
  }, []);

  async function fetchMessage() {
    try {
      const response = await fetch(`http://localhost:3001/api/heroku/test`);
      const message = await response.json();
      setMessage(message.message);
      return message;
    } catch (error) {
      console.error(error);
    }
  }

  return <div>message: {message}</div>;
}

export default App;
