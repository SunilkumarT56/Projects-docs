const fs = require("fs");
const path = require("path");

const pages = [
  { name: "HomeDCS", title: "Distributed Compiler System" },
  { name: "SystemOverviewDCS", title: "System Overview" },
  { name: "SubmissionFlow", title: "Submission Flow" },
  { name: "UploadService", title: "Upload Service" },
  { name: "ObjectStorage", title: "Object Storage (S3)" },
  { name: "QueueingArchitecture", title: "Queueing Architecture (Redis)" },
  { name: "CompileServices", title: "Language-Specific Compile Services" },
  { name: "PythonPipeline", title: "Python Compilation Pipeline" },
  { name: "CPipeline", title: "C Compilation Pipeline" },
  { name: "ExecutionTesting", title: "Execution & Test Case Handling" },
  { name: "ResultStorage", title: "Result Storage & Artifacts" },
  { name: "StatusTracking", title: "Status Tracking & Polling" },
  { name: "Consistency", title: "Consistency & Idempotency" },
  { name: "FailureHandling", title: "Failure Handling" },
  { name: "ScalabilityDCS", title: "Scalability & Throughput" },
  { name: "SecurityDCS", title: "Security & Isolation" },
  { name: "DesignDecisionsDCS", title: "Design Decisions & Trade-offs" },
];

const dir = path.join(__dirname, "src", "pages", "dcs");

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

pages.forEach((page) => {
  const content = `import React from 'react';
import { Section } from '../../components/Section';

export const ${page.name}: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>${page.title}</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Detailed documentation for ${page.title} is coming soon.
      </p>
      <Section title="Overview">
        <p>This section will explain the design and implementation details of ${page.title}.</p>
      </Section>
    </div>
  );
};
`;

  fs.writeFileSync(path.join(dir, `${page.name}.tsx`), content);
  console.log(`Generated ${page.name}.tsx`);
});
