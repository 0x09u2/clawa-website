import Head from "next/head";
import Layout from "../components/Layout";

export default function Docs() {
  return (
    <>
      <Head>
        <title>Docs — Clawa</title>
      </Head>

      <Layout>
        <section className="section">
          <div className="container">
            <h1>Documentation</h1>

            <p style={{ marginTop: "24px", maxWidth: "720px" }}>
              Clawa documentation provides an overview of the ecosystem,
              architecture, governance, and contribution guidelines.
            </p>

            <div className="grid" style={{ marginTop: "48px" }}>
              <div className="card">
                <h3>Overview</h3>
                <p>Introduction to the Clawa ecosystem and its philosophy.</p>
              </div>

              <div className="card">
                <h3>Architecture</h3>
                <p>Modular design, layers, and system components.</p>
              </div>

              <div className="card">
                <h3>Governance</h3>
                <p>How proposals, voting, and community decisions work.</p>
              </div>

              <div className="card">
                <h3>Contributing</h3>
                <p>Guidelines for developers and community members.</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}