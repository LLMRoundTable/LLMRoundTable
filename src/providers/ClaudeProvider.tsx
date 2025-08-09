declare global {
  interface Window {
    puter: any;
  }
}
export class ClaudeProviderClass {
  async sendMessage(prompt: string): Promise<string> {
    if (!window.puter) {
      throw new Error('Puter.js script not loaded.');
    }
    const messages = [{ content: prompt, role: 'user' }];
    // Use Claude model via Puter API (if available)
    const fullResponse = await window.puter.ai.chat(messages, { model: 'claude-opus-4-1' });
    if (fullResponse && fullResponse.message && Array.isArray(fullResponse.message.content)) {
      // Define type for content block
      type ContentBlock = { type: string; text?: string };
      const textBlock = (fullResponse.message.content as ContentBlock[]).find((c: ContentBlock) => c.type === 'text');
      if (textBlock && textBlock.text) {
        return textBlock.text;
      }
    }
    if (fullResponse.error) return `Error: ${fullResponse.error}`;
    return 'Unknown response from Claude';
  }
}
