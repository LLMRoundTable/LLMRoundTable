import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import ProviderSelector from './components/ProviderSelector';
import { Provider } from './types';

const App = () => {
  const [selectedProvider, setSelectedProvider] = useState('chatgpt');

  return (
    <div className="app-root">
      <Sidebar onProviderChange={() => {}} />
      <div className="main-area">
        <header className="chat-header">
          <h1 className="app-title">LLMRoundTable</h1>
          <ProviderSelector selectedProvider={selectedProvider} onProviderChange={setSelectedProvider} />
        </header>
        <ChatWindow selectedProviders={[selectedProvider]} />
      </div>
    </div>
  );
};

export default App;