import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>LLM Providers</h2>
            <ul>
                <li>ChatGPT</li>
                <li>GitHub Copilot</li>
                <li>Gemini</li>
                <li>DeepSeek</li>
            </ul>
            <button>Switch Provider</button>
        </div>
    );
};

export default Sidebar;