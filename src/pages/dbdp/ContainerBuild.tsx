import React from 'react';
import { Section } from '../../components/Section';

export const ContainerBuild: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Containerized Build System</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Isolation is not optional.
      </p>

      <Section title="Why Docker?">
        <p>
          We execute arbitrary code from the internet. 
          A user's <code>package.json</code> could contain <code>"postinstall": "rm -rf / --no-preserve-root"</code>.
          Running this on a bare metal server is suicide.
        </p>
      </Section>

      <Section title="The Build Container">
        <p>
          We use a custom image <code>platform/builder:node-18</code>.
          The flow is:
        </p>
        <ol>
          <li><strong>Pull:</strong> Worker downloads source from S3 to a local temp dir.</li>
          <li><strong>Mount:</strong> Worker mounts this temp dir into the container as <code>/app</code>.</li>
          <li><strong>Run:</strong> <code>docker run -v /tmp/xyz:/app platform/builder npm install && npm run build</code>.</li>
          <li><strong>Extract:</strong> The build artifacts (<code>dist/</code>) are now in the mounted volume.</li>
          <li><strong>Destroy:</strong> The container is essentially <code>--rm</code> (removed) immediately.</li>
        </ol>
      </Section>

      <Section title="Security Hardening">
        <p>
          Containers run as non-root user.
          Network access is restricted (allowlist for NPM registry only, if possible).
          Memory limits are enforced (e.g., <code>--memory=1g</code>) to prevent OOM kills affecting neighbors.
        </p>
      </Section>
    </div>
  );
};
