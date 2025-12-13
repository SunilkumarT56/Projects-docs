import React from 'react';
import { Section } from '../../components/Section';

export const BuildQueue: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Queueing & Orchestration</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Managing the backlog.
      </p>

      <Section title="Redis Lists (LPUSH / BRPOP)">
        <p>
          The standard producer-consumer pattern.
        </p>
        <p>
          <strong>Producer (Upload Service):</strong>
          <code>LPUSH build-queue {`{ "id": "dpl_123", "repo": "..." }`}</code>
        </p>
        <p>
          <strong>Consumer (Worker):</strong>
          <code>BRPOP build-queue 0</code>
        </p>
        <p>
          This gives us simple, FIFO processing.
        </p>
      </Section>

      <Section title="Why Redis > Kafka here">
        <p>
          We don't need "replayability" of build jobs. A build job is transient. If it's done, it's done. 
          Redis is faster, simpler to operate, and allows easier introspection of the "current queue depth".
        </p>
      </Section>

      <Section title="Throughput Control">
        <p>
          The <strong>queue length</strong> is our primary metric for autoscaling.
          If <code>LLEN build-queue</code> &gt; 100, we spin up more generic build workers.
          Unlike the Compiler System, builds are generally generic (Docker containers), so we don't need strictly segmented queues per language, although we could split "Free Tier" vs "Pro Tier" queues for priority.
        </p>
      </Section>
    </div>
  );
};
