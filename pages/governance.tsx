import Head from "next/head";
import Layout from "../components/Layout";

export default function Governance({
  theme,
  toggleTheme,
}: {
  theme: "light" | "dark";
  toggleTheme: () => void;
}) {
  return (
    <>
      <Head>
        <title>Governance — Clawa</title>
      </Head>

      <Layout>
        <section className="section">
          <div className="container">
            <h1>Governance</h1>

            <p style={{ marginTop: "24px", maxWidth: "720px" }}>
              Clawa is governed by its community through open discussion,
              transparent processes, and on-chain or off-chain coordination
              mechanisms as the ecosystem evolves.
            </p>

            <h2 style={{ marginTop: "64px" }}>Clawist Governance</h2>
            <p style={{ marginTop: "16px", maxWidth: "720px" }}>
              Clawist represents the governance layer of the Clawa ecosystem.
              It defines how decisions are proposed, discussed, and adopted
              by contributors and stakeholders.
            </p>

            <h2 style={{ marginTop: "64px" }}>
              Clawa Improvement Proposals (CIP)
            </h2>
            <p style={{ marginTop: "16px", maxWidth: "720px" }}>
              CIPs are structured proposals used to suggest changes,
              improvements, or new initiatives within Clawa.
            </p>

            <ul style={{ marginTop: "24px" }}>
              <li>• Protocol and infrastructure changes</li>
              <li>• Governance process updates</li>
              <li>• Ecosystem and community initiatives</li>
            </ul>

            <p style={{ marginTop: "24px", maxWidth: "720px" }}>
              Anyone may submit a CIP. Discussion and refinement are encouraged
              before proposals move toward adoption.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}