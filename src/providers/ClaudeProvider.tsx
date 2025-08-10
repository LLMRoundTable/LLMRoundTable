import { BaseProvider } from './BaseProvider';

export class ClaudeProviderClass extends BaseProvider {
  async sendMessage(prompt: string): Promise<string> {
    const responseHandler = (message: any) => {
      if (Array.isArray(message.content)) {
        type ContentBlock = { type: string; text?: string };
        const textBlock = (message.content as ContentBlock[]).find((c: ContentBlock) => c.type === 'text');
        if (textBlock && textBlock.text) {
          return textBlock.text;
        }
      }
      return 'Unknown response from Claude';
    };
    return this._sendMessage(prompt, 'claude-opus-4-1', responseHandler);
  }
}