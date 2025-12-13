import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';

const NavItem: React.FC<{ to: string; children: React.ReactNode; end?: boolean }> = ({ to, children, end }) => (
  <NavLink
    to={to}
    end={end}
    style={({ isActive }) => ({
      display: 'block',
      padding: 'var(--space-2) var(--space-4)',
      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
      textDecoration: 'none',
      borderLeft: isActive ? '2px solid var(--accent-primary)' : '2px solid transparent',
      background: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
      marginBottom: 'var(--space-1)',
      fontSize: '0.9rem',
      transition: 'all 0.2s ease'
    })}
  >
    {children}
  </NavLink>
);

export const WSLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', position: 'relative' }}>
      
      {/* Sidebar Navigation */}
      <nav style={{
        width: '280px',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        overflowY: 'auto',
        background: 'rgba(0, 0, 0, 0.5)', 
        backdropFilter: 'blur(10px)',
        borderRight: '1px solid var(--border-subtle)',
        padding: 'var(--space-6)',
        zIndex: 10
      }}>
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <Link to="/ws" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 'var(--space-2)' }}>WebSocket</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Scalable Real-time<br/>Architecture</div>
          </Link>
          <div style={{ marginTop: 'var(--space-4)' }}>
            <Link to="/" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textDecoration: 'underline' }}>&larr; Back to Portfolio</Link>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          <div>
            <h4 style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-3)',
              letterSpacing: '0.05em'
            }}>Documentation</h4>
            <NavItem to="/ws" end>Overview</NavItem>
            <NavItem to="/ws/architecture">Architecture</NavItem>
            <NavItem to="/ws/scaling">Scaling Strategy</NavItem>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{
        marginLeft: '280px',
        width: 'calc(100% - 280px)',
        minHeight: '100vh',
        padding: 'var(--space-8) var(--space-12)',
        maxWidth: '1200px'
      }}>
        <Outlet />
      </main>
    </div>
  );
};
