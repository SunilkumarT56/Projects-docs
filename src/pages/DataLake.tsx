import React from 'react';
import { Section } from '../components/Section';

export const DataLake: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>Data Lake Design</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
        Immutable, columnar storage optimized for analytical query performance and cost efficiency.
      </p>

      <Section title="Storage Layers">
        <p>
          We employ a multi-zone strategy within Amazon S3:
        </p>
        <h3 style={{ marginTop: 'var(--space-6)' }}>1. Raw Zone</h3>
        <p>
          Events are dumped here in their original JSON/NDJSON format, partitioned by arrival date (`/raw/YYYY/MM/DD`). 
          This is the "break glass in case of emergency" layer. It is never modified.
        </p>
        
        <h3 style={{ marginTop: 'var(--space-6)' }}>2. Processed Zone</h3>
        <p>
          ETL jobs convert raw JSON into <strong>Parquet</strong>, a columnar file format. 
          Parquet allows us to compress data significantly (often 10x) and supports predicate pushdown (reading only the columns needed for a query).
        </p>
      </Section>

      <Section title="Why S3?">
        <p>
          S3 provides practically infinite scalability and 99.999999999% durability. 
          By separating compute (Spark) from storage (S3), we avoid the pitfalls of HDFS-style coupled architectures where adding disk space requires adding CPU.
        </p>
      </Section>

      <Section title="Schema Evolution">
        <p>
          Schemas change. New fields are added; old ones are deprecated. 
          We handle this by using a "schema-on-read" approach for the Raw Zone and explicit schema catalogs (AWS Glue) for the Processed Zone. 
          If a schema change is backward-incompatible, we branch the processing pipeline to a new versioned prefix (`/v2/events/`).
        </p>
      </Section>
    </div>
  );
};
