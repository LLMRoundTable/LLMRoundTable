import { useState, useEffect } from 'react';
import { ChatGPTProvider } from '../providers/ChatGPTProvider';
import { CopilotProvider } from '../providers/CopilotProvider';
import { GeminiProvider } from '../providers/GeminiProvider';
import { DeepSeekProvider } from '../providers/DeepSeekProvider';
import { Message } from '../types';

const providers = {
  ChatGPT: new ChatGPTProvider(),
  Copilot: new CopilotProvider(),
  Gemini: new GeminiProvider(),
  DeepSeek: new DeepSeekProvider(),
};

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);

  const sendMessage = async (prompt: string) => {
    setLoading(true);
    const responses = await Promise.all(
      selectedProviders.map(async (providerName) => {
        const provider = providers[providerName];
        return await provider.sendMessage(prompt);
      })
    );

    const newMessages = responses.map((response, index) => ({
      text: response,
      provider: selectedProviders[index],
      timestamp: new Date().toISOString(),
    }));

    setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    setLoading(false);
  };

  const selectProvider = (providerName: string) => {
    setSelectedProviders((prev) => {
      if (prev.includes(providerName)) {
        return prev.filter((name) => name !== providerName);
      }
      return [...prev, providerName];
    });
  };

  return {
    messages,
    loading,
    sendMessage,
    selectProvider,
    selectedProviders,
  };
};