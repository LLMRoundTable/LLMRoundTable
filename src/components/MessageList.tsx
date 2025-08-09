import React from 'react';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
  loading?: boolean;
}

const getAvatar = (sender: string) => {
  if (sender === 'user') return <div className="avatar">🧑</div>;
  return <div className="avatar">🤖</div>;
};

const MessageList: React.FC<MessageListProps> = ({ messages, loading }) => {
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
      {loading && (
        <div className="message ai">
          {getAvatar('llm')}
          <div className="bubble">
            <div className="message-content">Thinking...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageList;