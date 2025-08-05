import React from 'react';

const providers = [
  { name: 'ChatGPT', value: 'chatgpt', icon: '🤖' },
  { name: 'GitHub Copilot', value: 'copilot', icon: '🧑‍💻' },
  { name: 'Gemini', value: 'gemini', icon: '🔮' },
  { name: 'DeepSeek', value: 'deepseek', icon: '🦙' },
];

interface ProviderSelectorProps {
  selectedProvider: string;
  onProviderChange: (provider: string) => void;
}

const ProviderSelector: React.FC<ProviderSelectorProps> = ({ selectedProvider, onProviderChange }) => {
  return (
    <div className="provider-selector">
      <select
        value={selectedProvider}
        onChange={(e) => onProviderChange(e.target.value)}
      >
        {providers.map((provider) => (
          <option key={provider.value} value={provider.value}>
            {provider.icon} {provider.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProviderSelector;