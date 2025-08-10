declare global {
  interface Window {
    puter: any;
  }
}
export class DeepSeekProvider {
  async sendMessage(prompt: string): Promise<string> {
    if (!window.puter) {
      throw new Error('Puter.js script not loaded.');
    }
    const messages = [{ content: prompt, role: 'user' }];
    // Use DeepSeek model via Puter API (if available)
    const fullResponse = await window.puter.ai.chat(messages, true, { model: 'deepseek-reasoner' });
    if (fullResponse && fullResponse.message && typeof fullResponse.message.content === 'string') {
      return fullResponse.message.content;
    }
    if (fullResponse.error) return `Error: ${fullResponse.error}`;
    return 'Unknown response from DeepSeek';
  }

  async generateImage(prompt: string): Promise<string> {
    if (!window.puter) {
      throw new Error('Puter.js script not loaded.');
    }
    const messages = [{ content: prompt, role: 'user' }];
    try {
        const imageElement = await window.puter.ai.txt2img(messages, true, { model: 'deepseek-image' });
        return imageElement;
    } catch (error) {
        throw new Error(`Error generating image: ${error}`);
    return 'Unknown response from Puter image generation';
    }
  }
}