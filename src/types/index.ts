export type Message = {
    id: string;
    sender: 'llm' | 'user';
    timestamp: Date;
} & ({
    type: 'text';
    content: string;
} | {
    type: 'image';
    content: HTMLImageElement; // The actual image element
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