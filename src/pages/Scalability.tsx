import React from 'react';
import { Section } from '../components/Section';

export const Scalability: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>Scalability & Performance</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
        Handling growth in users, events, and complexity without architectural re-writes.
      </p>

      <Section title="Horizontal Scaling">
        <p>
          The system is designed to scale linearly with the number of events.
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
          <li><strong>Ingest:</strong> Stateless. Add more pods behind the Load Balancer.</li>
          <li><strong>Stream:</strong> Add more Kafka brokers and increase partition count.</li>
          <li><strong>Compute:</strong> Add more Worker pods.</li>
          <li><strong>Storage:</strong> S3 scales automatically.</li>
        </ul>
      </Section>

      <Section title="Partition Strategy">
        <p>
          Kafka partitions are the unit of parallelism. 
          We over-partition initially (e.g., 64 partitions for low traffic) to avoid expensive re-partitioning operations later. 
          As traffic grows, we can scale consumers up to 64 instances before needing to migrate topics.
        </p>
      </Section>

      <Section title="Bottlenecks & Mitigation">
        <p>
          <strong>The Database Write Limit:</strong> Writing to the graph (Neo4j) is the most expensive operation. 
          To mitigate this, we batch writes in the worker layer. Instead of 1 transaction per event, we commit transaction blocks of 500 events, reducing network overhead and lock contention.
        </p>
      </Section>
    </div>
  );
};
