import { useEffect } from "preact/hooks";

export function App() {
  useEffect(() => {
    window.ReactNativeWebView?.postMessage?.("close");
  }, []);
  return <p>You may now close this page</p>;
}
