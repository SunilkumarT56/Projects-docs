import React from 'react';
import { Link } from 'react-router-dom';

export const HomeLeetCode: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#000',
      color: '#fff',
      fontFamily: 'var(--font-primary)'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>LeetCode Clone</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Nothing here yet.
      </p>
      <Link to="/" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
        &larr; Back to Portfolio
      </Link>
    </div>
  );
};
