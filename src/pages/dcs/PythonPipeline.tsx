import React from 'react';
import { Section } from '../../components/Section';

export const PythonPipeline: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>Python Compilation Pipeline</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Interpreted execution flow.
      </p>

      <Section title="Worker Loop">
        <p>
          The Python Worker runs an infinite loop consuming from <code>jobs:python</code>.
        </p>
<pre style={{ background: 'var(--bg-panel)', padding: 'var(--space-4)', borderRadius: '4px', overflowX: 'auto', fontSize: '0.85rem' }}>
{`while True:
    # 1. Block until job available
    _, job_id = redis.brpop('jobs:python')
    
    # 2. Update status
    redis.set(f'status:{job_id}', 'RUNNING')
    
    # 3. Fetch artifacts
    code = s3.download(f'{job_id}/source.py')
    tests = s3.download(f'{job_id}/tests.json')
    
    # 4. Execute
    result = run_sandbox(code, tests)
    
    # 5. Persist
    s3.upload(f'{job_id}/result.json', result)
    redis.set(f'status:{job_id}', 'COMPLETED')`}
</pre>
      </Section>

      <Section title="Execution Risks">
        <p>
          Python allows dynamic import and execution (<code>exec</code>, <code>eval</code>). 
          We must strictly limit the standard library. The sandbox (e.g., nsjail or gVisor) blocks access to:
        </p>
        <ul>
          <li><code>os.system</code> / <code>subprocess</code></li>
          <li>Network sockets</li>
          <li>File system writes (read-only rootfs)</li>
        </ul>
      </Section>
    </div>
  );
};
