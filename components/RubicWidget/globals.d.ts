// globals.d.ts
export {};

declare global {
  interface Window {
    rubicWidget: {
      init: (config: any) => void;
    };
  }
}
