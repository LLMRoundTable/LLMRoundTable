import React, { createContext, useContext, useState } from 'react';

const CopilotContext = createContext(null);

export const CopilotProvider = ({ children }) => {
    const [responses, setResponses] = useState([]);

    const sendPrompt = async (prompt) => {
        // Logic to interact with GitHub Copilot API
        // This is a placeholder for the actual API call
        const response = await fetch('https://api.github.com/copilot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        const data = await response.json();
        setResponses((prevResponses) => [...prevResponses, data]);
    };

    return (
        <CopilotContext.Provider value={{ responses, sendPrompt }}>
            {children}
        </CopilotContext.Provider>
    );
};

export const useCopilot = () => {
    return useContext(CopilotContext);
};