import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Docs() {
  return (
    <>
      <SEO
        title="Documentation — Clawa"
        description="Official documentation for Clawa covering ecosystem overview, architecture, governance, and contribution guidelines."
        url="https://clawa.xyz/docs"
      />

      <Layout>
        <section className="section">
          <div className="container">
            <h1>Documentation</h1>

            <p style={{ marginTop: "24px", maxWidth: "720px" }}>
              Clawa documentation provides an overview of the ecosystem,
              its modular architecture, governance model, and how contributors
              can participate in building and maintaining the project.
            </p>

            <div className="grid" style={{ marginTop: "48px" }}>
              <div className="card">
                <h3>Overview</h3>
                <p>
                  Introduction to the Clawa ecosystem, its goals, and guiding
                  principles.
                </p>
              </div>

              <div className="card">
                <h3>Architecture</h3>
                <p>
                  Deep dive into the modular design, layers, and core components
                  of Clawa.
                </p>
              </div>

              <div className="card">
                <h3>Governance</h3>
                <p>
                  Explanation of Clawist, the proposal process, and how community
                  decisions are made.
                </p>
              </div>

              <div className="card">
                <h3>Contributing</h3>
                <p>
                  Guidelines for developers, researchers, and community members
                  to contribute effectively.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}