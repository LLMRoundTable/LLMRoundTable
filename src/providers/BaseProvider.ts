import { config } from '../config';
const { testEnv } = config;

type Txt2ImgInput = string | { content: string; role: string }[];

export abstract class BaseProvider {
  protected testEnv = testEnv;
  protected txt2imgInputType: 'prompt' | 'messages' = 'messages';

  constructor() {
    if (!window.puter) {
      throw new Error('Puter.js script not loaded.');
    }
  }

  abstract sendMessage(prompt: string): Promise<string>;

  async generateImage(prompt: string): Promise<string> {
    let input: Txt2ImgInput = prompt;
    if (this.txt2imgInputType === 'messages') {
      input = [{ content: prompt, role: 'user' }];
    }

    try {
      const imageElement = await window.puter.ai.txt2img(input, this.testEnv);
      return imageElement;
    } catch (error) {
      throw new Error(`Error generating image: ${error}`);
    }
  }

  protected async _sendMessage(prompt: string, model: string, responseHandler?: (response: any) => string): Promise<string> {
    const messages = [{ content: prompt, role: 'user' }];
    const fullResponse = await window.puter.ai.chat(messages, this.testEnv, { model });

    if (fullResponse && fullResponse.message) {
      if (responseHandler) {
        return responseHandler(fullResponse.message);
      }
      if (typeof fullResponse.message.content === 'string') {
        return fullResponse.message.content;
      }
    }

    if (fullResponse.error) {
      return `Error: ${fullResponse.error}`;
    }

    return `Unknown response from ${this.constructor.name.replace('Provider', '')}`;
  }
}
