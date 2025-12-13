import React from 'react';
import { Section } from '../components/Section';

export const WorkerArchitecture: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>Worker Architecture</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
        Stateless, horizontally scalable compute units that transform raw streams into structured intelligence.
      </p>

      <Section title="Design Principles">
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
          <li><strong>Statelessness:</strong> Workers hold no local state. Any context required for processing is either contained in the event payload or fetched from a high-speed cache (Redis). This allows us to kill, restart, or autoscale workers without data loss.</li>
          <li><strong>Pull-Based Consumption:</strong> Workers pull batches of messages from Kafka. They apply backpressure naturally—if processing slows down, they simply pull fewer messages, preventing system overload.</li>
          <li><strong>Idempotency:</strong> All processing logic is idempotent. If a worker crashes mid-batch and Kafka re-delivers the messages to another node, the outcome is identical.</li>
        </ul>
      </Section>

      <Section title="Processing Pipeline">
        <p>
          A typical worker performs the following operations:
        </p>
        <ol style={{ listStyle: 'decimal', paddingLeft: 'var(--space-6)', marginTop: 'var(--space-4)' }}>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Deserialization:</strong> Parsing the raw JSON byte array.</li>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Enrichment:</strong> Looking up metadata (e.g., resolving a `repo_id` to a repository name via Redis).</li>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Transformation:</strong> Converting the raw event into the canonical internal schema.</li>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Publication:</strong> Writing the structured event to a specialized Kafka topic (e.g., `events-structured`) or directly to the data lake sink.</li>
        </ol>
      </Section>

      <Section title="Horizontal Scaling">
        <p>
          Scaling is metric-driven. We monitor the <strong>Consumer Lag</strong> in Kafka. 
          If the lag exceeds a threshold (e.g., 500ms), the Kubernetes Horizontal Pod Autoscaler (HPA) spins up more worker pods. 
          Since partitions are the unit of parallelism in Kafka, we must ensure we have enough partitions to support the maximum desired number of concurrent workers.
        </p>
      </Section>
    </div>
  );
};
