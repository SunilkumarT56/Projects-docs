import React from 'react';
import { Section } from '../../components/Section';

export const SystemOverviewDCS: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>System Overview</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        End-to-end architecture of the distributed compilation pipeline.
      </p>

      <Section title="High-Level Architecture">
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--space-8)',
          background: 'var(--bg-panel)',
          padding: 'var(--space-4)',
          borderRadius: '8px',
          border: '1px solid var(--border-subtle)'
        }}>
          <img 
            src="/assets/compiler-design.png" 
            alt="Distributed Compiler System Architecture" 
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '4px'
            }}
          />
        </div>

        <p>
          This architecture strictly separates <strong>Ingestion</strong> from <strong>Execution</strong>.
          The ingestion layer is designed for high availability and low latency, accepting submissions as fast as the network allows.
          The execution layer is designed for throughput and isolation, processing jobs from the queue at a sustainable rate controlled by worker capacity.
        </p>
      </Section>

      <Section title="Data Flow">
        <ol style={{ paddingLeft: 'var(--space-4)', lineHeight: '1.8' }}>
          <li><strong>Submission:</strong> User POSTs code to <code>/submit</code>.</li>
          <li><strong>Ingestion:</strong> Upload Service validates payload, uploads code to S3, creates DB record, and pushes Job ID to Redis.</li>
          <li><strong>Queuing:</strong> Job sits in a language-specific Redis List (e.g., <code>queue:python</code>).</li>
          <li><strong>Processing:</strong> A Python Worker effectively performs a blocking pop (<code>BRPOP</code>) to reserve the job.</li>
          <li><strong>Execution:</strong> Worker pulls code/tests from S3, runs <code>docker run</code> (or equivalent sandbox), and captures streams.</li>
          <li><strong>Result:</strong> Worker pushes JSON result to S3 and updates status in Redis to <code>COMPLETED</code>.</li>
          <li><strong>Polling:</strong> Client polls <code>/status/:id</code> checking Redis for completion.</li>
        </ol>
      </Section>

      <Section title="Why not a Monolith?">
        <p>
          In a monolithic design, the web server would spawn a subprocess to compile code. This is disastrous at scale:
        </p>
        <ul style={{ marginTop: 'var(--space-4)', paddingLeft: 'var(--space-4)' }}>
          <li><strong>CPU Starvation:</strong> Compilation is CPU-intensive. A few heavy jobs would freeze the web server, timing out unrelated requests.</li>
          <li><strong>Security Risk:</strong> If a user escapes the sandbox in a monolith, they have access to the DB credentials and user sessions of the web server.</li>
          <li><strong>Scalability Limits:</strong> You can't scale the "web" part independently of the "compute" part. With microservices, we can auto-scale Python workers independently if Python submissions spike.</li>
        </ul>
      </Section>
    </div>
  );
};
