import React from 'react';
import styles from '../styles/ProviderSelector.module.css';

export const providers = [
  { name: 'ChatGPT', value: 'chatgpt', icon: '🤖' },
  { name: 'Llama', value: 'llama', icon: '‍‍🦙' },
  { name: 'Gemini', value: 'gemini', icon: '🔮' },
  { name: 'DeepSeek', value: 'deepseek', icon: '🐋' },
  { name: 'Claude', value: 'claude', icon: '🦾' },
];

import { Provider } from '../types';

interface ProviderSelectorProps {
  selectedProvider: Provider;
  onProviderChange: (provider: Provider) => void;
}

const ProviderSelector: React.FC<ProviderSelectorProps> = ({ selectedProvider, onProviderChange }) => {
  return (
    <div className={styles['provider-selector']}>
      <select
        value={selectedProvider}
        onChange={(e) => onProviderChange(e.target.value as Provider)}
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