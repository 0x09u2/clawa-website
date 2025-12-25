import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App({
  theme,
  toggleTheme,
}: {
  theme: "light" | "dark";
  toggleTheme: () => void;
}) {
  return (
    <>
      <Head>
        <title>Clawa — Modular, Community-Driven Blockchain Ecosystem</title>
        <meta
          name="description"
          content="Clawa is an open-source, modular blockchain ecosystem focused on decentralized governance, community sovereignty, and permissionless innovation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}