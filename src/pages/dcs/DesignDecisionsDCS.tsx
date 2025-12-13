import React from 'react';
import { Section } from '../../components/Section';

export const DesignDecisionsDCS: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Design Decisions & Trade-offs</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Why we built it this way.
      </p>

      <Section title="Redis over Kafka">
        <p>
          <strong>Decision:</strong> Use Redis Lists instead of Apache Kafka.
        </p>
        <p>
          <strong>Reasoning:</strong> We need simple "Work Queue" semantics (one consumer processes one message). Kafka is designed for "Pub/Sub" streaming. 
          While Kafka allows consumer groups, Redis is significantly lighter to operate and maintain for this specific use case. We don't need infinite retention of the queue history.
        </p>
      </Section>

      <Section title="Polling over WebSockets">
        <p>
          <strong>Decision:</strong> Client-side polling for status updates.
        </p>
        <p>
          <strong>Reasoning:</strong> WebSockets require stateful connections on the load balancer. In a contest with 100k users, re-establishing 100k WS connections after a deployment is a thundering herd risk. 
          Short polling is simple, stateless, and cache-friendly. The latency trade-off (1s delay) is acceptable for a batch compilation system.
        </p>
      </Section>

      <Section title="S3 over Database for Code">
        <p>
          <strong>Decision:</strong> Storing code in object storage.
        </p>
        <p>
          <strong>Reasoning:</strong> Databases are expensive to scale vertically. S3 scales horizontally infinitely. Keeping the "hot" relational DB small ensures that queries remain fast even as we archive millions of historical submissions.
        </p>
      </Section>
    </div>
  );
};
