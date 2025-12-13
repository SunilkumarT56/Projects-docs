import React from 'react';
import { Section } from '../../components/Section';

export const DeploymentPipeline: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Deployment Pipeline</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Crossing the finish line.
      </p>

      <Section title="Atomic Switch">
        <p>
          Technically, a "deployment" is just a pointer.
        </p>
        <p>
          When the build is done and uploaded to S3, the worker updates the status in Redis/SQL:
        </p>
        <code>UPDATE deployments SET status = 'READY', finished_at = NOW() WHERE id = '...';</code>
      </Section>

      <Section title="Immutability">
        <p>
          Deployments are immutable. Once <code>status = READY</code>, the files in S3 are never changed.
          If a user wants to "fix" a bug, they create a <strong>new deployment</strong>.
          This allows instant rollbacks: just point the domain to the previous Deployment ID.
        </p>
      </Section>

      <Section title="The User Experience">
        <p>
          From the user's perspective, the CLI spinner stops, and a green "Done" message appears with the URL.
          This URL is immediately live because the Reverse Proxy checks the DB status in real-time.
        </p>
      </Section>
    </div>
  );
};
