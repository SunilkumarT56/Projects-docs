import React from 'react';
import { Section } from '../../components/Section';

export const ArchitectureDBDP: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>High-Level Architecture</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Component interaction and separation of concerns.
      </p>

      <Section title="Core Components">
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--space-8)',
          background: 'var(--bg-panel)',
          padding: 'var(--space-4)',
          borderRadius: '8px',
          border: '1px solid var(--border-subtle)'
        }}>
          <img 
            src="/assets/Vercel-clone.png" 
            alt="Distributed Build Platform Architecture" 
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '4px'
            }}
          />
        </div>

        <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-2)' }}>1. Control Plane vs Data Plane</h3>
        <p>
          The <strong>Control Plane</strong> (Upload Service, Redis, Workers) manages the lifecycle of state.
          The <strong>Data Plane</strong> (Reverse Proxy, S3) handles the actual user traffic.
          Crucially, if the entire Build System goes down, existing websites <strong>stay online</strong> because the Data Plane relies only on S3.
        </p>
      </Section>

      <Section title="Technology Stack">
        <ul style={{ paddingLeft: 'var(--space-4)', lineHeight: '1.6' }}>
          <li><strong>Redis:</strong> Job queues and fast status updates.</li>
          <li><strong>S3 (MinIO):</strong> The "hard drive" of the internet. Stores both source code and built assets.</li>
          <li><strong>Docker:</strong> The sandbox for untrusted build scripts.</li>
          <li><strong>Node.js/Go:</strong> Node for the API/Workers (great JSON/IO handling), Go for the Proxy (raw throughput).</li>
        </ul>
      </Section>
    </div>
  );
};
