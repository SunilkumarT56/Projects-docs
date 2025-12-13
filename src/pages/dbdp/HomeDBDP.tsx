import React from 'react';
import { Section } from '../../components/Section';

export const HomeDBDP: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Distributed Build & Deploy Platform</h1>
      
      <p style={{ 
        fontSize: '1.25rem', 
        color: 'var(--text-secondary)', 
        marginBottom: 'var(--space-12)',
        maxWidth: '800px',
        lineHeight: '1.6'
      }}>
        A globally distributed system for building frontend applications at scale, inspired by Vercel's architecture.
      </p>

      <Section title="The Challenge">
        <p>
          Deploying a static frontend site seems simple: copy files to an S3 bucket. 
          But building a platform that allows <strong>thousands of developers</strong> to simultaneously push code, trigger builds, and get a live URL in seconds is a complex distributed systems problem.
        </p>
        <p>
          Key challenges include:
        </p>
        <ul style={{ marginBottom: 'var(--space-4)', paddingLeft: 'var(--space-4)' }}>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Isolation:</strong> preventing malicious build scripts from compromising the platform.</li>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Scale:</strong> handling spikes of 10,000 builds during a hackathon without crashing.</li>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Speed:</strong> ensuring builds start instantly and artifacts are global immediately.</li>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Routing:</strong> mapping <code>custom-domain.com</code> to specific S3 folders dynamically.</li>
        </ul>
      </Section>

      <Section title="System Philosophy">
        <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-2)' }}>1. Decoupled Compute & Storage</h3>
        <p>
           We separate the "Build" phase (high CPU, ephemeral) from the "Serve" phase (high I/O, durable). 
           Build outputs are pushed to S3, and the serving layer fetches from S3. This allows us to scale build workers independently of request traffic.
        </p>

        <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-2)' }}>2. Containerized Builds</h3>
        <p>
          Every build runs in a disposable Docker container. This ensures that `npm install` scripts cannot access the host filesystem or internal network.
        </p>

        <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-2)' }}>3. Event-Driven Architecture</h3>
        <p>
          Components communicate via Redis queues. The Upload Service doesn't wait for a build; it just enqueues a job. 
          This asynchrony gives us high resiliency and better user experience.
        </p>
      </Section>
    </div>
  );
};
