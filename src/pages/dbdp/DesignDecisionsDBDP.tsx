import React from 'react';
import { Section } from '../../components/Section';

export const DesignDecisionsDBDP: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Design Decisions & Trade-offs</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Why we built it this way.
      </p>

      <Section title="S3 vs Local Disk">
        <p>
          <strong>Decision:</strong> We rely 100% on Object Storage.
          <br/>
          <strong>Trade-off:</strong> Latency. Fetching from S3 is slower (50ms) than reading from local SSD (1ms).
          <br/>
          <strong>Benefit:</strong> Statelessness. We can lose any server at any time and no data is lost. We don't need expensive persistent block storage (EBS) for every web server. We cache hot files in a CDN layer to mitigate the latency.
        </p>
      </Section>

      <Section title="Docker vs Bare Metal">
        <p>
          <strong>Decision:</strong> Full container isolation per build.
          <br/>
          <strong>Trade-off:</strong> Startup time. A container takes ~2s to boot.
          <br/>
          <strong>Benefit:</strong> Security. A malicious user cannot read another user's env vars.
        </p>
      </Section>

      <Section title="Polling vs Push">
        <p>
          <strong>Decision:</strong> Client polling.
          <br/>
          <strong>Trade-off:</strong> "Chatty" network traffic.
          <br/>
          <strong>Benefit:</strong> Extremely simple backend architecture. No stateful WebSocket servers to manage. Easier to debug.
        </p>
      </Section>
    </div>
  );
};
