import React from 'react';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender}`}>
          <span className="message-sender">{message.sender}:</span>
          <span className="message-content">{message.content}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;