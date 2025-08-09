export class ClaudeProviderClass {
  async sendMessage(prompt: string): Promise<string> {
    if (!window.puter) {
      throw new Error('Puter.js script not loaded.');
    }
    const messages = [{ content: prompt, role: 'user' }];
    // Use Claude model via Puter API (if available)
    const fullResponse = await window.puter.ai.chat(messages, { model: 'claude-opus-4-1' });
    if (fullResponse && fullResponse.message && fullResponse.message.content) {
      return fullResponse.message.content;
    }
    if (fullResponse.error) return `Error: ${fullResponse.error}`;
    return 'Unknown response from Claude';
  }
}
