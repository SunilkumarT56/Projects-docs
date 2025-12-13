import React from 'react';
import { Section } from '../../components/Section';

export const ScalabilityDBDP: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Scalability & Performance</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Handling the Hype.
      </p>

      <Section title="Horizontal Scaling">
        <p>
          <strong>Build Layer:</strong> CPU bound. We scale Worker Pods based on queue depth.
          Since workers are stateless, we can go from 10 to 1000 pods in minutes (limited only by Cloud Provider quotas).
        </p>
        <p>
          <strong>Serving Layer:</strong> IO bound. We scale NGINX/Proxy pods based on Request Count / Bandwidth.
          S3 handles the actual data storage, which scales infinitely.
        </p>
      </Section>

      <Section title="Bottlenecks">
        <p>
          <strong>Redis:</strong> Single threaded. If we hit 100k ops/sec, we need to shard Redis or use Redis Cluster.
          <strong>NAT Gateway:</strong> 1000 concurrent <code>npm install</code> runs can exhaust ephemeral ports on the NAT Gateway. We mitigate this by caching common npm packages in an internal proxy (Verdaccio).
        </p>
      </Section>
    </div>
  );
};
