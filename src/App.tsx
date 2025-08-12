import React, { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import ProviderSelector, { providers } from './components/ProviderSelector';
import MessageInput from './components/MessageInput';
import { useChat } from './hooks/useChat';
import ThemeToggleButton from './components/ThemeToggleButton';
import { Provider } from './types';

const App = () => {
  const [selectedProvider, setSelectedProvider] = useState<Provider>('chatgpt');
  const { messages, loading, sendMessage, createImage } = useChat();
  const currentProviderIcon = providers.find(p => p.value === selectedProvider)?.icon;
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app-root">
      <Sidebar onProviderChange={() => {}} />
      <div className="main-area">
        <header style={{position: 'fixed', left: '50px', bottom: '20px', zIndex: 1}}>
          <ProviderSelector selectedProvider={selectedProvider} onProviderChange={setSelectedProvider} />
        </header>
        <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto'}}>
          <ChatWindow messages={messages} loading={loading} AIcon={currentProviderIcon}  />
        </div>
        <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto'}}>
          <MessageInput onSend={(prompt) => sendMessage(prompt, [selectedProvider])} onCreate={(prompt) => createImage(prompt, ['dalle'])} />
        </div>
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default App;