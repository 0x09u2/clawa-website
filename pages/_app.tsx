import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import "../styles/globals.css";

type Theme = "light" | "dark";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>("light");

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const initialTheme = saved ?? "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <>
      <Head>
        <title>Clawa — Modular, Community-Driven Blockchain Ecosystem</title>
        <meta
          name="description"
          content="Clawa is an open-source, modular blockchain ecosystem focused on decentralized governance and community sovereignty."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component
        {...pageProps}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </>
  );
}