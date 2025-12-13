import React from 'react';
import { Section } from '../../components/Section';

export const FailureHandling: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Failure Handling</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Designing for the inevitably crashing world.
      </p>

      <Section title="Worker Crashes">
        <p>
          Workers execute untrusted code. A C++ program might segfault the container, or a Java program might trigger an OOM Kill. 
          Kubernetes automatically restarts the pod.
        </p>
        <p>
          The <strong>Reaper</strong> process ensures the job doesn't vanish. If a job stays in <code>processing</code> state for &gt;60 seconds, it is marked as potentially failed and re-tried once. If it fails twice, we mark the submission as <code>INTERNAL_ERROR</code> to prevent a "poison pill" loop.
        </p>
      </Section>

      <Section title="Queue Reprocessing">
        <p>
          If Redis crashes and loses memory (without AOF persistence), specific in-flight jobs might be lost. 
          We accept this tradeoff for speed. The user will see the status stuck at <code>QUEUED</code> indefinitely. 
          A "Stuck Job Sweeper" runs every 1 hour, scanning the Postgres DB for submissions older than 1 hour that are still <code>QUEUED</code>, and sets them to <code>TIMEOUT_ERROR</code> so the user knows to resubmit.
        </p>
      </Section>
    </div>
  );
};
