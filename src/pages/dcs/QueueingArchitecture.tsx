import React from 'react';
import { Section } from '../../components/Section';

export const QueueingArchitecture: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Queueing Architecture (Redis)</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        High-performance task distribution using Redis Lists.
      </p>

      <Section title="Redis as a Job Queue">
        <p>
          While Kafka or SQS are popular, we chose <strong>Redis</strong> for the primary hot path due to its microsecond latency and atomic list operations.
        </p>
        <p>
          The flow relies on two commands:
        </p>
        <ul>
          <li><code>LPUSH queue:lang submission_id</code>: The API pushes new jobs to the head of the list.</li>
          <li><code>BRPOP queue:lang 0</code>: Workers perform a <strong>Blocking Right Pop</strong>. They wait indefinitely for a job to appear, and wake up instantly when one does.</li>
        </ul>
      </Section>

      <Section title="Language Isolation via queues">
        <p>
          We maintain a distinct Redis key for each language:
        </p>
        <ul>
          <li><code>jobs:python</code></li>
          <li><code>jobs:cpp</code></li>
          <li><code>jobs:java</code></li>
        </ul>
        <p>
          This is critical for stability. C++ compilation is CPU-heavy (GCC optimization). Python execution is fast to start but memory-heavy. 
          By segmenting queues, we can assign 50 workers to the C++ queue and 20 to Python, optimizing resource density based on real-time demand.
        </p>
      </Section>

      <Section title="Backpressure Handling">
        <p>
          If the queue length exceeds a threshold (e.g., 10,000 pending jobs), the Upload Service can immediately reject new submissions with <code>HTTP 429 Too Many Requests</code>. 
          This "fail fast" mechanism protects the system from cascading failure during a DDoS or infinite loop bug.
        </p>
      </Section>
    </div>
  );
};
