import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import ProviderSelector from './components/ProviderSelector';
import MessageInput from './components/MessageInput';
import { useChat } from './hooks/useChat';

const App = () => {
  const [selectedProvider, setSelectedProvider] = useState('chatgpt');
  const { messages, loading, sendMessage } = useChat([selectedProvider]);

  return (
    <div className="app-root">
      <Sidebar onProviderChange={() => {}} />
      <div className="main-area">
        <header className="chat-header">
          <h1 className="app-title">LLMRoundTable</h1>
          <ProviderSelector selectedProvider={selectedProvider} onProviderChange={setSelectedProvider} />
        </header>
        <div style={{ maxWidth: 700, width: '100%', margin: '0 auto' }}>
          <ChatWindow messages={messages} loading={loading} />
          <MessageInput onSend={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default App;