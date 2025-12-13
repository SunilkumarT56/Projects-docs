import React from 'react';
import { Section } from '../../components/Section';

export const HomeDCS: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Distributed Code Submission & Compilation System</h1>
      
      <p style={{ 
        fontSize: '1.25rem', 
        color: 'var(--text-secondary)', 
        marginBottom: 'var(--space-12)',
        maxWidth: '800px',
        lineHeight: '1.6'
      }}>
        A high-throughput, fault-tolerant distributed system for executing untrusted code at scale.
      </p>

      <Section title="The Problem Space">
        <p>
          Building an online judge or code execution platform is deceptively simple at low volume but exponentially complex at scale. 
          A single monolithic server can handle a few concurrent requests, but what happens when 10,000 users submit Python, C++, and Java code simultaneously?
        </p>
        <p>
          The challenges are unique:
        </p>
        <ul style={{ marginBottom: 'var(--space-4)', paddingLeft: 'var(--space-4)' }}>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Isolation:</strong> How do you prevent a malicious C user from deleting the file system?</li>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Resource Contention:</strong> How do you ensure a memory-hungry Java process doesn't starve the OS?</li>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Determinism:</strong> How do you guarantee that <code>print(1+1)</code> always outputs <code>2</code> within 100ms?</li>
          <li style={{ marginBottom: 'var(--space-2)' }}><strong>Latency:</strong> How do you minimize queue wait times during a contest spike?</li>
        </ul>
      </Section>

      <Section title="System Philosophy">
        <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-2)' }}>1. Strict Isolation</h3>
        <p>
          We assume every line of user code is malicious. Execution happens in ephemeral, strictly sandboxed environments with zero network access and hard resource limits.
        </p>

        <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-2)' }}>2. Asynchronous Everything</h3>
        <p>
          No HTTP request connects directly to a compiler. The Submission API accepts the job, pushes it to a durable queue, and returns an ID. 
          This decoupling allows the ingestion layer to survive load spikes that would crush a synchronous system.
        </p>

        <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-2)' }}>3. Storage Separation</h3>
        <p>
          Code artifacts, test cases, and binaries are stored in object storage (S3), not in databases or local disks. 
          This makes the compute workers stateless and disposable.
        </p>
      </Section>
    </div>
  );
};
