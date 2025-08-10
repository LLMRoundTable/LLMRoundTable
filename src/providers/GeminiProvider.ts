import { BaseProvider } from './BaseProvider';

export class GeminiProvider extends BaseProvider {
  async sendMessage(prompt:string): Promise<string> {
    return this._sendMessage(prompt, 'openrouter:google/gemini-2.5-pro');
  }
}
