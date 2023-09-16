import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {SSRProvider}   from "next-ssr";

export function App({Component, pageProps}: AppProps) {
    return (
        <SSRProvider>
            <Component {...pageProps} />
        </SSRProvider>
    );
}

App.getInitialProps = () => ({});

export default App;