export class GeminiProvider {
  async sendMessage(prompt: string): Promise<string> {
    if (!window.puter) {
      throw new Error('Puter.js script not loaded.');
    }
    const messages = [{ content: prompt, role: 'user' }];
    // Use Gemini model via Puter API (if available)
    const fullResponse = await window.puter.ai.chat(messages, { model: 'openrouter:google/gemini-2.5-pro' });
    if (fullResponse && fullResponse.message && typeof fullResponse.message.content === 'string') {
      return fullResponse.message.content;
    }
    if (fullResponse.error) return `Error: ${fullResponse.error}`;
    return 'Unknown response from Gemini';
  }
}