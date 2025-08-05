import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import { Provider } from './types';

const App = () => {
  const [selectedProviders, setSelectedProviders] = useState<Provider[]>([]);

  const handleProviderChange = (providers: Provider[]) => {
    setSelectedProviders(providers);
  };

  return (
    <div className="app-container">
      <Sidebar onProviderChange={handleProviderChange} />
      <ChatWindow selectedProviders={selectedProviders} />
    </div>
  );
};

export default App;