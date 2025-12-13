import React from 'react';
import { Section } from '../components/Section';

export const FailureHandling: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>Failure Handling</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
        Designing for the inevitable: crashes, latency, and network partitions.
      </p>

      <Section title="Worker Crashes">
        <p>
          Worker pods are ephemeral by design. When a worker crashes (OOM, panic, or node failure):
        </p>
        <ol style={{ listStyle: 'decimal', paddingLeft: 'var(--space-6)', marginTop: 'var(--space-4)' }}>
          <li style={{ marginBottom: 'var(--space-2)' }}>The Kafka consumer group coordinator detects the heartbeat timeout.</li>
          <li style={{ marginBottom: 'var(--space-2)' }}>The partition marks the offset as uncommitted.</li>
          <li style={{ marginBottom: 'var(--space-2)' }}>Kafka rebalances the group, assigning the partition to a healthy worker.</li>
          <li style={{ marginBottom: 'var(--space-2)' }}>The new worker resumes processing from the last committed offset.</li>
        </ol>
      </Section>

      <Section title="Dead Letter Queues (DLQ)">
        <p>
          Some messages are "poison pills"—malformed in a way that always crashes process logic. 
          If a message fails processing 3 times, we strip the error context and publish it to a <code>events-dlq</code> topic. 
          Engineers monitor this topic to debug parser bugs without blocking the main pipeline.
        </p>
      </Section>

      <Section title="Queue Overflow">
        <p>
          If SQS fills up during a massive traffic spike (e.g., a company-wide hackathon), our ingest pods will receive 503 errors from AWS. 
          In this scenario, ingestion accepts the event but drops it immediately (load shedding) to preserve system stability, logging a metric for "dropped_events". 
          Availability takes precedence over completeness during catastrophic load.
        </p>
      </Section>
    </div>
  );
};
