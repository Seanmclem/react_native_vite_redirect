export declare global {
  interface Window {
    ReactNativeWebView: { postMessage: (arg: string) => void };
  }
}
