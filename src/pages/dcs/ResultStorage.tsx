import React from 'react';
import { Section } from '../../components/Section';

export const ResultStorage: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Result Storage Schema</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        The structure of truth.
      </p>

      <Section title="Result Schema">
        <p>
          The final <code>result.json</code> stored in S3 contains detailed metadata for the frontend to render.
        </p>
<pre style={{ background: 'var(--bg-panel)', padding: 'var(--space-4)', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
{`{
  "submission_id": "123e4567-e89b...",
  "status": "ACCEPTED", // or WRONG_ANSWER, TIME_LIMIT_EXCEEDED
  "score": 100,
  "runtime_ms": 42,
  "memory_kb": 1024,
  "test_cases": [
    { "id": 1, "status": "PASS", "runtime": 10 },
    { "id": 2, "status": "PASS", "runtime": 12 },
    { "id": 3, "status": "PASS", "runtime": 20 }
  ]
}`}
</pre>
      </Section>

      <Section title="Why JSON in S3?">
        <p>
          We do not parse this JSON into a Relational DB. 
          The detailed breakdown is only needed when the user views the "Submission Details" page. 
          For the "List Submissions" page, the DB only stores the high-level status (Passed/Failed) and score.
          This keeps the hot database index small and fast.
        </p>
      </Section>
    </div>
  );
};
