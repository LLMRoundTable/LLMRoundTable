import React from 'react';

interface SidebarProps {
  onProviderChange: (providers: any[]) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onProviderChange }) => {
    return (
        <div className="sidebar">
            <h2>LLM Providers</h2>
            <ul>
                <li>ChatGPT</li>
                <li>GitHub Copilot</li>
                <li>Gemini</li>
                <li>DeepSeek</li>
            </ul>
            <button onClick={() => onProviderChange([])}>Switch Provider</button>
        </div>
    );
};

export default Sidebar;