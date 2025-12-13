import React from 'react';
import { Section } from '../../components/Section';

export const CPipeline: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>C/C++ Compilation Pipeline</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        The two-stage compilation and execution process.
      </p>

      <Section title="Stage 1: Compilation">
        <p>
          Unlike Python, C code must be compiled first. This introduces a failure mode before execution begins: <strong>Compilation Error (CE)</strong>.
        </p>
        <p>
          The worker invokes <code>gcc</code> inside a container. If the exit code is non-zero, the process halts immediately. The <code>stderr</code> (e.g., "missing semicolon") is captured and returned to the user as the feedback.
        </p>
      </Section>

      <Section title="Stage 2: Execution">
        <p>
          If compilation succeeds, we have a binary (<code>a.out</code>).
          We execute this binary against every test case input via STDIN, capturing STDOUT.
        </p>
      </Section>

      <Section title="Runtime Isolation">
        <p>
          A compiled binary is native code. It can try to segfault, allocate 10GB RAM, or fork bomb. 
          We use <strong>cgroups v2</strong> to hard-limit memory usage (e.g., 512MB) and CPU shares.
          We use <strong>seccomp-bpf</strong> to whitelist only safe syscalls (read, write, exit, brk) and kill the process instantly if it calls `execve` or `socket`.
        </p>
      </Section>
    </div>
  );
};
