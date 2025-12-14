import React from 'react';
import { Link } from 'react-router-dom';

export const RateLimiter: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#000',
      color: '#fff',
      fontFamily: 'var(--font-primary)',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>High-Throughput Rate Limiter</h1>
      <p style={{ 
        color: 'var(--text-secondary)', 
        fontSize: '1.2rem', 
        marginBottom: 'var(--space-8)',
        fontFamily: 'var(--font-mono)' 
      }}>
        [ Working under process ]
      </p>
      <Link to="/" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
        &larr; Back to Portfolio
      </Link>
    </div>
  );
};
