import React from 'react';
import { Section } from '../components/Section';

export const ProcessingSemantics: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>Processing Semantics</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
        Ensuring reliability and correctness in distributed message processing.
      </p>

      <Section title="At-Least-Once Delivery">
        <p>
          We guarantee that every event is processed <em>at least once</em>. We do NOT guarantee exactly-once processing at the network layer, as it incurs significant latency overhead.
        </p>
        <p>
          This means downstream consumers must be prepared to handle duplicate messages. A network partition could cause a worker to process a batch, write to S3, but fail to commit the offset to Kafka. The new worker will re-process the same batch.
        </p>
      </Section>

      <Section title="Idempotency Strategy">
        <p>
          To handle duplicates safely, all write operations are idempotent:
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
          <li><strong>S3 Writes:</strong> Files are named by the hash of their content. Writing the same file twice merely overwrites it with identical data.</li>
          <li><strong>Database Upserts:</strong> We use `MERGE` or `ON CONFLICT` statements. If a record with the same `event_id` exists, we update it (or ignore it) rather than creating a duplicate row.</li>
        </ul>
      </Section>

      <Section title="Reprocessing & Backfill">
        <p>
          Because we store the immutable raw logs in S3 forever, we can "time travel". 
          If we discover a bug in our aggregation logic that has corrupted metrics for the last 30 days, we assume the derived data is bad. 
          We fix the bug, spin up a transient Spark cluster, and re-run the pipeline over the raw S3 data for that date range, overwriting the bad metrics.
        </p>
      </Section>
    </div>
  );
};
