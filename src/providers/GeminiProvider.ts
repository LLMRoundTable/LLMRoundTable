declare global {
  interface Window {
    puter: any;
  }
}
export class GeminiProvider {
  async sendMessage(prompt: string): Promise<string> {
    if (!window.puter) {
      throw new Error('Puter.js script not loaded.');
    }
    const messages = [{ content: prompt, role: 'user' }];
    // Use Gemini model via Puter API (if available)
    const fullResponse = await window.puter.ai.chat(messages, true, { model: 'openrouter:google/gemini-2.5-pro' });
    if (fullResponse && fullResponse.message && typeof fullResponse.message.content === 'string') {
      return fullResponse.message.content;
    }
    if (fullResponse.error) return `Error: ${fullResponse.error}`;
    return 'Unknown response from Gemini';
  }

  async generateImage(prompt: string): Promise<string> {
    if (!window.puter) {
      throw new Error('Puter.js script not loaded.');
    }
    const messages = [{ content: prompt, role: 'user' }];
    // Note: 'gemini-pro' is a text model. You should use an image generation model like Google's 'imagen-2' if available via your API.
    const fullResponse = await window.puter.ai.txt2img(messages, true, { model: 'google/imagen-2' });
    if (fullResponse && fullResponse.message && typeof fullResponse.message.content === 'string') {
      return fullResponse.message.content;
    }
    if (fullResponse.error) return `Error: ${fullResponse.error}`;
    return 'Unknown response from Gemini';
  }
}