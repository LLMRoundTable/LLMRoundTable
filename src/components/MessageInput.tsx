import React, { useState } from 'react';
import styles from '../styles/MessageInput.module.css';

interface MessageInputProps {
  onSend: (message: string) => void;
  onCreate: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend, onCreate }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (inputValue.trim()) {
        onSend(inputValue);
        setInputValue('');
      }
    }
  };

  const sendChat = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue('');
    }
  };

  const generateImage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (inputValue.trim()) {
      onCreate(inputValue);
      setInputValue('');
    }
  };

  

  return (
    <form className={styles['message-input']} 
    style = {{maxWidth: '1500px', width: '100%'}}>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        className={styles['input-field']}
        rows={1}
      />
      <button onClick={sendChat} type="button" className={styles['send-button']}>Send</button>
      <button onClick={generateImage} type="button" className={styles['send-button']}>Create Image</button>
    </form>
  );
};

export default MessageInput;