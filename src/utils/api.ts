import axios from 'axios';

const API_BASE_URLS: Record<string, string> = {
    ChatGPT: 'https://api.openai.com/v1/chat/completions',
    Copilot: 'https://api.github.com/copilot',
    Gemini: 'https://api.gemini.com/v1/queries',
    DeepSeek: 'https://api.deepseek.com/v1/queries',
};

const fetchFromProvider = async (provider: string, prompt: string): Promise<any> => {
    const url = API_BASE_URLS[provider];
    if (!url) {
        throw new Error(`Provider ${provider} is not supported.`);
    }

    try {
        const response = await axios.post(url, {
            prompt,
            // Additional parameters can be added here based on provider requirements
        }, {
            headers: {
                'Content-Type': 'application/json',
                // Add authorization headers if needed
            },
        });

        return response.data;
    } catch (error) {
        console.error(`Error fetching from ${provider}:`, error);
        throw error;
    }
};

export { fetchFromProvider };