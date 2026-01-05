import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Clawist() {
  return (
    <>
      <SEO
        title="Clawist — Identity & Governance Layer"
        description="Clawist is the identity and governance layer of the Clawa ecosystem, enabling community proposals, coordination, and decentralized decision-making."
        url="https://clawa.xyz/clawist"
      />

      <Layout>
        <section className="section">
          <div className="container">
            <h1>Clawist</h1>

            <p style={{ marginTop: "24px", maxWidth: "700px" }}>
              Clawist is the identity and governance layer of the Clawa ecosystem.
              It enables community participation, proposal creation, and
              decentralized coordination across all Clawa initiatives.
            </p>

            <div className="grid" style={{ marginTop: "40px" }}>
              <div className="card">
                <h3>Participate</h3>
                <p>
                  Join community discussions, signal preferences, and
                  contribute to governance decisions.
                </p>
              </div>

              <div className="card">
                <h3>Propose</h3>
                <p>
                  Submit Clawa Improvement Proposals (CIPs) to suggest changes,
                  upgrades, or new initiatives.
                </p>
              </div>

              <div className="card">
                <h3>Contribute</h3>
                <p>
                  Build tooling, documentation, research, or infrastructure
                  aligned with Clawa’s open ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}