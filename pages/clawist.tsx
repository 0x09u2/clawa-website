import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Clawist() {
  return (
    <>
      <SEO
        title="Clawist — Governance & Contributor Identity of Clawa"
        description="Clawist is the governance and contributor identity layer of the Clawa ecosystem, where participation, proposals, and long-term protocol direction are shaped by the community."
        url="https://clawa.xyz/clawist"
      />

      <Layout>
        {/* INTRO */}
        <section className="section">
          <div className="container">
            <h1>Clawist</h1>

            <p style={{ marginTop: "24px", maxWidth: "720px" }}>
              Clawist is the governance and contributor identity layer of the
              Clawa ecosystem. It defines how individuals participate, gain
              influence, and coordinate the evolution of Clawa over time.
            </p>
          </div>
        </section>

        {/* WHAT CLAWIST IS */}
        <section className="section section-light">
          <div className="container">
            <h2>What is Clawist?</h2>

            <p style={{ marginTop: "16px", maxWidth: "720px" }}>
              Clawist is not a token, role, or membership badge. It is a
              contribution-based identity system where influence is earned
              through meaningful participation rather than capital.
            </p>

            <div className="grid" style={{ marginTop: "40px" }}>
              <div className="card">
                <h3>Identity</h3>
                <p>
                  A persistent identity tied to contributions, proposals,
                  research, and development.
                </p>
              </div>

              <div className="card">
                <h3>Reputation</h3>
                <p>
                  Influence grows through accepted ideas, sustained involvement,
                  and community trust.
                </p>
              </div>

              <div className="card">
                <h3>Governance</h3>
                <p>
                  Open participation in discussions, reviews, and decisions
                  shaping the Clawa protocol.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROLES */}
        <section className="section">
          <div className="container">
            <h2>Clawist Roles</h2>

            <div className="grid" style={{ marginTop: "40px" }}>
              <div className="card">
                <h3>Observer</h3>
                <p>
                  Anyone following Clawa. Can read proposals and participate in
                  open discussions.
                </p>
              </div>

              <div className="card">
                <h3>Contributor</h3>
                <p>
                  Submits or co-authors CIPs, contributes code, research,
                  documentation, or coordination.
                </p>
              </div>

              <div className="card">
                <h3>Steward</h3>
                <p>
                  Long-term contributors entrusted with proposal review,
                  governance facilitation, and ecosystem guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO PARTICIPATE */}
        <section className="section section-light">
          <div className="container">
            <h2>How to Participate</h2>

            <ol style={{ marginTop: "24px", maxWidth: "720px" }}>
              <li>1. Follow ongoing discussions and proposals.</li>
              <li>2. Contribute ideas, feedback, research, or code.</li>
              <li>3. Submit or co-author a Clawa Improvement Proposal (CIP).</li>
              <li>4. Build long-term reputation through accepted contributions.</li>
            </ol>

            <p style={{ marginTop: "24px", maxWidth: "720px" }}>
              Participation is permissionless. There are no fees, applications,
              or token requirements.
            </p>
          </div>
        </section>

        {/* GOVERNANCE STATUS */}
        <section className="section">
          <div className="container">
            <h2>Governance Status</h2>

            <div className="grid" style={{ marginTop: "32px" }}>
              <div className="card">
                <h3>Stage</h3>
                <p>Early Governance</p>
                <p>Norms and processes are actively forming.</p>
              </div>

              <div className="card">
                <h3>Decision Model</h3>
                <p>Off-chain consensus</p>
                <p>Discussion-driven, transparent decision-making.</p>
              </div>

              <div className="card">
                <h3>Participation</h3>
                <p>Open</p>
                <p>Anyone may propose, discuss, or contribute.</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}