import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useChat } from '../hooks/useChat';

interface ChatWindowProps {
  selectedProviders: any[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ selectedProviders }) => {
    const { messages, sendMessage } = useChat();

    return (
        <div className="chat-window">
            <MessageList messages={messages} />
            <MessageInput onSend={sendMessage} />
        </div>
    );
};

export default ChatWindow;