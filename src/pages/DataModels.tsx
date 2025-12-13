import React from 'react';
import { Section } from '../components/Section';

export const DataModels: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>Data Models</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
        Strict schema definitions ensure data quality in a distributed ecosystem.
      </p>

      <Section title="Canonical Event Schema">
        <p>
          All internal events wrap a common envelope:
        </p>
        <div style={{ background: 'var(--bg-panel)', padding: 'var(--space-4)', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
          &#123;<br/>
          &nbsp;&nbsp;"meta": &#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"event_id": "uuid-v4",<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"timestamp": "2023-10-27T10:00:00Z",<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"source": "vscode-extension",<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"schema_version": "1.2.0"<br/>
          &nbsp;&nbsp;&#125;,<br/>
          &nbsp;&nbsp;"payload": &#123; ... &#125;<br/>
          &#125;
        </div>
      </Section>

      <Section title="Versioning Strategy">
        <p>
          We strictly adhere to <strong>Semantic Versioning</strong> for schemas.
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
          <li><strong>Patch (1.0.x):</strong> Backward-compatible fixes (e.g., clarifying a description).</li>
          <li><strong>Minor (1.x.0):</strong> Backward-compatible additions (e.g., adding an optional field).</li>
          <li><strong>Major (x.0.0):</strong> Breaking changes (e.g., renaming a required field).</li>
        </ul>
        <p style={{ marginTop: 'var(--space-4)' }}>
          Major version changes require a coordinated migration. Consumers must support dual-reading both v1 and v2 schemas during the transition window.
        </p>
      </Section>

      <Section title="Schema Registry">
        <p>
          A centralized Confluent Schema Registry enforces compatibility checks at build time. 
          A producer cannot deploy code that violates the contract of the topic it writes to.
        </p>
      </Section>
    </div>
  );
};
