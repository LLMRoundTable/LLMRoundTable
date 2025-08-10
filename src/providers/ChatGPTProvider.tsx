import { BaseProvider } from './BaseProvider';

export class ChatGPTProviderClass extends BaseProvider {
  protected txt2imgInputType: 'prompt' | 'messages' = 'prompt';

  async sendMessage(prompt: string): Promise<string> {
    return this._sendMessage(prompt, 'gpt-4.1-nano');
  }
}