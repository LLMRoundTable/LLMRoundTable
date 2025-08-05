import React, { createContext, useContext, useState, ReactNode } from 'react';

// Class-based provider for direct instantiation
export class ChatGPTProviderClass {
  async sendMessage(prompt: string): Promise<string> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_API_KEY`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await response.json();
    return data.choices[0].message.content;
  }
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatGPTContextType {
  messages: Message[];
  sendMessage: (prompt: string) => Promise<void>;
}

const ChatGPTContext = createContext<ChatGPTContextType | undefined>(undefined);

export const ChatGPTProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (prompt: string) => {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_API_KEY`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await response.json();
    const newMessage: Message = {
      role: 'assistant',
      content: data.choices[0].message.content
    };
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', content: prompt },
      newMessage
    ]);
  };

  return (
    <ChatGPTContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatGPTContext.Provider>
  );
};

export const useChatGPT = () => {
  const context = useContext(ChatGPTContext);
  if (!context) throw new Error('useChatGPT must be used within a ChatGPTProvider');
  return context;
};
