import React from 'react';
import { Section } from '../../components/Section';

export const UploadServiceDBDP: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Upload Service</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Ingesting code at the speed of light.
      </p>

      <Section title="API: POST /deploy">
        <p>
          The entry point is a simple POST endpoint. It accepts either:
        </p>
        <ul>
          <li>A <code>git_url</code> (for GitHub integrations)</li>
          <li>A zip file (for CLI uploads)</li>
        </ul>
        <p>
          Upon request, it generates a cryptographically random <strong>Deployment ID</strong> (e.g., <code>dpl_82k1...</code>).
        </p>
      </Section>

      <Section title="Recursive File Traversal">
        <p>
          For CLI uploads, the client sends a manifest of files. The server validates them (ignoring <code>node_modules</code>, <code>.git</code>, <code>.env</code>).
          The files are uploaded specifically to:
        </p>
        <code>s3://builds/sources/{`{deployment_id}`}/*</code>
      </Section>

      <Section title="Why it never builds">
        <p>
          <strong>Rule #1:</strong> Never block the API thread on CPU-intensive work.
          The Upload Service performs IO (network -&gt; S3) only.
          If it tried to run <code>npm install</code>, a 2GB repo would hang the server for minutes.
          Instead, it offloads the "thinking" to the Queue.
        </p>
      </Section>
    </div>
  );
};
