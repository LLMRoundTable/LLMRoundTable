import React from 'react';
import MessageList from './MessageList';

interface ChatWindowProps {
  messages: any[];
  loading: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, loading }) => {
  return (
    <div className="chat-window">
      <MessageList messages={messages} loading={loading} />
    </div>
  );
};

export default ChatWindow;