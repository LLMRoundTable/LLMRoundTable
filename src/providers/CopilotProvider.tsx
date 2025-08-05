// Class-based provider for direct instantiation
export class CopilotProviderClass {
  async sendPrompt(prompt: string): Promise<string> {
    // Logic to interact with GitHub Copilot API (placeholder)
    const response = await fetch('https://api.github.com/copilot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    return data.content;
  }
}
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CopilotResponse {
  // Define the structure of Copilot response here
  content: string;
}

interface CopilotContextType {
  responses: CopilotResponse[];
  sendPrompt: (prompt: string) => Promise<void>;
}

const CopilotContext = createContext<CopilotContextType | undefined>(undefined);

export const CopilotProvider = ({ children }: { children: ReactNode }) => {
  const [responses, setResponses] = useState<CopilotResponse[]>([]);

  const sendPrompt = async (prompt: string) => {
    // Logic to interact with GitHub Copilot API (placeholder)
    const response = await fetch('https://api.github.com/copilot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    setResponses((prevResponses) => [
      ...prevResponses,
      { content: data.content }
    ]);
  };

  return (
    <CopilotContext.Provider value={{ responses, sendPrompt }}>
      {children}
    </CopilotContext.Provider>
  );
};

export const useCopilot = () => {
  const context = useContext(CopilotContext);
  if (!context) throw new Error('useCopilot must be used within a CopilotProvider');
  return context;
};
