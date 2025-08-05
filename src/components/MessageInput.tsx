import React, { useState } from 'react';

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim()) {
      onSend(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-input">
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        className="input-field"
        rows={1}
        style={{ resize: 'none' }}
      />
      <button type="submit" className="send-button">Send</button>
    </form>
  );
};

export default MessageInput;