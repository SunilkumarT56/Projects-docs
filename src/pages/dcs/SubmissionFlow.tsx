import React from 'react';
import { Section } from '../../components/Section';

export const SubmissionFlow: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Submission Flow</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Detailed lifecycle of a submission request.
      </p>

      <Section title="1. The Request (POST /submit)">
        <p>
          The lifecycle begins when a user client sends a payload containing the source code, language identifier, and problem ID.
        </p>
<pre style={{ background: 'var(--bg-panel)', padding: 'var(--space-4)', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
{`POST /api/v1/submit
Content-Type: application/json

{
  "language": "python3",
  "problem_id": "two-sum",
  "code": "def solution(nums, target):\\n    ..."
}`}
</pre>
      </Section>

      <Section title="2. Validation & ID Generation">
        <p>
          The Upload Service performs immediate validation:
        </p>
        <ul>
          <li>Does the problem ID exist?</li>
          <li>Is the language supported?</li>
          <li>Is the code size within limits (e.g., &lt; 64KB)?</li>
        </ul>
        <p>
          If valid, a unique <strong>Submission ID</strong> (UUID v4 or Snowflake ID) is generated immediately. This ID becomes the canonical reference for all downstream artifacts.
        </p>
      </Section>

      <Section title="3. Asynchronous Handoff">
        <p>
          Crucially, the server does <strong>not</strong> wait for compilation. 
        </p>
        <p>
          1. <strong>Persist Artifacts:</strong> The source code is uploaded to S3 at <code>submissions/{`{id}`}/source.py</code>.<br/>
          2. <strong>Persist State:</strong> A database record is created with <code>state: QUEUED</code>.<br/>
          3. <strong>Enqueue:</strong> The ID is pushed to the Redis list <code>queue:python3</code>.
        </p>
        <p>
          The HTTP response is returned immediately with the Submission ID. Latency is dominated only by the S3 upload speed, typically &lt; 100ms.
        </p>
      </Section>

      <Section title="4. Queue Selection Logic">
        <p>
          The system maintains separate queues for separate languages. This ensures <strong>Quality of Service (QoS)</strong>. 
          If there is a massive backlog of 10,000 C++ submissions from a contest, Python users are unaffected because their submissions go to a different Redis list and are consumed by a different pool of workers.
        </p>
      </Section>
    </div>
  );
};
