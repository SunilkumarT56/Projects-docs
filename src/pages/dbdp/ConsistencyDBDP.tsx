import React from 'react';
import { Section } from '../../components/Section';

export const ConsistencyDBDP: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Consistency & Idempotency</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Avoiding phantom builds.
      </p>

      <Section title="Idempotent Uploads">
        <p>
          If a user's CLI crashes mid-upload and they retry, the system handles it gracefully.
          Re-uploading the same file to S3 is harmless.
          If they retry the `deploy` command, we typically generate a <em>new</em> Deployment ID to avoid race conditions with the previous partial attempt.
        </p>
      </Section>

      <Section title="Atomic Promotion">
        <p>
          The "Active Deployment" pointer is stored in Redis/SQL.
          Swapping production from <code>v1</code> to <code>v2</code> is a single atomic DB transaction.
          There is no moment where the site is "half deployed".
        </p>
      </Section>

      <Section title="Cache Invalidation">
        <p>
          We set aggressive <code>Cache-Control</code> headers on immutable assets (js/css with hashes).
          For <code>index.html</code>, we set <code>no-cache</code> so the browser always revalidates with our proxy.
        </p>
      </Section>
    </div>
  );
};
