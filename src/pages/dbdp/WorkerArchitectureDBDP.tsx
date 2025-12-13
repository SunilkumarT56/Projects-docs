import React from 'react';
import { Section } from '../../components/Section';

export const WorkerArchitectureDBDP: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Build Worker Architecture</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        The engine room.
      </p>

      <Section title="Stateless Workers">
        <p>
          Workers are standard Node.js/Go processes running in a Kubernetes Deployment.
          They have <strong>no local state</strong>.
          If a worker dies, the job times out in Redis (via processing-queue pattern) and is picked up by another worker.
        </p>
      </Section>

      <Section title="The Processing Loop">
        <p>
          The worker lifecycle is simple:
        </p>
        <pre style={{ background: 'var(--bg-panel)', padding: 'var(--space-4)', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
{`async function loop() {
  while (true) {
    // 1. Block for job
    const job = await redis.brpop('build-queue', 0);
    
    // 2. Report status
    await redis.hset(\`status:\${job.id}\`, 'status', 'BUILDING');
    
    // 3. Execute
    try {
      await build(job); // spins up Docker
      await redis.hset(\`status:\${job.id}\`, 'status', 'READY');
    } catch (e) {
      await redis.hset(\`status:\${job.id}\`, 'status', 'ERROR');
    }
  }
}`}
        </pre>
      </Section>

      <Section title="Disposable Compute">
        <p>
          Workers themselves are just orchestrators. They don't run <code>npm install</code> directly. 
          They spawn a <strong>child Docker container</strong> for that.
          This ensures that if a build exhausts memory, only the container dies, not the worker process managing the queue.
        </p>
      </Section>
    </div>
  );
};
