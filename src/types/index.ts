export type Provider = 'chatgpt' | 'llama' | 'gemini' | 'deepseek' | 'claude' | 'dalle';

export type Message = {
    id: string;
    sender: 'llm' | 'user';
    timestamp: Date;
    icon?: string;
} & ({
    type: 'text';
    content: string;
} | {
    type: 'image';
    content: string; // The base 64 string of the image
});

export interface ChatProvider {
    name: string;
    sendMessage: (prompt: string) => Promise<string>;
}

export interface ImageProvider {
    name: string;
    generateImage: (prompt: string) => Promise<HTMLImageElement>;
}

export interface ChatState {
    messages: Message[];
    selectedProviders: (ChatProvider | ImageProvider)[];
}