import React from 'react';
import { Link } from 'react-router-dom';

export const FloatingFlag: React.FC = () => {
  return (
    <Link to="/contact-pipeline" 
      style={{
        position: 'fixed',
        bottom: 'var(--space-8)',
        right: 'var(--space-8)',
        background: 'rgba(255, 255, 255, 0.05)', // Glassy background
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-primary)',
        padding: '12px 24px', // Smaller padding
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        zIndex: 1000,
        textDecoration: 'none',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem', // Smaller font
        fontWeight: 'bold',
        letterSpacing: '0.05em',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        transition: 'all 0.2s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-primary)';
        e.currentTarget.style.color = 'var(--accent-primary)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.5)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
        e.currentTarget.style.color = 'var(--text-primary)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
      }}
    >
      CONTACT SYSTEM →
    </Link>
  );
};
