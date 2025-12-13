import React from 'react';
import { Section } from '../components/Section';

export const SystemOverview: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>System Overview</h1>
      
      <p style={{ 
        fontSize: '1.25rem', 
        color: 'var(--text-secondary)', 
        marginBottom: 'var(--space-12)' 
      }}>
        A global view of the event lifecycle, designed for high throughput, eventual consistency, and fault tolerance.
      </p>

      <Section title="High-Level Architecture">
        <div style={{
          marginBottom: 'var(--space-8)',
          textAlign: 'center'
        }}>
          <img 
            src="/assets/ADK.png" 
            alt="High Level Architecture Diagram" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              border: '1px solid var(--border-subtle)',
              borderRadius: '4px',
              background: 'var(--bg-panel)'
            }} 
          />
        </div>
        <p>
          TheADK architecture represents a unidirectional data flow. Events originate from distributed clients, pass through a lightweight ingestion gate, are buffered for durability, streamed for ordering, and finally processed by stateless workers into optimizing storage formats.
        </p>
      </Section>

      <Section title="Logical Data Flow">
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 'var(--space-6)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>1. Event Creation:</strong> Clients (Terminal, IDE, Browser) emit low-level JSON events. These are fire-and-forget. The client does not wait for confirmation beyond a 202 Accepted from the ingest layer.
          </li>
          <li style={{ marginBottom: 'var(--space-6)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>2. Ingestion & Buffering:</strong> The Ingestion Layer performs minimal schema validation before pushing the payload to AWS SQS. This decouples the public-facing API from the internal streaming infrastructure, preventing backpressure from cascading to clients.
          </li>
          <li style={{ marginBottom: 'var(--space-6)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>3. Streaming & Ordering:</strong> Use of Apache Kafka ensures that events are strictly ordered by partition key (typically `session_id` or `user_id`). This is critical for reconstructing causal chains later.
          </li>
          <li style={{ marginBottom: 'var(--space-6)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>4. Analytical Fan-Out:</strong> Consumers read from Kafka topics and write to two distinct sinks: 
            <br/><code style={{ fontSize: '0.9em' }}>s3://raw-events</code> for batch analytics (Spark), and Neo4j for relationship mapping.
          </li>
        </ul>
      </Section>

      <Section title="Separation of Responsibilities">
        <p>
          We explicitly reject a monolithic design to isolate failure domains.
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)', marginTop: 'var(--space-4)' }}>
          <li>
            <strong>Ingestion vs. Processing:</strong> Ingestion nodes are CPU-light and I/O-bound. Workers are CPU-heavy. Scaling them independently allows us to handle traffic spikes without over-provisioning compute resources.
          </li>
          <li>
            <strong>Storage vs. Compute:</strong> By using S3 for long-term storage, we decouple retention costs from processing capability. We can scale Spark clusters up for nightly jobs and down to zero during the day, while data remains durable.
          </li>
        </ul>
      </Section>
    </div>
  );
};
