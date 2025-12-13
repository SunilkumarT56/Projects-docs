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

export const DCSLayout: React.FC = () => {
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
          <Link to="/dcs" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 'var(--space-2)' }}>DCS Docs</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Distributed Compiler<br/>System</div>
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
            }}>Introduction</h4>
            <NavItem to="/dcs" end>Home</NavItem>
            <NavItem to="/dcs/system-overview">System Overview</NavItem>
            <NavItem to="/dcs/submission-flow">Submission Flow</NavItem>
          </div>

          <div>
             <h4 style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-3)',
              letterSpacing: '0.05em'
            }}>Core Services</h4>
            <NavItem to="/dcs/upload-service">Upload Service</NavItem>
            <NavItem to="/dcs/object-storage">Object Storage (S3)</NavItem>
            <NavItem to="/dcs/queues">Queueing (Redis)</NavItem>
            <NavItem to="/dcs/compile-services">Compile Services</NavItem>
          </div>

          <div>
             <h4 style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-3)',
              letterSpacing: '0.05em'
            }}>Pipelines</h4>
            <NavItem to="/dcs/python-pipeline">Python Pipeline</NavItem>
            <NavItem to="/dcs/c-pipeline">C Pipeline</NavItem>
            <NavItem to="/dcs/execution">Execution & Testing</NavItem>
            <NavItem to="/dcs/results">Result Storage</NavItem>
          </div>

          <div>
             <h4 style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-3)',
              letterSpacing: '0.05em'
            }}>System Properties</h4>
            <NavItem to="/dcs/status-tracking">Status Tracking</NavItem>
            <NavItem to="/dcs/consistency">Consistency</NavItem>
            <NavItem to="/dcs/failure-handling">Failure Handling</NavItem>
            <NavItem to="/dcs/scalability">Scalability</NavItem>
            <NavItem to="/dcs/security">Security</NavItem>
            <NavItem to="/dcs/design-decisions">Design Decisions</NavItem>
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
