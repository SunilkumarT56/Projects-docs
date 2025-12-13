import React from 'react';
import { Section } from '../../components/Section';

export const FailureHandlingDBDP: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Failure Handling</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        When things go wrong.
      </p>

      <Section title="Build Failures">
        <p>
          Most failures are user error (e.g., TypeScript compilation failed).
          The Worker captures the <code>stderr</code> from the Docker container.
          This log is uploaded to <code>s3://logs/dpl_123.txt</code>.
          The status is set to <code>ERROR</code>.
          The UI fetches the log and displays it to the user.
        </p>
      </Section>

      <Section title="Worker Crashes">
        <p>
          If a worker pod crashes (e.g., node process OOMs), the Redis connection is severed.
          The job in the <code>processing</code> list times out (using <code>BRPOPLPUSH</code> pattern logic).
          Another worker picks it up.
          To prevent infinite crash loops, we track <code>retry_count</code> on the job. If &gt; 2 retries, we fail the build permanently.
        </p>
      </Section>

      <Section title="Cleanup">
        <p>
          A "Janitor" cron job runs nightly to delete:
        </p>
        <ul>
          <li>Source code for builds older than 30 days (keep artifacts, delete source).</li>
          <li>Temporary Docker volumes.</li>
          <li>Failed build artifacts that were never promoted.</li>
        </ul>
      </Section>
    </div>
  );
};
