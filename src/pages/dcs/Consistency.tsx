import React from 'react';
import { Section } from '../../components/Section';

export const Consistency: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Consistency & Idempotency</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Handling partial failures without corrupting state.
      </p>

      <Section title="At-Least-Once Processing">
        <p>
          Redis Lists provide <strong>at-least-once</strong> delivery semantics. If a worker crashes after popping a job but before writing the result, the job is technically lost from the queue.
        </p>
        <p>
          To mitigate this, we use the <code>RPOPLPUSH</code> pattern (or reliable queue pattern):
        </p>
        <ol>
          <li>Popping moves the job from <code>queue:pending</code> to <code>queue:processing</code>.</li>
          <li>After completion, the worker removes the job from <code>queue:processing</code>.</li>
          <li>A separate "Reaper" process scans <code>queue:processing</code> for old jobs that timed out and re-queues them.</li>
        </ol>
      </Section>

      <Section title="Idempotency">
        <p>
          Because of at-least-once delivery, a job might run twice (e.g., if a worker is slow and the Reaper mistakenly re-queues it).
        </p>
        <p>
          Our operations are <strong>idempotent</strong>:
        </p>
        <ul>
          <li>Writing <code>result.json</code> to S3 overwrites the previous file with the exact same data.</li>
          <li>Updating DB status to <code>COMPLETED</code> is a safe overwrite.</li>
        </ul>
        <p>
          We do <strong>not</strong> use "append" operations on results, ensuring that duplicate execution is harmless (wasteful of CPU, but safe for correctness).
        </p>
      </Section>
    </div>
  );
};
