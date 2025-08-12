import React from 'react';
import styles from '../styles/MessageList.module.css';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
  loading?: boolean;
  className?: string;
  Icon?: string;
}

const MessageList: React.FC<MessageListProps> = ({ messages, loading, className, Icon }) => {
  console.log('Icon prop:', Icon);
  return (
    <div className={className || styles['message-list']}>
      {messages.map((message, index) => {
        console.log(message);
        return (
        <div key={index} className={`${styles.message} ${message.sender === 'user' ? styles.user : styles.ai}`}>
          <div className={styles.avatar}>{message.sender === 'user' ? '🧑' : (message.icon || Icon)}</div>
          {
            message.type === 'image' 
            ? <img src={message.content} alt="" className={styles.bubble} />
            : <div className={styles.bubble}>{message.content}</div>
          }
          
          <span className={styles.timestamp}>{message.timestamp?.toLocaleTimeString?.() || ''}</span>
        </div>
      )})}
      {loading && (
        <div className={styles.message}>
          <div className={styles.avatar}>{Icon}</div>
          <div className={styles.bubble}>Loading...</div>
        </div>
      )}
    </div>
  );
};

export default MessageList;