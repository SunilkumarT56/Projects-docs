import React from 'react';
import { Section } from '../../components/Section';

export const RequestServing: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Request Handling & Serving</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Streaming bytes from S3 to the browser.
      </p>

      <Section title="The Handler">
        <p>
          The Request Handler is an Express/Go service listening on internal port 3001.
          It receives the path (e.g., <code>/about.html</code>) and the <code>X-Deployment-ID</code> header.
        </p>
      </Section>

      <Section title="S3 Fetch Strategy">
        <p>
          It constructs the S3 key: <code>deployments/dpl_82k1/about.html</code>.
        </p>
        <p>
          If the file exists, it pipes the S3 Read Stream directly to the HTTP Response Object.
          This ensures minimal memory buffering. We can serve 1GB files without consuming 1GB RAM.
        </p>
      </Section>

      <Section title="SPA Fallback">
        <p>
          If <code>about.html</code> is missing, we check if the project is configured as a Single Page App (SPA).
          If so, we serve <code>index.html</code> instead (allowing React Router to handle the 404 client-side).
          If not, we return a standard 404.
        </p>
      </Section>
    </div>
  );
};
