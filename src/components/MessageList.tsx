import React from 'react';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
}

const getAvatar = (sender: string) => {
  if (sender === 'user') return <div className="avatar">🧑</div>;
  return <div className="avatar">🤖</div>;
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender}`}>
          {getAvatar(message.sender)}
          <div className="bubble">
            <div className="message-content">{message.content}</div>
            {message.timestamp && (
              <div className="timestamp">{new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;