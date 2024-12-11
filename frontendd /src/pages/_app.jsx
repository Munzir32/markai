'use client'
import "../styles/global.css"
import React from "react"
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
