import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Link from "next/link"

export default function Governance() {
  return (
    <Link href="/governance" className="governance-badge">
      <span className="badge-label">Governance</span>
      <span className="badge-status">Phase 0 — Genesis</span>
    </Link>
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

            {/* GOVERNANCE STATUS */}
            <div
              className="card"
              style={{ marginTop: "40px", maxWidth: "720px" }}
            >
              <h3>Current Governance Status</h3>
              <p style={{ marginTop: "8px" }}>
                Phase 0 — Genesis
              </p>
              <p style={{ marginTop: "12px" }}>
                Governance is open and community-driven. Early contributors
                coordinate through discussion, proposals, and social consensus.
                Maintainers act as stewards, not authorities.
              </p>

              <a
                href="https://github.com/0x09u2/clawa-website/blob/main/governance/GOVERNANCE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ marginTop: "16px", display: "inline-block" }}
              >
                Read Full Governance Spec →
              </a>
            </div>

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

            <a
              href="/cip"
              className="btn btn-primary"
              style={{ marginTop: "32px" }}
            >
              View CIP Process
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}