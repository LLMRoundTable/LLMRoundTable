import React from 'react';
import MessageList from './MessageList';
import styles from '../styles/ChatWindow.module.css';

interface ChatWindowProps {
  messages: any[];
  loading: boolean;
  AIcon?: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages, loading, AIcon }) => {
  return (
    <div className={styles['chat-window']} style = {{background: '#ffffffff', maxWidth: '1500px'}}> 
      <MessageList messages={messages} loading={loading} Icon={AIcon} className={styles['message-list']} />
    </div>
  );
};

export default ChatWindow;