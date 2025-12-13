import React from 'react';
import { Section } from '../../components/Section';

export const ArtifactStorage: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Artifact Storage Design (S3)</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        The immutable truth of a deployment.
      </p>

      <Section title="Structure">
        <p>
          We use a flat address space in S3, keyed by Deployment ID.
        </p>
        <code>s3://deployments/{`{deployment_id}`}/{`{file_path}`}</code>
        <p style={{ marginTop: 'var(--space-4)' }}>Example:</p>
        <ul>
          <li><code>deployments/dpl_x9js/index.html</code></li>
          <li><code>deployments/dpl_x9js/css/style.css</code></li>
        </ul>
      </Section>

      <Section title="Recursive Upload">
        <p>
          After the Docker build finishes, the worker walks the <code>dist/</code> folder.
          It uploads files in parallel to S3.
          Crucially, it sets the <strong>Content-Type</strong> header (e.g., <code>text/html</code>, <code>application/javascript</code>) during upload. S3 stores this metadata, so the serving layer doesn't need to guess it later.
        </p>
      </Section>

      <Section title="De-duplication (Optimization)">
        <p>
          <strong>Advanced:</strong> We can hash every file before upload. 
          If <code>logo.png</code> hasn't changed between deploys, we don't need to store it twice. 
          We can store it in a CAS (Content Addressable Storage) like <code>s3://blobs/{`{sha256}`}</code> and map the deployment to it. 
          <em>(Included for completeness, but V1 uses simple copy.)</em>
        </p>
      </Section>
    </div>
  );
};
