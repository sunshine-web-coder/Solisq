import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/app.sass";
import "./global.css"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ParallaxProvider>
            <Component {...pageProps} />
        </ParallaxProvider>
    );
}

export default MyApp;
