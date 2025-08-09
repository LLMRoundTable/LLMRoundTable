declare global {
  interface Window {
    puter: any;
  }
}
export class LlamaProvider {
  async sendMessage(prompt: string): Promise<string> {
    if (!window.puter) {
      throw new Error('Puter.js script not loaded.');
    }
    const messages = [{ content: prompt, role: 'user' }];
    // Use DeepSeek model via Puter API (if available)
    const fullResponse = await window.puter.ai.chat(messages, { model: 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo' });
    if (fullResponse && fullResponse.message && typeof fullResponse.message.content === 'string') {
      return fullResponse.message.content;
    }
    if (fullResponse.error) return `Error: ${fullResponse.error}`;
    return 'Unknown response from DeepSeek';
  }
}