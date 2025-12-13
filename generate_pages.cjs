const fs = require("fs");
const path = require("path");

const pages = [
  "Home",
  "SystemOverview",
  "EventSources",
  "IngestionLayer",
  "QueueStreaming",
  "WorkerArchitecture",
  "DataLake",
  "AnalyticsEngine",
  "KnowledgeGraph",
  "DataModels",
  "ProcessingSemantics",
  "FailureHandling",
  "Scalability",
  "Security",
  "DesignDecisions",
  "FutureExtensions",
];

const template = (name) => `import React from 'react';
import { Section } from '../components/Section';

export const ${name}: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>${name
        .replace(/([A-Z])/g, " $1")
        .trim()}</h1>
      <Section title="Overview">
        <p>Content for ${name} goes here.</p>
      </Section>
    </div>
  );
};
`;

if (!fs.existsSync("src/pages")) {
  fs.mkdirSync("src/pages", { recursive: true });
}

pages.forEach((page) => {
  const filePath = path.join("src/pages", page + ".tsx");
  fs.writeFileSync(filePath, template(page));
  console.log("Created " + page);
});
