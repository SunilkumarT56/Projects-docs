import React from 'react';
import { Section } from '../components/Section';

export const KnowledgeGraph: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>Knowledge Graph</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
        Modeling the intricate web of relationships between developers, tools, and code artifacts.
      </p>

      <Section title="Neo4j Implementation">
        <p>
          While analytical databases are excellent for aggregating rows, they struggle with recursive relationships. 
          We use <strong>Neo4j</strong> to traverse complex dependency chains efficiently.
        </p>
      </Section>

      <Section title="Graph Schema">
        <h3 style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-2)' }}>Node Types</h3>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
          <li><strong>Developer:</strong> The human agent.</li>
          <li><strong>Tool:</strong> VS Code, Terminal, Browser, GitHub.</li>
          <li><strong>Artifact:</strong> A file, a Pull Request, a specific error message string.</li>
          <li><strong>Concept:</strong> A topic in documentation (e.g., "Kubernetes Pods").</li>
        </ul>

        <h3 style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-2)' }}>Relationship Types</h3>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
          <li><code>(Developer)-[:MODIFIED]&rarr;(Artifact)</code></li>
          <li><code>(Developer)-[:ENCOUNTERED]&rarr;(Error)</code></li>
          <li><code>(Error)-[:RELATED_TO]&rarr;(Concept)</code></li>
          <li><code>(Developer)-[:READ]&rarr;(Concept)</code></li>
        </ul>
      </Section>

      <Section title="Uncovering Causality">
        <p>
          The graph allows us to answer questions that SQL cannot:
        </p>
        <blockquote style={{ borderLeft: '3px solid var(--accent-primary)', paddingLeft: 'var(--space-4)', margin: 'var(--space-4) 0', color: 'var(--text-secondary)' }}>
          "Did reading the documentation page for 'Deadlock Prevention' reduce the frequency of 'TransactionTimeout' errors for this team?"
        </blockquote>
        <p>
          By linking the <code>[:READ]</code> event to the subsequent decrease in <code>[:ENCOUNTERED]</code> edges, we can quantify the ROI of internal documentation.
        </p>
      </Section>
    </div>
  );
};
