import Head from "next/head";
import Layout from "../components/Layout";

export default function CIP() {
  return (
    <>
      <Head>
        <title>CIP Template — Clawa</title>
      </Head>

      <Layout>
        <section className="section">
          <div className="container">
            <h1>Clawa Improvement Proposal (CIP)</h1>

            <p style={{ marginTop: "24px", maxWidth: "720px" }}>
              Clawa Improvement Proposals (CIPs) define a standardized process
              for proposing changes, improvements, or new initiatives within
              the Clawa ecosystem.
            </p>

            <h2 style={{ marginTop: "64px" }}>CIP Structure</h2>

            <div style={{ marginTop: "32px" }}>
              <h3>1. Title</h3>
              <p>A short, descriptive title for the proposal.</p>

              <h3 style={{ marginTop: "24px" }}>2. Summary</h3>
              <p>
                A concise explanation of the proposal and its intent.
              </p>

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

            <p style={{ marginTop: "48px", maxWidth: "720px" }}>
              All CIPs begin as drafts and evolve through community discussion
              before adoption.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}