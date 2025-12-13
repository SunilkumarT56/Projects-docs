const fs = require("fs");
const path = require("path");

const pages = [
  { name: "HomeDBDP", title: "Distributed Build & Deploy Platform" },
  { name: "SystemOverviewDBDP", title: "System Overview" },
  { name: "ArchitectureDBDP", title: "High-Level Architecture" },
  { name: "UploadServiceDBDP", title: "Upload Service" },
  { name: "CloningPipeline", title: "Repository Cloning Pipeline" },
  { name: "BuildQueue", title: "Queueing & Build Orchestration" },
  { name: "WorkerArchitectureDBDP", title: "Build Worker Architecture" },
  { name: "ContainerBuild", title: "Containerized Build System" },
  { name: "ArtifactStorage", title: "Artifact Storage Design (S3)" },
  { name: "DeploymentPipeline", title: "Deployment Pipeline" },
  { name: "StatusTrackingDBDP", title: "Status Tracking & Polling" },
  { name: "ReverseProxy", title: "Reverse Proxy & Routing" },
  { name: "RequestServing", title: "Request Handling & Serving" },
  { name: "ConsistencyDBDP", title: "Consistency & Idempotency" },
  { name: "FailureHandlingDBDP", title: "Failure Handling" },
  { name: "ScalabilityDBDP", title: "Scalability & Performance" },
  { name: "DesignDecisionsDBDP", title: "Design Decisions & Trade-offs" },
];

const dir = path.join(__dirname, "src", "pages", "dbdp");

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
