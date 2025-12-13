import React from 'react';
import { Section } from '../components/Section';

export const Security: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>Security & Privacy</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
        Protecting sensitive developer data in a highly instrumented environment.
      </p>

      <Section title="Data Anonymization">
        <p>
          We employ a "privacy-by-design" approach.
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
          <li><strong>PII Hashing:</strong> Usernames and emails are salted and hashed at ingestion. The analytical system operates on <code>user_hash</code> identifiers.</li>
          <li><strong>Secret Sanitization:</strong> CLI commands and source code snippets are scanned for regex patterns matching API keys (e.g., <code>SK_LIVE_...</code>). Matches are redacted with <code>[REDACTED]</code> before entering the pipeline.</li>
        </ul>
      </Section>

      <Section title="Access Control">
        <p>
          Access to raw data in S3 is restricted to the specific IAM roles used by the Spark cluster. 
          Engineers cannot query raw events directly. They must use the aggregated metrics APIs, which enforce ACLs at the team level (Team A cannot see Team B's individual activity).
        </p>
      </Section>

      <Section title="Audit Trails">
        <p>
          Every access to the Knowledge Graph is logged. 
          If an admin queries for a specific user's activity, an immutable audit log is generated, detailing the query time, the rationale, and the identity of the requestor.
        </p>
      </Section>
    </div>
  );
};
