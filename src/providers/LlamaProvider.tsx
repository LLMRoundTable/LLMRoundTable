import { BaseProvider } from './BaseProvider';

export class LlamaProvider extends BaseProvider {
  async sendMessage(prompt: string): Promise<string> {
    return this._sendMessage(prompt, 'meta-llama/llama-4-maverick');
  }
}
