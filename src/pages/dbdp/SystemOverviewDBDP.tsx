import React from 'react';
import { Section } from '../../components/Section';

export const SystemOverviewDBDP: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>System Overview</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        The end-to-end lifecycle of a deployment.
      </p>

      <Section title="The Lifecycle">
        <ol style={{ paddingLeft: 'var(--space-4)', lineHeight: '1.8' }}>
          <li>
            <strong>Trigger:</strong> User pushes to GitHub or runs <code>deploy-cli</code>.
            <br/>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A webhook or API call hits our Upload Service.</span>
          </li>
          
          <li>
            <strong>Ingestion:</strong> Upload Service clones the repo or accepts the file upload.
            <br/>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Files are stored in S3 under a temp location. A deployment ID is generated.</span>
          </li>

          <li>
            <strong>Queueing:</strong> A "Build Job" is pushed to Redis.
            <br/>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Status is set to <code>QUEUED</code>.</span>
          </li>

          <li>
            <strong>Building:</strong> A Worker pulls the job, spins up a Docker container.
            <br/>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Status is set to <code>BUILDING</code>. Source is downloaded, <code>npm install && npm run build</code> is executed.</span>
          </li>

          <li>
            <strong>Artifact Storage:</strong> The content of the <code>dist/</code> folder is uploaded to S3.
            <br/>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Status is set to <code>READY</code>.</span>
          </li>

          <li>
            <strong>Serving:</strong> User visits <code>project.platform.app</code>.
            <br/>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>The Reverse Proxy resolves the domain to the Deployment ID and streams files from S3.</span>
          </li>
        </ol>
      </Section>

      <Section title="Why Asynchronous?">
        <p>
          A build can take anywhere from 10 seconds to 10 minutes. 
          Keeping an HTTP connection open for 10 minutes is flaky and wasteful. 
          By detaching the "Request to Build" from the "Build Execution", we can handle thousands of concurrent requests instantly without clogging up worker threads.
        </p>
      </Section>
    </div>
  );
};
