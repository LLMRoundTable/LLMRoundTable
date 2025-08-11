declare module '*.module.css';

declare global {
  interface Window {
    puter: {
      ai: {
        chat: (messages: any[], options: any, other: any) => Promise<any>;
        txt2img: (input: any, testEnv: any) => Promise<string>;
      };
    };
  }
}