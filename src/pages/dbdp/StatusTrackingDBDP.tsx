import React from 'react';
import { Section } from '../../components/Section';

export const StatusTrackingDBDP: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Status Tracking & Polling</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        "Are we there yet?"
      </p>

      <Section title="States">
        <ul>
          <li><strong>UPLOADED:</strong> Source files received.</li>
          <li><strong>QUEUED:</strong> In Redis, waiting for worker.</li>
          <li><strong>BUILDING:</strong> Docker container running.</li>
          <li><strong>READY:</strong> S3 upload complete, site live.</li>
          <li><strong>ERROR:</strong> Build failed (e.g., syntax error).</li>
        </ul>
      </Section>

      <Section title="The Polling Mechanism">
        <p>
          The CLI or Frontend calls <code>GET /deployments/{`{id}`}</code> every 2 seconds.
          We use <strong>Short Polling</strong>.
        </p>
      </Section>

      <Section title="Why not WebSockets?">
        <p>
          <strong>Simplicity.</strong>
          Implementing a robust WebSocket implementation that handles reconnection, auth, and load balancing (sticky sessions) is complex.
          For a deployment that takes 60 seconds, polling 30 times is largely insignificant overhead for our backend.
          It allows the API to remain purely stateless (REST).
        </p>
      </Section>
    </div>
  );
};
