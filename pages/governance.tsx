import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Governance() {
  return (
    <>
      <SEO
        title="Governance — Clawa"
        description="Clawa governance framework outlining Clawist, community decision-making, and the Clawa Improvement Proposal (CIP) process."
      />

      <Layout>
        <section className="section">
          <div className="container">
            <h1>Governance</h1>

            <p style={{ marginTop: "24px", maxWidth: "720px" }}>
              Clawa is governed by its community through open discussion,
              transparent processes, and evolving coordination mechanisms.
              Governance prioritizes decentralization, inclusivity, and
              long-term sustainability.
            </p>

            <h2 style={{ marginTop: "64px" }}>Clawist Governance</h2>
            <p style={{ marginTop: "16px", maxWidth: "720px" }}>
              Clawist is the identity and governance layer of the Clawa ecosystem.
              It defines how proposals are submitted, discussed, reviewed,
              and adopted by contributors and stakeholders.
            </p>

            <h2 style={{ marginTop: "64px" }}>
              Clawa Improvement Proposals (CIP)
            </h2>
            <p style={{ marginTop: "16px", maxWidth: "720px" }}>
              Clawa Improvement Proposals (CIPs) provide a structured and
              transparent mechanism for suggesting changes, improvements,
              or new initiatives within the ecosystem.
            </p>

            <ul style={{ marginTop: "24px", paddingLeft: "16px" }}>
              <li>Protocol and infrastructure upgrades</li>
              <li>Governance process changes</li>
              <li>Ecosystem tooling and standards</li>
              <li>Community and educational initiatives</li>
            </ul>

            <p style={{ marginTop: "24px", maxWidth: "720px" }}>
              Any community member may submit a CIP. Proposals are expected
              to go through public discussion and refinement before reaching
              a final status such as accepted, rejected, or implemented.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}