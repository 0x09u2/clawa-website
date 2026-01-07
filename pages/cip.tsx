import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function CIP() {
  return (
    <Layout>
      <SEO
        title="CIP — Clawa Improvement Proposals"
        description="Clawa Improvement Proposals (CIPs) define a standardized, community-driven process for evolving the Clawa ecosystem."
        url="https://clawa.xyz/cip"
      />

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <h1>Clawa Improvement Proposals (CIP)</h1>

          <p style={{ marginTop: "24px", maxWidth: "760px" }}>
            Clawa Improvement Proposals (CIPs) are the primary mechanism for
            proposing changes, improvements, and new initiatives within the
            Clawa ecosystem. Anyone may submit a proposal.
          </p>
        </div>
      </section>

      {/* ACTIVE CIPS */}
      <section className="section section-light">
        <div className="container">
          <h2>Active Proposals</h2>

          <div className="grid" style={{ marginTop: "32px" }}>
            <div className="card">
              <h3>CIP-0001</h3>
              <p><strong>Status:</strong> Draft</p>
              <p>
                Define the purpose, scope, and governance principles of the
                Clawa ecosystem.
              </p>
            </div>

            <div className="card">
              <h3>CIP-0002</h3>
              <p><strong>Status:</strong> Draft</p>
              <p>
                Establish Clawist as the identity and governance layer of Clawa.
              </p>
            </div>

            <div className="card">
              <h3>CIP-0003</h3>
              <p><strong>Status:</strong> Draft</p>
              <p>
                Define contribution standards, repositories, and review process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CIP STRUCTURE (YOUR ORIGINAL CONTENT, PRESERVED) */}
      <section className="section">
        <div className="container">
          <h2>CIP Structure</h2>

          <div style={{ marginTop: "32px", maxWidth: "760px" }}>
            <h3>1. Title</h3>
            <p>A short, descriptive title for the proposal.</p>

            <h3 style={{ marginTop: "24px" }}>2. Summary</h3>
            <p>A concise explanation of the proposal and its intent.</p>

            <h3 style={{ marginTop: "24px" }}>3. Motivation</h3>
            <p>
              Why this proposal is needed and what problem it addresses.
            </p>

            <h3 style={{ marginTop: "24px" }}>4. Specification</h3>
            <p>
              Detailed description of the proposed changes or implementation.
            </p>

            <h3 style={{ marginTop: "24px" }}>5. Rationale</h3>
            <p>
              Reasoning behind design decisions and alternative approaches.
            </p>

            <h3 style={{ marginTop: "24px" }}>6. Risks & Considerations</h3>
            <p>
              Potential risks, trade-offs, or downsides.
            </p>

            <h3 style={{ marginTop: "24px" }}>7. Status</h3>
            <p>
              Draft · Review · Accepted · Rejected · Implemented
            </p>
          </div>

          <p style={{ marginTop: "48px", maxWidth: "760px" }}>
            All CIPs begin as drafts and evolve through open community discussion
            before adoption.
          </p>
        </div>
      </section>

      {/* HOW TO PARTICIPATE */}
      <section className="section section-light">
        <div className="container">
          <h2>How to Participate</h2>

          <ol style={{ marginTop: "24px", maxWidth: "760px" }}>
            <li>• Draft a proposal following the CIP structure</li>
            <li>• Open a pull request in the Clawa repository</li>
            <li>• Engage in discussion and iterate</li>
            <li>• Reach rough consensus before acceptance</li>
          </ol>

          <div style={{ marginTop: "32px" }}>
            <a
              href="https://github.com/0x09u2/clawa-website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Propose a CIP
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}