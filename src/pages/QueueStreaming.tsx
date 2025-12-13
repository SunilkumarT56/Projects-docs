import React from 'react';
import { Section } from '../components/Section';

export const QueueStreaming: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>Queue & Streaming Backbone</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
        Decoupling producers from consumers to ensure data durability and backpressure management.
      </p>

      <Section title="AWS SQS: The Buffer">
        <p>
          Why place SQS before Kafka?
        </p>
        <p>
          <strong>Backpressure Handling:</strong> Kafka requires careful tuning of producer buffers. If the Kafka cluster is under maintenance or experiencing high latency, blocking the ingest pods is unacceptable (it would timeout the client).
          SQS acts as a highly durable, practically infinite buffer. Ingest pods write to SQS and return immediately. A separate forwarder service pulls from SQS and writes to Kafka at a controlled rate.
        </p>
      </Section>

      <Section title="Apache Kafka: System of Record">
        <p>
          Kafka is the central nervous system. It provides the immutable log of all events that have occurred.
        </p>
        <h3 style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-2)' }}>Topic Design</h3>
        <p>
          We use a 'fat topic' strategy initially: <code>events-raw</code>.
          All raw events go here. This ensures global ordering for a user session if we partition by <code>user_id</code>.
        </p>

        <h3 style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-2)' }}>Ordering Guarantees</h3>
        <p>
          Ordering is critical. A "File Save" event must be processed <em>after</em> the "File Open" event. 
          Kafka guarantees order within a partition. By using <code>user_id</code> as the partition key, we ensure that all events for a single developer are processed sequentially by the same consumer, preserving the causal timeline.
        </p>
      </Section>

      <Section title="The Choice: SQS + Kafka">
        <p>
          Many architectures choose one or the other. We chose both.
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
          <li><strong>SQS:</strong> Availability and simplicity. Hard to break.</li>
          <li><strong>Kafka:</strong> Replayability and streaming analytics.</li>
        </ul>
        <p style={{ marginTop: 'var(--space-4)' }}>
          This hybrid approach gives us the best of both worlds: the robust ingest availability of SQS and the powerful stream processing capabilities of Kafka.
        </p>
      </Section>
    </div>
  );
};
