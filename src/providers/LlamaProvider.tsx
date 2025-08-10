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
    // Use Llama model via Puter API (if available)
    const fullResponse = await window.puter.ai.chat(messages, true, { model: 'meta-llama/llama-3-70b-instruct' });
    if (fullResponse && fullResponse.message && typeof fullResponse.message.content === 'string') {
      return fullResponse.message.content;
    }
    if (fullResponse.error) return `Error: ${fullResponse.error}`;
    return 'Unknown response from Llama';
  }

  async generateImage(prompt: string): Promise<string> {
    if (!window.puter) {
      throw new Error('Puter.js script not loaded.');
    }
    const messages = [{ content: prompt, role: 'user' }];
    // Note: 'meta-llama' models are for text. You must use a dedicated image generation model.
    // Using a placeholder like 'stable-diffusion-xl' as an example.
    const fullResponse = await window.puter.ai.txt2img(messages, true, { model: 'stable-diffusion-xl' });
    if (fullResponse && fullResponse.message && typeof fullResponse.message.content === 'string') {
      return fullResponse.message.content;
    }
    if (fullResponse.error) return `Error: ${fullResponse.error}`;
    return 'Unknown response from Llama';
  }
}