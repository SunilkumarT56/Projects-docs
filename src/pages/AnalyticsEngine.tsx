import React from 'react';
import { Section } from '../components/Section';

export const AnalyticsEngine: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>Analytics Engine</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
        Batch processing pipelines translating raw signals into actionable developer productivity metrics.
      </p>

      <Section title="Apache Spark Strategy">
        <p>
          We utilize Apache Spark for heavy-lifting analytics. 
          While Kafka Streams handles near-real-time transformation, Spark is superior for complex aggregations over large time windows (e.g., "Monthly Active Developers").
        </p>
      </Section>

      <Section title="Daily Pipeline">
        <p>
          Every night at 02:00 UTC, a DAG of Spark jobs kicks off:
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
          <li><strong>Session Reconstruction:</strong> Grouping discrete events into logical user sessions based on time gaps (e.g., 30 minutes of inactivity).</li>
          <li><strong>Metric Computation:</strong> Calculating `active_coding_time`, `pull_request_cycle_time`, and `documentation_bounce_rate`.</li>
          <li><strong>Anomaly Detection:</strong> Comparing today's metrics against a 30-day moving average to detect regressions in developer experience.</li>
        </ul>
      </Section>

      <Section title="Correctness > Freshness">
        <p>
          Why not real-time?
        </p>
        <p>
          Real-time metrics are noisy and often eventually consistent. For high-level decision making, exact numbers matter more than instant numbers. 
          Late-arriving events (e.g., a laptop coming back online after a flight) can skew real-time windows. 
          Batch processing allows us to handle late data gracefully and produce definitive daily reports.
        </p>
      </Section>

      <Section title="Example Output Metrics">
        <div style={{ background: 'var(--bg-panel)', padding: 'var(--space-4)', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
          &#123;<br/>
          &nbsp;&nbsp;"date": "2023-10-27",<br/>
          &nbsp;&nbsp;"team_id": "core-platform",<br/>
          &nbsp;&nbsp;"metrics": &#123;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"avg_pr_pickup_time_hours": 4.2,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"ide_error_frequency": 0.05,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;"context_switching_index": 12.4<br/>
          &nbsp;&nbsp;&#125;<br/>
          &#125;
        </div>
      </Section>
    </div>
  );
};
