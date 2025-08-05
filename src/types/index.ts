export interface Message {
    id: string;
    content: string;
    sender: 'user' | 'llm';
    timestamp: Date;
}

export interface Provider {
    name: string;
    sendMessage: (message: string) => Promise<Message>;
}

export interface ChatState {
    messages: Message[];
    selectedProviders: Provider[];
}