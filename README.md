# LLM Chat Clone

This project is a React Vite application designed to mimic the ChatGPT interface and allow users to interact with multiple LLM providers simultaneously, including ChatGPT, GitHub Copilot, Gemini, and DeepSeek.

## Features

- **Multiple LLM Providers**: Users can select from various LLM providers and send prompts to them simultaneously.
- **Chat Interface**: A user-friendly chat interface that displays conversations with the selected LLMs.
- **Responsive Design**: The application is designed to be responsive and visually similar to popular chat interfaces.

## Project Structure

```
llm-chat-clone
├── src
│   ├── main.tsx              # Entry point of the application
│   ├── App.tsx               # Main application component
│   ├── components             # Contains reusable components
│   ├── providers              # Contains LLM provider classes
│   ├── hooks                  # Custom hooks for managing state
│   ├── types                  # TypeScript types and interfaces
│   ├── styles                 # CSS styles for the application
│   └── utils                  # Utility functions for API calls
├── public
│   └── index.html            # Main HTML file
├── package.json               # NPM configuration file
├── tsconfig.json             # TypeScript configuration file
└── vite.config.ts            # Vite configuration file
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd llm-chat-clone
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Select the desired LLM providers from the sidebar.
- Enter your prompts in the input field and send them to the selected providers.
- View the responses in the chat window.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.