import React, { createContext, useContext, useState } from 'react';

const ChatGPTContext = createContext();

export const ChatGPTProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);

    const sendMessage = async (prompt) => {
        // Call the ChatGPT API here
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer YOUR_API_KEY`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }]
            })
        });

        const data = await response.json();
        const newMessage = {
            role: 'assistant',
            content: data.choices[0].message.content
        };

        setMessages((prevMessages) => [...prevMessages, { role: 'user', content: prompt }, newMessage]);
    };

    return (
        <ChatGPTContext.Provider value={{ messages, sendMessage }}>
            {children}
        </ChatGPTContext.Provider>
    );
};

export const useChatGPT = () => {
    return useContext(ChatGPTContext);
};