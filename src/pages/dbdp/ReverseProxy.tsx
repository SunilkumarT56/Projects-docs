import React from 'react';
import { Section } from '../../components/Section';

export const ReverseProxy: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Reverse Proxy & Routing</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        The gateway to the world.
      </p>

      <Section title="NGINX as Router">
        <p>
          We use a custom NGINX configuration (or a Go-based proxy) at the edge.
          It listens on Port 80/443.
        </p>
      </Section>

      <Section title="Subdomain Wildcard">
        <p>
          Our DNS has an A record: <code>*.platform.app -&gt; Load Balancer IP</code>.
          Any request to <code>cool-project.platform.app</code> hits our proxy.
        </p>
      </Section>

      <Section title="Resolution Logic">
        <p>
          The proxy parses the Host header: <code>Host: cool-project.platform.app</code>.
        </p>
        <ol>
          <li>Extract subdomain: <code>cool-project</code>.</li>
          <li>Query DB (Redis Cache): "Which Deployment ID is active for project <code>cool-project</code>?"</li>
          <li>Response: <code>dpl_82k1...</code>.</li>
          <li>Forward request to the <strong>Request Handler Service</strong> with <code>X-Deployment-ID: dpl_82k1...</code>.</li>
        </ol>
      </Section>
    </div>
  );
};
