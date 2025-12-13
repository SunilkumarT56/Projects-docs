import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header style={{ 
      padding: 'var(--space-16) 0', 
      borderBottom: '1px solid var(--border-subtle)' 
    }}>
      <div className="container">
        <div style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.875rem', 
          color: 'var(--text-secondary)', 
          marginBottom: 'var(--space-4)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          Documentation
        </div>
        <h1 style={{ 
          fontSize: '3rem', 
          lineHeight: '1.2', 
          marginBottom: 'var(--space-6)',
          maxWidth: '800px'
        }}>
          ADK – Developer Activity Knowledge Graph
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-secondary)', 
          maxWidth: '600px',
          lineHeight: '1.5'
        }}>
          Event-driven telemetry, analytics, and graph intelligence for developer workflows.
        </p>
      </div>
    </header>
  );
};
