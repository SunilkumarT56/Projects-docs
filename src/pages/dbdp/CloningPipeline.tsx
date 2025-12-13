import React from 'react';
import { Section } from '../../components/Section';

export const CloningPipeline: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Repository Cloning Pipeline</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Moving bits from GitHub to us.
      </p>

      <Section title="Local Cloning Strategy">
        <p>
          When a user deploys via Git, we perform a <code>git clone --depth 1</code> to a temporary directory.
          <strong>Shallow clones</strong> are critical for performance—we don't need the entire 10-year history of the project, just the latest snapshot.
        </p>
      </Section>

      <Section title="Streaming to S3">
        <p>
          Once cloned, we don't keep the files on the server disk. We immediately walk the directory tree and stream files to S3.
        </p>
        <p>
          Why? Because the Upload Service scaling group may be replaced or downscaled. Local disk is ephemeral. S3 is persistent.
          This also allows any Build Worker to pick up the job later; it doesn't have to be the same server that cloned it.
        </p>
      </Section>

      <Section title="Handling Large Repos">
        <p>
          We enforce a hard limit (e.g., 500MB) on source size to prevent abuse.
          We also ignore large binary blobs (mp4, zip) by default unless explicitly whitelisted, as they slow down the build context transfer significantly.
        </p>
      </Section>
    </div>
  );
};
