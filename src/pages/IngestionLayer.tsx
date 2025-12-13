import React from 'react';
import { Section } from '../components/Section';

export const IngestionLayer: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>Ingestion Layer</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
        The gateway to the ADK pipeline. Optimized for maximum write throughput and failure isolation.
      </p>

      <Section title="Architecture">
        <p>
          The ingestion layer consists of a fleet of stateless, Dockerized Go services behind an NGINX load balancer. 
          Its <strong>sole responsibility</strong> is to accept HTTP POST requests, perform lightweight schema validation, and push the payload to the message queue.
        </p>
      </Section>

      <Section title="Lightweight Validation">
        <p>
          We intentionally avoid complex logic at this stage. Validation is limited to:
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
          <li><strong>Authentication:</strong> validating JWTs.</li>
          <li><strong>Structural Integrity:</strong> ensuring the JSON payload is well-formed.</li>
          <li><strong>Essential Fields:</strong> checking for <code>timestamp</code>, <code>event_type</code>, and <code>source_id</code>.</li>
        </ul>
        <p style={{ marginTop: 'var(--space-4)' }}>
          <strong>No Business Logic:</strong> We do NOT check if a user ID exists in the database. We do NOT hydrate data. 
          Doing so would introduce a dependency on the read path of the database, coupling write availability to read availability. 
          If the database is down, events should still be accepted and queued.
        </p>
      </Section>

      <Section title="AWS Lambda for Webhooks">
        <p>
          For GitHub webhooks, we use AWS Lambda instead of containerized pods.
        </p>
        <p>
          <strong>Reasoning:</strong> Webhook traffic is bursty and unpredictable. Pull request activity spikes during code freezes and drops to zero at night. 
          Lambda's auto-scaling characteristics are a perfect match for this profile, saving cost compared to idle containers.
        </p>
      </Section>

      <Section title="Rate Limiting & Protection">
        <p>
          NGINX is configured with leaky bucket rate limiting (<code>limit_req</code>) to protect the ingest pods from denial-of-service or misconfigured clients looping in a retry cycle.
        </p>
      </Section>
    </div>
  );
};
