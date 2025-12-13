import React from 'react';
import { Section } from '../../components/Section';

export const ExecutionTesting: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Execution & Test Case Handling</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Ensuring correctness and determinism.
      </p>

      <Section title="Test Case Format">
        <p>
          Tests are stored as a JSON array of I/O pairs:
        </p>
<pre style={{ background: 'var(--bg-panel)', padding: 'var(--space-4)', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
{`[
  { "input": "2 2", "output": "4" },
  { "input": "10 5", "output": "15" },
  { "input": "-1 -1", "output": "-2" }
]`}
</pre>
      </Section>

      <Section title="Matching Logic">
        <p>
          We perform a <strong>strict string comparison</strong> between the Expected Output and the User's STDOUT.
          However, to be forgiving, we normalize:
        </p>
        <ul>
          <li>Trailing whitespace (trimmed)</li>
          <li>Newlines (`\r\n` vs `\n`)</li>
        </ul>
        <p>
          For floating point problems, we use a custom comparator with an epsilon (e.g., `1e-6`) precision.
        </p>
      </Section>

      <Section title="Determinism">
        <p>
          We disable Address Space Layout Randomization (ASLR) inside the container to make memory addresses predictable (useful for debugging, though less secure for production—a tradeoff). 
          We also mock the system clock so that `Wait(1s)` behaves consistently regardless of server load.
        </p>
      </Section>
    </div>
  );
};
