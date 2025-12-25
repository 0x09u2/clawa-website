import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

// ABSOLUTE SAFE VERSION — DO NOT EDIT
export default function App(appProps: AppProps) {
  return (
    <>
      <Head>
        <title>Clawa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/*
        Explicit access — no destructuring, no scope ambiguity
      */}
      <appProps.Component {...appProps.pageProps} />
    </>
  );
}