import React from 'react';
import { Section } from '../components/Section';
import { 
  SiNodedotjs, 
  SiZsh, 
  SiNginx, 
  SiAwslambda, 
  SiAmazonsqs, 
  SiApachekafka, 
  SiApachespark, 
  SiAmazons3, 
  SiNeo4J, 
  SiDocker, 
  SiFastify, 
  SiExpress, 
  SiAmazonec2, 
  SiGithub,
  SiApache
} from 'react-icons/si';

export const Home: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-6)', fontSize: '2.5rem' }}>ADK – Developer Activity Knowledge Graph</h1>
      
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <a 
          href="https://github.com/SunilkumarT56/ADK" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: 'var(--space-3) var(--space-4)',
            background: 'var(--bg-panel)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '6px',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            transition: 'border-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--text-secondary)'}
          onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
        >
          <SiGithub size={20} style={{ marginRight: 'var(--space-3)' }} />
          View Source on GitHub
        </a>
      </div>

      <p style={{ 
        fontSize: '1.25rem', 
        color: 'var(--text-secondary)', 
        marginBottom: 'var(--space-12)',
        maxWidth: '800px',
        lineHeight: '1.6'
      }}>
        A distributed, event-driven telemetry pipeline for capturing, analyzing, and modeling developer workflows.
      </p>

      <Section title="The Problem Space">
        <p>
          Developer productivity is notoriously difficult to quantify. Traditional metrics—lines of code, commit frequency, or ticket velocity—are lagging indicators that fail to capture the complexity of the engineering process. 
          They treat software development as a factory line rather than a creative, non-linear knowledge graph.
        </p>
        <p>
          <strong>Raw logs are insufficient.</strong> A commit log tells you <em>what</em> changed, but not <em>how</em> the developer reached that conclusion. It misses the context: the 30 minutes spent reading documentation, the 5 error stack traces encountered in the terminal, or the navigation patterns across the codebase that led to the final solution.
        </p>
      </Section>

      <Section title="System Philosophy">
        <p>
          ADK is built on three core engineering principles designed to bridge the gap between low-level telemetry and high-level insight.
        </p>

        <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-2)' }}>1. Store Everything, Decide Later</h3>
        <p>
          Storage is cheap; context is expensive. We capture immutable raw events from high-fidelity sources (shell, IDE, browser) without pre-aggregation. 
          By decoupling ingestion from analysis, we preserve the ability to ask new questions of historical data as our models evolve.
        </p>

        <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-2)' }}>2. Events are Facts</h3>
        <p>
          Every interaction is modeled as a discrete, immutable event in a time-series stream. 
          State is a derivation of events, not the primary truth. This event-sourcing approach ensures that we can replay history to correct errors or re-hydrate new data models without data loss.
        </p>

        <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-2)' }}>3. Graphs Reveal Causality</h3>
        <p>
          Numeric metrics (count, sum, avg) describe <em>what</em> happened. Graphs describe <em>why</em>. 
          By linking a developer entity to a tool entity via an action edge, and linking that tool to a documentation entity, we construct a semantic web of activity. 
          This allows us to traverse the causal chain from a documentation page view to a successful CLI command execution.
        </p>
      </Section>

      <Section title="Tech Stack">
        <p style={{ marginBottom: 'var(--space-8)' }}>
          Powered by industry-standard open source and cloud-native technologies.
        </p>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 'var(--space-6)',
          alignItems: 'center'
        }}>
          {[
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Zsh", icon: SiZsh },
            { name: "NGINX", icon: SiNginx },
            { name: "AWS Lambda", icon: SiAwslambda },
            { name: "AWS SQS", icon: SiAmazonsqs },
            { name: "Apache Kafka", icon: SiApachekafka },
            { name: "Apache Spark", icon: SiApachespark },
            { name: "Amazon S3", icon: SiAmazons3 },
            { name: "Apache Parquet", icon: SiApache },
            { name: "Neo4j", icon: SiNeo4J },
            { name: "Docker", icon: SiDocker },
            { name: "Fastify", icon: SiFastify },
            { name: "Express", icon: SiExpress },
            { name: "Amazon EC2", icon: SiAmazonec2 }, 
            { name: "GitHub Webhooks", icon: SiGithub },
          ].map((tech) => (
            <div key={tech.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)', width: '80px' }}>
              <tech.icon 
                size={40}
                style={{ opacity: 0.8, color: 'var(--text-primary)' }}
              />
              <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textAlign: 'center' }}>{tech.name}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
