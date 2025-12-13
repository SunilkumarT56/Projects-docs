import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ 
      padding: 'var(--space-8) 0', 
      borderTop: '1px solid var(--border-subtle)',
      marginTop: 'var(--space-12)',
      color: 'var(--text-secondary)',
      fontSize: '0.875rem',
      fontFamily: 'var(--font-mono)'
    }}>
      <div className="container">
        <p>© {new Date().getFullYear()} ADK System Design. Internal Documentation.</p>
      </div>
    </footer>
  );
};
