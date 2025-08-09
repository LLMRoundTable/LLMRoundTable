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
          <ProviderSelector selectedProvider={selectedProvider} onProviderChange={setSelectedProvider} />
        </header>
        <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto'}}>
          <ChatWindow messages={messages} loading={loading} />
        </div>
        <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto'}}>
          <MessageInput onSend={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default App;