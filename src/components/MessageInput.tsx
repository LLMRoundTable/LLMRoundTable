import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            onSend(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="message-input">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="input-field"
            />
            <button type="submit" className="send-button">Send</button>
        </form>
    );
};

export default MessageInput;