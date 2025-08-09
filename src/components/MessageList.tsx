import React from 'react';
import styles from '../styles/MessageList.module.css';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
  loading?: boolean;
  className?: string;
}

const MessageList: React.FC<MessageListProps> = ({ messages, loading, className }) => {
  return (
    <div className={className || styles['message-list']}>
      {messages.map((message, index) => (
        <div key={index} className={`${styles.message} ${message.sender === 'user' ? styles.user : styles.ai}`}>
          <div className={styles.avatar}>{message.sender === 'user' ? '🧑' : '🤖'}</div>
          <div className={styles.bubble}>{message.content}</div>
          <span className={styles.timestamp}>{message.timestamp?.toLocaleTimeString?.() || ''}</span>
        </div>
      ))}
      {loading && (
        <div className={styles.message}>
          <div className={styles.avatar}>🤖</div>
          <div className={styles.bubble}>Loading...</div>
        </div>
      )}
    </div>
  );
};

export default MessageList;