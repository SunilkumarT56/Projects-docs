import React from 'react';
import { Section } from '../../components/Section';

export const HomeWS: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Scalable WebSocket Architecture</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Broadcasting to millions using Redis Pub/Sub.
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
            src="/assets/websockets.png" 
            alt="Real-time System Overview" 
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '4px'
            }}
          />
        </div>

      <Section title="The Problem">
        <p>
          Standard HTTP is request-response. 
          Real-time apps (chat, stock tickers, gaming) need persistent, bi-directional connections.
          <strong>WebSockets</strong> solve this.
        </p>
        <p>
          However, scaling WebSockets is hard. 
          If User A is connected to Server 1, and User B is connected to Server 2, how does a message from A reach B?
          Server 1 doesn't know about User B's connection.
        </p>
      </Section>

      <Section title="The Solution">
        <p>
          We use a <strong>Pub/Sub (Publish/Subscribe)</strong> mechanism.
          Every WebSocket server subscribes to a central channel.
          When a message needs to go out, it's published to that channel.
          Every server receives it and forwards it to its own connected clients.
        </p>
      </Section>

      <Section title="Use Cases">
        <ul>
          <li><strong>Chat Systems:</strong> Slack/Discord clones.</li>
          <li><strong>Live Dashboards:</strong> Monitoring (e.g., this Distributed Compiler status page).</li>
          <li><strong>Multiplayer Games:</strong> Synchronization of game state.</li>
        </ul>
      </Section>
    </div>
  );
};
