import React from 'react';
import { Section } from '../../components/Section';

export const SecurityDCS: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Security & Isolation</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Defense in depth against untrusted code.
      </p>

      <Section title="Code Sandboxing">
        <p>
          We use <strong>gVisor</strong> (Google's user-space kernel) instead of standard runC containers. 
          Standard Docker shares the host kernel; a kernel exploit allows a breakout. 
          gVisor intercepts syscalls and handles them in user space, providing a heavy isolation layer similar to a VM but lightweight.
        </p>
      </Section>

      <Section title="Network Isolation">
        <p>
          The worker pods have a <code>NetworkPolicy</code> that denies all Egress traffic except to:
        </p>
        <ul>
          <li>S3 (Artifacts)</li>
          <li>Redis (Queue)</li>
        </ul>
        <p>
          User code cannot phone home, cannot launch a DDoS attack, and cannot reach the internal database.
        </p>
      </Section>

      <Section title="Resource Limits (cgroups)">
        <p>
          We enforce strict limits to prevent DoS:
        </p>
        <ul>
          <li><strong>PIDs:</strong> Max 20 processes (prevents fork bombs).</li>
          <li><strong>Memory:</strong> Max 256MB/512MB depending on language.</li>
          <li><strong>CPU:</strong> Hard throttled to 1 core.</li>
        </ul>
      </Section>
    </div>
  );
};
