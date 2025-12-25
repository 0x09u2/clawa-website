// FORCED REBUILD — PAGEPROPS REMOVED

import Layout from "../components/Layout";

export default function Clawist({
  theme,
  toggleTheme,
}: {
  theme: "light" | "dark";
  toggleTheme: () => void;
}) {
  
  return (
    <Layout>
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