import React, { useState } from 'react';
import MessageList from '../components/chat/MessageList';
import '../css/chat.css';

const ChatContainer = () => {
  const DUMMY_DATA = [
    {
      senderId: 'perborgen',
      text: "who'll win?",
    },
    {
      senderId: 'janedoe',
      text: "who'll win?",
    },
  ];

  const [messages, setMessages] = useState(DUMMY_DATA);

  return (
    <div>
      {/* <Title /> */}
      <MessageList messages={messages} />
      {/* <SendMessageForm /> */}
    </div>
  );
};
export default ChatContainer;
