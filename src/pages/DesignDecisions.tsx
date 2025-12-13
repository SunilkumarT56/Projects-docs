import React from 'react';
import { Section } from '../components/Section';

export const DesignDecisions: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>Design Decisions</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
        Trade-offs made and alternatives rejected.
      </p>

      <Section title="Why Batch > Realtime?">
        <p>
          We initially considered a pure streaming architecture (Flink) for all metrics. 
          However, we found that <strong>session reconstruction</strong> (grouping events by user intent) is notoriously difficult in a windowed stream, especially with late-arriving mobile data.
        </p>
        <p>
          <strong>Decision:</strong> Use Kafka Streams for simple stateless transformations (e.g., anonymization) but rely on nightly Spark batches for complex metric computation. 
          Accuracy is more valuable than sub-second latency for productivity metrics.
        </p>
      </Section>

      <Section title="Why Graphs + Analytics?">
        <p>
          We evaluated using a single multi-model database (ArangoDB) vs. specialized stores.
        </p>
        <p>
          <strong>Decision:</strong> We chose specialized best-in-class tools (Neo4j for graphs, S3/Spark for OLAP). 
          While this increases operational complexity, it prevents "least common denominator" performance issues. 
          A graph query traversing 10 degrees of separation performs poorly in a general-purpose DB.
        </p>
      </Section>

      <Section title="Event-First Philosophy">
        <p>
          We rejected the "CRUD" model (updating a user's `last_active` timestamp in a Postgres row).
        </p>
        <p>
          <strong>Decision:</strong> Store immutable events. 
          The database state is merely a cached projection of the log. This allows us to "replay" the world if we change our definition of "active user" next year.
        </p>
      </Section>
    </div>
  );
};
