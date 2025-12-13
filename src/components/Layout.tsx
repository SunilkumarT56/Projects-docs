
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

export const Layout: React.FC = () => {
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
          <Link to="/adk" style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 'var(--space-2)' }}>ADK Docs</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Developer Activity<br/>Knowledge Graph</div>
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
            <NavItem to="/adk" end>Home</NavItem>
            <NavItem to="/adk/system-overview">System Overview</NavItem>
          </div>

          <div>
             <h4 style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-3)',
              letterSpacing: '0.05em'
            }}>Ingestion & Stream</h4>
            <NavItem to="/adk/event-sources">Event Sources</NavItem>
            <NavItem to="/adk/ingestion">Ingestion Layer</NavItem>
            <NavItem to="/adk/queue-streaming">Queue & Streaming</NavItem>
          </div>

          <div>
             <h4 style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-3)',
              letterSpacing: '0.05em'
            }}>Processing</h4>
            <NavItem to="/adk/workers">Worker Architecture</NavItem>
            <NavItem to="/adk/data-lake">Data Lake Design</NavItem>
            <NavItem to="/adk/analytics">Analytics Engine</NavItem>
            <NavItem to="/adk/knowledge-graph">Knowledge Graph</NavItem>
          </div>

          <div>
             <h4 style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-3)',
              letterSpacing: '0.05em'
            }}>Deep Dive</h4>
            <NavItem to="/adk/data-models">Data Models</NavItem>
            <NavItem to="/adk/semantics">Processing Semantics</NavItem>
            <NavItem to="/adk/failure-handling">Failure Handling</NavItem>
            <NavItem to="/adk/scalability">Scalability</NavItem>
            <NavItem to="/adk/security">Security</NavItem>
          </div>

          <div>
             <h4 style={{ 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              color: 'var(--text-secondary)', 
              marginBottom: 'var(--space-3)',
              letterSpacing: '0.05em'
            }}>Conclusion</h4>
            <NavItem to="/adk/design-decisions">Design Decisions</NavItem>
            <NavItem to="/adk/future">Future Extensions</NavItem>
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
      
      {/* Optional Tag for Right-Side ToC could go here eventually */}
    </div>
  );
};
