'use client'
import "../styles/global.css";
import { StarknetProvider } from "../components/starknet-provider"


function App({ Component, pageProps }) {

    return (
        <>
        <StarknetProvider>
        <Component {...pageProps} />
        </StarknetProvider>
        </>
    )
}


export default App;
