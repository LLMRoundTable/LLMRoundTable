// Base class for all LLM providers
export abstract class LLMProvider {
  abstract sendPrompt(prompt: string): Promise<any>;
}
