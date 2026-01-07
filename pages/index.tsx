import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <Layout>
      {/* SEO */}
      <SEO
        title="Clawa — A Living, Community-Governed Blockchain Protocol"
        description="Clawa is an open, modular blockchain ecosystem governed by its community through transparent processes and improvement proposals."
        url="https://clawa.xyz"
      />

      {/* HERO */}
      <section className="section hero">
        <div className="container">
          <h1>Clawa is a Living, Community-Governed Protocol</h1>

          <p>
            Clawa is an open-source ecosystem built around modular
            infrastructure, decentralized governance, and long-term
            community ownership.
          </p>

          <div className="buttons">
            <a href="/docs" className="btn btn-primary">
              Read the Docs
            </a>
            <a href="/cip" className="btn">
              Propose a CIP
            </a>
          </div>
        </div>
      </section>

      {/* PROTOCOL STATUS */}
      <section className="section section-light">
        <div className="container">
          <h2>Protocol Status</h2>

          <div className="grid" style={{ marginTop: "32px" }}>
            <div className="card">
              <h3>Current Phase</h3>
              <p>Phase 1 — Foundation</p>
              <p>Governance framework and ecosystem design in progress.</p>
            </div>

            <div className="card">
              <h3>Active Governance</h3>
              <p>3 Draft CIPs</p>
              <p>Open for community discussion and refinement.</p>
            </div>

            <div className="card">
              <h3>Next Milestone</h3>
              <p>Clawist v1</p>
              <p>Identity and governance primitives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN DO */}
      <section className="section">
        <div className="container">
          <h2>How You Participate</h2>

          <div className="grid" style={{ marginTop: "40px" }}>
            <div className="card">
              <h3>Build</h3>
              <p>
                Develop modular infrastructure, SDKs, and tooling within
                the Clawa ecosystem.
              </p>
            </div>

            <div className="card">
              <h3>Govern</h3>
              <p>
                Participate in Clawist governance through discussion,
                proposals, and review.
              </p>
            </div>

            <div className="card">
              <h3>Extend</h3>
              <p>
                Launch independent initiatives aligned with Clawa’s
                principles and architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section section-light">
        <div className="container grid">
          {[
            "Decentralization First",
            "Open Governance",
            "Modular Architecture",
            "Community Sovereignty",
          ].map((item) => (
            <div key={item} className="card">
              <h3>{item}</h3>
              <p>
                Designed for permissionless collaboration and long-term
                sustainability.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="section">
        <div className="container">
          <h2>The Clawa Ecosystem</h2>

          <p style={{ marginTop: "16px", maxWidth: "700px" }}>
            Clawa is composed of independent yet interoperable components,
            coordinated through open standards and community governance.
          </p>

          <div className="ecosystem" style={{ marginTop: "48px" }}>
            <div className="ecosystem-item">
              Clawist
              <br />
              Identity & Governance
            </div>

            <div className="ecosystem-item">
              Clawa Tools
              <br />
              SDKs & Libraries
            </div>

            <div className="ecosystem-center">Clawa Core</div>

            <div className="ecosystem-item">
              Optional Chain
              <br />
              Infrastructure Layer
            </div>

            <div className="ecosystem-item">
              dApps
              <br />
              Wallets & Dashboards
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE ACTIVITY */}
      <section className="section section-light">
        <div className="container">
          <h2>Recent Governance Activity</h2>

          <ul style={{ marginTop: "24px", maxWidth: "720px" }}>
            <li>• CIP-0001 drafted — Purpose & Scope</li>
            <li>• Governance framework discussion opened</li>
            <li>• Website v1 approved and deployed</li>
          </ul>
        </div>
      </section>

      {/* WHITEPAPER */}
      <section className="section">
        <div className="container">
          <h2>Whitepaper</h2>

          <p style={{ marginTop: "16px", maxWidth: "700px" }}>
            The Clawa whitepaper defines the protocol vision, governance
            model, and long-term roadmap.
          </p>

          <div style={{ marginTop: "24px" }}>
            <a
              href="/Clawa_Whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Read Whitepaper
            </a>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="section">
        <div className="container">
          <h2>Community & Participation</h2>

          <p style={{ marginTop: "16px", maxWidth: "700px" }}>
            Clawa evolves through open discussion and collective decision-making.
            Anyone may contribute, propose, or review changes.
          </p>

          <div className="community">
            <a
              href="https://github.com/0x09u2"
              target="_blank"
              rel="noreferrer"
            >
              <h3>GitHub</h3>
              <p>Code, issues, and governance discussions</p>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <h3>Discord</h3>
              <p>Community coordination and real-time discussion</p>
            </a>

            <a href="/cip" target="_blank" rel="noreferrer">
              <h3>CIP Process</h3>
              <p>Propose and review protocol changes</p>
            </a>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="section section-light">
        <div className="container">
          <h2>Roadmap</h2>

          <div className="timeline">
            <div className="timeline-item">
              <h3>Phase 1 — Foundation</h3>
              <p>Branding, docs, governance structure</p>
            </div>

            <div className="timeline-item">
              <h3>Phase 2 — Core Development</h3>
              <p>Specifications, SDKs, contributor tooling</p>
            </div>

            <div className="timeline-item">
              <h3>Phase 3 — Infrastructure</h3>
              <p>Optional chain, identity & indexing layers</p>
            </div>

            <div className="timeline-item">
              <h3>Phase 4 — Expansion</h3>
              <p>Sub-projects, grants, ecosystem growth</p>
            </div>

            <div className="timeline-item">
              <h3>Phase 5 — DAO Maturity</h3>
              <p>Full DAO control and sustainability mechanisms</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}