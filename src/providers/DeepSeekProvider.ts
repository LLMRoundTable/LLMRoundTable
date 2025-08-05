import { LLMProvider } from './LLMProvider';

export class DeepSeekProvider extends LLMProvider {
    constructor(apiKey) {
        super();
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.deepseek.com/v1';
    }

    async sendPrompt(prompt) {
        const response = await fetch(`${this.baseUrl}/generate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify({ prompt })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch response from DeepSeek');
        }

        const data = await response.json();
        return data.response;
    }
}