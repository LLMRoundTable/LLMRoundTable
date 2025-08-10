export class ChatGPTProviderClass {
  async sendMessage(prompt: string): Promise<string> {
    if (!window.puter) {
      throw new Error('Puter.js script not loaded.');
    }
    const messages = [{ content: prompt, role: 'user' }];
    const fullResponse = await window.puter.ai.chat(messages, true, { model: 'gpt-4.1-nano' });
    if (fullResponse && fullResponse.message && fullResponse.message.content) {
      return fullResponse.message.content;
    }
    if (fullResponse.error) return `Error: ${fullResponse.error}`;
    return 'Unknown response from Puter';
  }

  async generateImage(prompt: string): Promise<string> {
    if (!window.puter) {
      throw new Error('Puter.js script not loaded.');
    }
    const messages = [{ content: prompt, role: 'user' }];
    const fullResponse = await window.puter.ai.txt2img(messages, true, { model: 'gpt-4.1-nano' });
    if (fullResponse && fullResponse.message && fullResponse.message.content) {
      return fullResponse.message.content;
    }
    if (fullResponse.error) return `Error: ${fullResponse.error}`;
    return 'Unknown response from Puter';
  }
}