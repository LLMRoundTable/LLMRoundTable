// Puter-based provider for direct instantiation
export class ChatGPTProviderClass {
  async sendMessage(prompt: string): Promise<string> {
    if (!window.puter) {
      throw new Error('Puter.js script not loaded.');
    }
    const puter = new window.puter({ /* add apiKey or config if needed */ });
    const response = await puter.chat({ prompt });
    return response.text || '';
  }
}