import { useState } from 'react';
import { ChatGPTProviderClass } from '../providers/ChatGPTProvider';
import { LlamaProvider } from '../providers/LlamaProvider.tsx';
import { GeminiProvider } from '../providers/GeminiProvider';
import { DeepSeekProvider } from '../providers/DeepSeekProvider';
import { ClaudeProviderClass } from '../providers/ClaudeProvider';
import { Message } from '../types';

const providers = {
  chatgpt: new ChatGPTProviderClass(),
  llama: new LlamaProvider(),
  gemini: new GeminiProvider(),
  deepseek: new DeepSeekProvider(),
  claude: new ClaudeProviderClass(),
  dalle: new ChatGPTProviderClass(),
};

type ProviderName = keyof typeof providers;

export const useChat = (selectedProviders: ProviderName[] = []) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (prompt: string, type: 'chat' | 'image' = 'chat') => {
    setLoading(true);

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: `user-${Date.now()}`,
        content: prompt,
        sender: 'user',
        timestamp: new Date(),
        type: 'text',
      },
    ]);

    try {
      const responses = await Promise.all(
        selectedProviders.map(async (providerName) => {
          const provider = providers[providerName];
          if (type === 'chat' && 'sendMessage' in provider) {
            return await provider.sendMessage(prompt);
          } else if (type === 'image' && 'generateImage' in provider) {
            return await provider.generateImage(prompt);
          } else {
            throw new Error(`Provider ${providerName} does not support this action.`);
          }
        })
      );

      const newMessages: Message[] = responses.map((response, index) => {
        const providerName = selectedProviders[index];
        if (type === 'image') {
          return {
            id: `${providerName}-${Date.now()}`,
            content: response,
            sender: 'llm',
            timestamp: new Date(),
            type: 'image',
          };
        } else {
          return {
            id: `${providerName}-${Date.now()}`,
            content: response,
            sender: 'llm',
            timestamp: new Date(),
            type: 'text',
          };
        }
      });

      setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    } catch (error: any) {
      console.error(error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: `error-${Date.now()}`,
          content: `Error: ${error.message}`,
          sender: 'llm',
          timestamp: new Date(),
          type: 'text',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = (prompt: string) => handleSend(prompt, 'chat');
  const createImage = (prompt: string) => handleSend(prompt, 'image');

  return {
    messages,
    loading,
    sendMessage,
    createImage,
  };
};