import React from 'react';
import { Section } from '../../components/Section';

export const ScalabilityDCS: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Scalability & Throughput</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Scaling for 10,000 concurrent submissions.
      </p>

      <Section title="Horizontal Scaling (HPA)">
        <p>
          We use Kubernetes HPA (Horizontal Pod Autoscaler) on the Custom Metrics API.
        </p>
        <p>
          <strong>Metric:</strong> <code>redis_queue_length / active_workers</code>.
        </p>
        <p>
          If the queue backlog per worker exceeds 5, we spin up more pods.
          This allows the system to scale from 2 workers to 200 workers automatically during a contest start, then scale back down to save costs.
        </p>
      </Section>

      <Section title="Storage Bottlenecks">
        <p>
          S3 has virtually infinite throughput.
          Postgres is the bottleneck for metadata. We minimize DB writes:
        </p>
        <ul>
          <li><strong>Insert:</strong> Only once at submission start.</li>
          <li><strong>Update:</strong> Only once at submission completion.</li>
        </ul>
        <p>
          We strictly avoid "heartbeat" writes to the DB. All high-frequency status updates happen in Redis.
        </p>
      </Section>
    </div>
  );
};
