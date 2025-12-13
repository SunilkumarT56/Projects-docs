import React from 'react';
import { Section } from '../../components/Section';

export const CompileServices: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Language-Specific Compile Services</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Why we don't use a generic "Execute Anything" worker.
      </p>

      <Section title="The Myth of Universal Workers">
        <p>
          It's tempting to build a single <code>Worker</code> class that takes a language string and switches logic. 
          However, the runtime requirements of different languages vary wildly:
        </p>
        <ul style={{ marginTop: 'var(--space-4)', paddingLeft: 'var(--space-4)' }}>
          <li><strong>C/C++:</strong> Needs heavy CPU for GCC optimization. Binary execution is insecure by default.</li>
          <li><strong>Java:</strong> Needs high memory startup (JVM overhead). Slow to boot.</li>
          <li><strong>Python/Node:</strong> Interpreted, fast startup, but single-threaded (GIL).</li>
        </ul>
      </Section>

      <Section title="Architecture: Segregated Worker Pools">
        <p>
          We deploy distinct Kubernetes Deployments for each language family:
        </p>
        <ul>
          <li><code>deployment/worker-python</code>: Replicas optimized for RAM (for analytics libraries).</li>
          <li><code>deployment/worker-cpp</code>: Replicas optimized for Compute (high CPU).</li>
        </ul>
        <p>
          This prevents "noisy neighbor" problems where a heavy C++ compilation starves a lightweight Python script.
        </p>
      </Section>
    </div>
  );
};
