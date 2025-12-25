import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

// FORCE SYNC — COMPONENT MUST EXIST
export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Clawa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}