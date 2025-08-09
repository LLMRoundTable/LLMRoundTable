import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useChat } from '../hooks/useChat';

interface ChatWindowProps {
  selectedProviders: string[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ selectedProviders }) => {
  const { messages, sendMessage, loading } = useChat(selectedProviders);

  return (
    <div className="chat-window">
      <MessageList messages={messages} loading={loading} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
};

export default ChatWindow;