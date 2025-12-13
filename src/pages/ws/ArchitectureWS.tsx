import React from 'react';
import { Section } from '../../components/Section';

export const ArchitectureWS: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Architecture & Data Flow</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        NGINX -&gt; Docker -&gt; Redis.
      </p>

       <div style={{
          textAlign: 'center',
          marginBottom: 'var(--space-8)',
          background: 'var(--bg-panel)',
          padding: 'var(--space-4)',
          borderRadius: '8px',
          border: '1px solid var(--border-subtle)'
        }}>
          <img 
            src="/assets/dockerss.png" 
            alt="Dockerized WebSocket Architecture" 
            style={{
              maxWidth: '80%',
              height: 'auto',
              borderRadius: '4px'
            }}
          />
        </div>

      <Section title="Components">
        <h3 style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>1. Load Balancer (NGINX)</h3>
        <p>
           Handles the initial HTTP handshake and Upgrade header to switch to WebSocket protocol (wss://). 
           We use "Sticky Sessions" (ip_hash) to ensure that if a client reconnects briefly, they might hit the same server (though our architecture doesn't strictly require this due to Redis).
        </p>

        <h3 style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>2. WebSocket Servers (Node.js/Socket.io)</h3>
        <p>
          Stateless containers. They hold the open TCP sockets to clients.
          They do <strong>not</strong> store message history.
        </p>

        <h3 style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>3. Redis Pub/Sub</h3>
        <p>
           The glue. It offers extremely low-latency broadcasting (~0.5ms).
           Note: Redis Pub/Sub is fire-and-forget. It does not persist messages.
        </p>
      </Section>

      <Section title="Data Flow">
        <ol style={{ paddingLeft: 'var(--space-4)', lineHeight: '1.6' }}>
          <li>User sends "Hello" to Server A.</li>
          <li>Server A publishes "Hello" to Redis Channel <code>global-chat</code>.</li>
          <li>Redis pushes "Hello" to Server A, Server B, Server C.</li>
          <li>Server B checks its local list of clients. It finds User X, Y, Z. It sends "Hello" to them.</li>
        </ol>
      </Section>
    </div>
  );
};
