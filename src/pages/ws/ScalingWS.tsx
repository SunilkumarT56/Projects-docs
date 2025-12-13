import React from 'react';
import { Section } from '../../components/Section';

export const ScalingWS: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Scaling & Design Decisions</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Why this works at scale.
      </p>

      <Section title="Horizontal Scaling">
        <p>
          The beauty of this architecture is linear scalability for connection counts.
          If one server can hold 10,000 concurrent connections, and we need 100,000, we simply spin up 10 servers.
          Redis handles the N-to-N broadcasting complexity.
        </p>
      </Section>

      <Section title="Failure Handling">
        <p>
          <strong>Server Crash:</strong> If <code>ws-node-3</code> crashes, only the users connected to that specific node are disconnected.
          The client library (e.g., socket.io-client) automatically reconnects. 
          NGINX routes the new connection to a healthy node (e.g., <code>ws-node-4</code>).
          Service resumes seamlessly.
        </p>
      </Section>

      <Section title="Trade-offs">
        <p>
          <strong>No Persistence:</strong> If a user is offline, they miss the message. 
          Redis Pub/Sub has no inbox.
          <em>Fix:</em> Store messages in a database (Cassandra/scyllaDB) separately for "Chat History".
        </p>
        <p>
          <strong>Fan-out limits:</strong> If you have 1 million users in a SINGLE channel, Redis becomes the bottleneck.
          <em>Fix:</em> Shard channels across multiple Redis instances.
        </p>
      </Section>
    </div>
  );
};
