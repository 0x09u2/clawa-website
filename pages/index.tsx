import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <Layout>
      {/* SEO */}
      <SEO
        title="Clawa — Modular, Community-Driven Blockchain Ecosystem"
        description="Clawa is an open-source ecosystem focused on modular infrastructure, decentralized governance, and long-term community ownership."
        url="https://clawa.xyz"
      />

      {/* HERO */}
      <section className="section hero">
        <div className="container">
          <h1>Building a Modular, Community-Driven Blockchain Ecosystem</h1>

          <p>
            Clawa is an open-source ecosystem focused on modular infrastructure,
            decentralized governance, and long-term community ownership.
          </p>

          <div className="buttons">
            <a href="/docs" className="btn btn-primary">
              Read Documentation
            </a>
            <a href="/clawist" className="btn">
              Join Clawist
            </a>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN DO */}
      <section className="section section-light">
        <div className="container">
          <h2>What you can do with Clawa</h2>

          <div className="grid" style={{ marginTop: "40px" }}>
            <div className="card">
              <h3>Build</h3>
              <p>
                Develop modular blockchain infrastructure, tools,
                and sub-projects within the Clawa ecosystem.
              </p>
            </div>

            <div className="card">
              <h3>Govern</h3>
              <p>
                Participate in decentralized decision-making through
                Clawist governance and community proposals.
              </p>
            </div>

            <div className="card">
              <h3>Extend</h3>
              <p>
                Launch independent initiatives, research efforts,
                and experiments aligned with Clawa’s principles.
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
            "Open Source",
            "Modular Architecture",
            "Community Sovereignty",
          ].map((item) => (
            <div key={item} className="card">
              <h3>{item}</h3>
              <p>Designed for long-term, permissionless collaboration.</p>
            </div>
          ))}
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="section">
        <div className="container">
          <h2>The Clawa Ecosystem</h2>
          <p style={{ marginTop: "16px", maxWidth: "700px" }}>
            Clawa is designed as a modular ecosystem composed of
            independent yet interoperable components, governed
            by its community.
          </p>

          <div className="ecosystem" style={{ marginTop: "48px" }}>
            <div className="ecosystem-item">
              Clawist<br />Identity & Governance
            </div>
            <div className="ecosystem-item">
              Clawa Tools<br />SDKs & Libraries
            </div>

            <div className="ecosystem-center">Clawa Core</div>

            <div className="ecosystem-item">
              Optional Chain<br />Infrastructure Layer
            </div>
            <div className="ecosystem-item">
              dApps<br />Wallets, Dashboards
            </div>
          </div>
        </div>
      </section>

      {/* WHITEPAPER */}
      <section className="section">
        <div className="container">
          <h2>Whitepaper</h2>
          <p style={{ marginTop: "16px", maxWidth: "700px" }}>
            The Clawa whitepaper outlines the vision, architecture,
            governance model, and long-term roadmap of the ecosystem.
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
          <h2>Community</h2>
          <p style={{ marginTop: "16px", maxWidth: "700px" }}>
            Clawa is built and governed by its community.
            Join the discussion, contribute to development,
            or propose improvements.
          </p>

          <div className="community">
            <a
              href="https://github.com/0x09u2"
              target="_blank"
              rel="noreferrer"
            >
              <h3>GitHub</h3>
              <p>Open-source repositories and contributions</p>
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <h3>Discord</h3>
              <p>Community discussions and coordination</p>
            </a>

            <a href="/cip" target="_blank" rel="noreferrer">
              <h3>CIP Process</h3>
              <p>Submit and review Clawa Improvement Proposals</p>
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
              <p>Branding, documentation, ecosystem design, Clawist v1.</p>
            </div>

            <div className="timeline-item">
              <h3>Phase 2 — Core Development</h3>
              <p>Clawa Core specs, SDKs, governance tooling.</p>
            </div>

            <div className="timeline-item">
              <h3>Phase 3 — Infrastructure</h3>
              <p>Optional Clawa Chain, identity & indexing modules.</p>
            </div>

            <div className="timeline-item">
              <h3>Phase 4 — Expansion</h3>
              <p>Sub-projects, partnerships, ecosystem grants.</p>
            </div>

            <div className="timeline-item">
              <h3>Phase 5 — DAO Maturity</h3>
              <p>Full DAO transition and sustainability mechanisms.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}