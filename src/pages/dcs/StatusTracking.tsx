import React from 'react';
import { Section } from '../../components/Section';

export const StatusTracking: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Status Tracking & Polling</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Real-time feedback without WebSockets.
      </p>

      <Section title="Redis Hash Store">
        <p>
          We use Redis as a temporary, fast metadata store during the active lifecycle of a submission.
        </p>
        <p><code>HGETALL submission:123</code> might return:</p>
<pre style={{ background: 'var(--bg-panel)', padding: 'var(--space-4)', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
{`{
  "state": "RUNNING",
  "worker": "worker-py-04",
  "started_at": "1678900000"
}`}
</pre>
      </Section>

      <Section title="Polling Model">
        <p>
          <strong>Why not WebSockets?</strong> Maintaining 100k open stateful TCP connections for WebSockets is expensive for the load balancer and server memory (C10K problem limits).
        </p>
        <p>
          Instead, the frontend polls <code>GET /status/:id</code> every 1-2 seconds. 
          This is stateless, cacheable, and handled trivially by standard HTTP servers (NGINX). 
          Once the state is <code>COMPLETED</code>, the frontend stops polling.
        </p>
      </Section>

      <Section title="State Transition">
        <ul>
          <li><strong>QUEUED:</strong> In Redis List, waiting for worker.</li>
          <li><strong>RUNNING:</strong> Popped by worker, execution active.</li>
          <li><strong>COMPLETED:</strong> Result in S3, Database updated.</li>
          <li><strong>FAILED:</strong> System error (infrastructure crash).</li>
        </ul>
      </Section>
    </div>
  );
};
