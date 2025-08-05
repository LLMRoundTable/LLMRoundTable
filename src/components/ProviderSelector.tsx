import React from 'react';

const providers = [
    { name: 'ChatGPT', value: 'chatgpt' },
    { name: 'GitHub Copilot', value: 'copilot' },
    { name: 'Gemini', value: 'gemini' },
    { name: 'DeepSeek', value: 'deepseek' },
];

const ProviderSelector = ({ selectedProvider, onProviderChange }) => {
    return (
        <div className="provider-selector">
            <h3>Select LLM Provider</h3>
            <select
                value={selectedProvider}
                onChange={(e) => onProviderChange(e.target.value)}
            >
                {providers.map((provider) => (
                    <option key={provider.value} value={provider.value}>
                        {provider.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProviderSelector;