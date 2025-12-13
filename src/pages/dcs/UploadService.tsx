import React from 'react';
import { Section } from '../../components/Section';

export const UploadService: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Upload Service</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        The stateless gateway to the distributed compiler system.
      </p>

      <Section title="Responsibilities">
        <p>
          The Upload Service is the only public-facing component of the backend execution system. Its responsibilities are strictly limited to <strong>ingestion</strong> and <strong>validation</strong>.
        </p>
        <ul style={{ marginTop: 'var(--space-4)', paddingLeft: 'var(--space-4)' }}>
          <li><strong>Authentication:</strong> Verifying the user's JWT token.</li>
          <li><strong>Rate Limiting:</strong> Preventing a single user from flooding the submit queue (e.g., Token Bucket algorithm).</li>
          <li><strong>Sanitization:</strong> Ensuring input metadata is safe.</li>
          <li><strong>Persistence:</strong> Ensuring code is safely stored on durable media (S3) before ack-ing the request.</li>
        </ul>
      </Section>

      <Section title="Stateless Design">
        <p>
          This service holds no local state. It does not write to local disk (except for temp buffers) and keeps no in-memory session data. 
          This allows it to run behind a Load Balancer and autoscale purely based on CPU/Network traffic. 
          If traffic spikes 10x, we simply spawn 10x more Upload Service replicas in Kubernetes.
        </p>
      </Section>

      <Section title="Why It Never Compiles">
        <p>
          <strong>Security Boundary:</strong> The Upload Service has network access to the database and the public internet. If we ran user code here, a successful sandbox escape would be catastrophic. 
          By forcing code execution to happen on isolated Workers (which have NO access to the DB or public internet), we create a robust defense-in-depth architecture.
        </p>
      </Section>
    </div>
  );
};
