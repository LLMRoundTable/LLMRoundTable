import { useState, useEffect } from 'react';
import { ChatGPTProviderClass } from '../providers/ChatGPTProvider.tsx';
import { CopilotProviderClass } from '../providers/CopilotProvider';
import { GeminiProvider } from '../providers/GeminiProvider';
import { DeepSeekProvider } from '../providers/DeepSeekProvider';
import { Message } from '../types';

const providers: { [key: string]: any } = {
  ChatGPT: new ChatGPTProviderClass(),
    Copilot: new CopilotProviderClass(),
  Gemini: new GeminiProvider('YOUR_API_KEY'),
  DeepSeek: new DeepSeekProvider('YOUR_API_KEY'),
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

    const newMessages: Message[] = responses.map((response, index) => ({
      id: `${selectedProviders[index]}-${Date.now()}`,
      content: response,
      sender: "llm",
      timestamp: new Date(),
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