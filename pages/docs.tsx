import Head from "next/head";
import Layout from "../components/Layout";

export default function Docs({
  theme,
  toggleTheme,
}: {
  theme: "light" | "dark";
  toggleTheme: () => void;
}) {

  return (
    <Layout theme={theme} toggleTheme={toggleTheme}>
      <section className="section">
        <div className="container">
          <h1>Clawist</h1>
          <p style={{ marginTop: "24px", maxWidth: "700px" }}>
            Clawist is the identity and governance layer of the Clawa ecosystem.
            Members participate in proposals, discussions, and community-led development.
          </p>

          <div className="grid" style={{ marginTop: "40px" }}>
            <div className="card">
              <h3>Participate</h3>
              <p>Join governance and help shape the ecosystem.</p>
            </div>

            <div className="card">
              <h3>Propose</h3>
              <p>Submit Clawa Improvement Proposals (CIPs).</p>
            </div>

            <div className="card">
              <h3>Contribute</h3>
              <p>Build tools, modules, and infrastructure.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
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