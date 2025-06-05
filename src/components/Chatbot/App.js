import React, { useState } from 'react';
import Chatbot from './Chatbot';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => setIsChatOpen(prev => !prev);

  return (
    <div>
      <button onClick={toggleChat}>💬 Chat with us</button>
      {isChatOpen && <Chatbot onClose={toggleChat} />}
    </div>
  );
};

export default App;