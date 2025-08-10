import { BaseProvider } from './BaseProvider';

export class DeepSeekProvider extends BaseProvider {
  async sendMessage(prompt: string): Promise<string> {
    return this._sendMessage(prompt, 'deepseek-reasoner');
  }
}
