import React from 'react';
import { Section } from '../../components/Section';

export const ObjectStorage: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Object Storage (S3 Design)</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Why blobs are better than bytes in a database.
      </p>

      <Section title="Folder Structure">
        <p>
          We use a predictable hierarchical structure keyed by Submission ID. This allows any component to locate artifacts without checking a database lookup table.
        </p>
<pre style={{ background: 'var(--bg-panel)', padding: 'var(--space-4)', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
{`s3://dcs-submissions/
└── {submission_id}/
    ├── source.code      # Original source file (e.g., main.py, solution.cpp)
    ├── tests.json       # The test cases used for this specific run
    ├── binary.out       # (Optional) The compiled binary for C/C++
    ├── result.json      # Final execution outcome
    └── stdio.log        # Captured stdout/stderr streams`}
</pre>
      </Section>

      <Section title="Immutability Guarantees">
        <p>
          Once written, submission artifacts are treated as <strong>immutable</strong>. 
          If a user edits their code, it is a <em>new submission</em> with a new ID. 
          We never update existing files. This dramatically simplifies caching and debugging—if you have the ID, you have the exact snapshot of state at that time.
        </p>
      </Section>

      <Section title="Cost & Durability Trade-offs">
        <p>
          <strong>Why not Database?</strong> Storing 5MB of source code or 50MB of compiler output in a PostgreSQL <code>TEXT</code> column causes massive bloat ("TOAST" overhead). 
          Databases are expensive per-GB. S3 is designed for cheap, durable storage of unlimited blobs.
        </p>
        <p>
          <strong>Durability:</strong> S3 provides 99.999999999% durability. We don't need to implement RAID or backups for user code; the cloud provider handles it.
        </p>
      </Section>
    </div>
  );
};
