import Head from "next/head";
import Layout from "../components/Layout";

interface PageProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Docs( { theme, toggleTheme }: PageProps) {
  return (
    <>
      {/* PAGE-SPECIFIC META */}
      <Head>
        <title>Documentation — Clawa</title>
        <meta
          name="description"
          content="Technical documentation for the Clawa modular blockchain ecosystem."
        />
      </Head>

      {/* PAGE CONTENT */}
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <section className="section">
          <div className="container">
            <h1>Documentation</h1>
            <p style={{ marginTop: "24px", maxWidth: "700px" }}>
              This documentation outlines Clawa’s architecture,
              governance framework, and contribution process.
            </p>

            <ul style={{ marginTop: "32px" }}>
              <li>• Overview</li>
              <li>• Ecosystem Architecture</li>
              <li>• Clawist Governance</li>
              <li>• Clawa Improvement Proposals (CIP)</li>
              <li>• Contribution Guide</li>
            </ul>
          </div>
        </section>
      </Layout>
    </>
  );
}