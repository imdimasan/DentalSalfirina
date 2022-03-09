import "../styles/style.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
