import { useState, useEffect } from 'react';
import { ChatGPTProviderClass } from '../providers/ChatGPTProvider';
import { CopilotProviderClass } from '../providers/CopilotProvider.tsx';
import { GeminiProvider } from '../providers/GeminiProvider';
import { DeepSeekProvider } from '../providers/DeepSeekProvider';
import { Message } from '../types';

const providers: { [key: string]: any } = {
  chatgpt: new ChatGPTProviderClass(),
  copilot: new CopilotProviderClass(),
  gemini: new GeminiProvider('YOUR_API_KEY'),
  deepseek: new DeepSeekProvider('YOUR_API_KEY'),
};

export const useChat = (selectedProviders: string[] = []) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (prompt: string) => {
    setLoading(true);
    // Add user's message first
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: `user-${Date.now()}`,
        content: prompt,
        sender: 'user',
        timestamp: new Date(),
      },
    ]);

    const responses = await Promise.all(
      selectedProviders.map(async (providerName) => {
        const provider = providers[providerName];
        if (provider?.sendPrompt) {
          return await provider.sendPrompt(prompt);
        } else if (provider?.sendMessage) {
          return await provider.sendMessage(prompt);
        } else {
          throw new Error(`Provider ${providerName} does not support sending messages.`);
        }
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

  return {
    messages,
    loading,
    sendMessage,
  };
};