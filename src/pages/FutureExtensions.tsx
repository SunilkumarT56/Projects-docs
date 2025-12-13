import React from 'react';
import { Section } from '../components/Section';

export const FutureExtensions: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>Future Extensions</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
        The roadmap for the next generation of developer intelligence.
      </p>

      <Section title="Real-Time Contextual Views">
        <p>
          We are prototyping a "Live View" dashboard using WebSockets and KSQL. 
          This would allow managers to see a pulse of team activity (e.g., "High error rate detected in service X deployment") with &lt;5s latency.
        </p>
      </Section>

      <Section title="ML-Driven Recommendations">
        <p>
          Training a reinforcement learning model on the Knowledge Graph to predict "Getting Unstuck". 
          If a developer is oscillating between a specific error message and a documentation page, the IDE plugin could proactively suggest a relevant internal solution.
        </p>
      </Section>

      <Section title="IDE Plugin Integration">
        <p>
          Closing the loop by feeding insights back to the developer where they work. 
          <strong>Concept:</strong> A "Personal Best" notification in VS Code when a developer breaks their own record for "clean compile streak" or "comprehensive test coverage".
        </p>
      </Section>
    </div>
  );
};
