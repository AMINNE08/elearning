import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); 

function App() {
  const [message, setMessage] = useState(''); // For the input message
  const [receivedMessages, setReceivedMessages] = useState([]); // To store all received messages

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to the server with ID:', socket.id);
    });

    // Listen for messages from the server
    socket.on('message', (data) => {
      console.log('Received message from server:', data);
      setReceivedMessages(prevMessages => [...prevMessages, data]); // Add new message to array
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) { // Check if there's a non-empty message
      socket.emit('message', message); // Send message to the server
      setMessage(''); // Clear the input field after sending
    }
  };

  return (
    <div>
      <h1>Socket.IO Chat</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send Message</button>

      <div>
        <h3>Messages</h3>
        <ul>
          {receivedMessages.map((msg, index) => (
            <li key={index}>{msg}</li> // Display each received message
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
