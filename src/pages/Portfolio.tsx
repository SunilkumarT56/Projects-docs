import React from 'react';
import { Link } from 'react-router-dom';
import { SiGithub } from 'react-icons/si';
import { FaDownload } from 'react-icons/fa';

import { TechBackground } from '../components/TechBackground';
import { FloatingFlag } from '../components/FloatingFlag';

export const Portfolio: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: 'var(--space-8)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <TechBackground />
      <FloatingFlag />
      <Link 
        to="/dbdp"
        style={{
          position: 'absolute',
          top: 'var(--space-6)',
          left: 'var(--space-6)',
          padding: 'var(--space-3) var(--space-4)',
          background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.8), rgba(10, 10, 10, 0.9))',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '30px',
          color: 'var(--text-secondary)',
          textDecoration: 'none',
          fontSize: '0.85rem',
          fontFamily: 'var(--font-mono)',
          transition: 'all 0.2s ease',
          zIndex: 100,
          maxWidth: 'calc(100% - var(--space-12))',
          textAlign: 'left'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.borderColor = 'var(--accent-primary)';
          e.currentTarget.style.color = 'var(--text-primary)';
          e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.1)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.borderColor = 'var(--border-subtle)';
          e.currentTarget.style.color = 'var(--text-secondary)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <span style={{ marginRight: 'var(--space-2)', fontSize: '1.1em' }}>⬆</span>
        This project is built and deployed using my own custom deployment engine.
      </Link>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          marginBottom: 'var(--space-4)',
          letterSpacing: '-0.03em'
        }}>
          Sunilkumar T
        </h1>
        <p style={{ 
          fontSize: '1rem', 
          color: 'var(--text-secondary)',
          marginBottom: 'var(--space-8)',
          maxWidth: '850px',
          lineHeight: '1.8',
          fontFamily: 'var(--font-mono)',
          /* fontSize removed to fix duplicate error, retaining initial 1rem or setting new default if needed */
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.0) 100%)',
          borderLeft: '4px solid var(--accent-primary)',
          padding: 'var(--space-4) var(--space-6)',
          borderRadius: '0 8px 8px 0',
          letterSpacing: '0.05em',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}>
          <span style={{ color: 'var(--accent-primary)', marginRight: '8px' }}>&gt;</span>
          CSE @ PSG Tech <span style={{ color: 'var(--border-subtle)', margin: '0 8px' }}>//</span> 
          Backend Developer <span style={{ color: 'var(--border-subtle)', margin: '0 8px' }}>//</span> 
          DevOps & Distributed Systems <span style={{ color: 'var(--border-subtle)', margin: '0 8px' }}>//</span> 
          System Design
        </p>

        <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-12)' }}>
          <a 
            href="https://github.com/SunilkumarT56" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: 'var(--space-3) var(--space-4)',
              background: 'var(--bg-panel)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '6px',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              transition: 'border-color 0.2s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--text-secondary)'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
          >
            <SiGithub size={18} style={{ marginRight: 'var(--space-2)' }} />
            GitHub Profile
          </a>

          <a 
            href="/assets/RESUME.pdf" 
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: 'var(--space-3) var(--space-4)',
              background: 'var(--accent-primary)', // Highlight color for resume
              border: '1px solid transparent',
              borderRadius: '6px',
              color: '#000', // Black text on white/accent
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              transition: 'opacity 0.2s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            <FaDownload size={14} style={{ marginRight: 'var(--space-2)' }} />
            Download Resume
          </a>
        </div>
      </div>

      <style>
        {`
          .project-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--space-6);
            width: 100%;
          }
          @media (min-width: 768px) {
            .project-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}
      </style>

      <div style={{ 
        padding: '0 var(--space-4)', 
        width: '100%', 
        maxWidth: '1000px',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{ 
          fontSize: '1.25rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em',
          color: 'var(--text-secondary)',
          marginBottom: 'var(--space-8)',
          textAlign: 'center'
        }}>
          My Projects
        </h2>

        <div className="project-grid">
          {/* ADK Card */}
          <Link to="/adk" style={{ textDecoration: 'none' }}>
            <div 
              style={{
                background: 'var(--bg-panel)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: 'var(--space-8)',
                textAlign: 'left',
                transition: 'transform 0.2s, border-color 0.2s',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--text-primary)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-2)' }}>ADK</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', flex: 1 }}>
                Developer Activity Knowledge Graph. A distributed telemetry pipeline design.
              </p>
              <div style={{ 
                marginTop: 'var(--space-4)', 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.85rem', 
                color: 'var(--accent-highlight)' 
              }}>
                View Documentation &rarr;
              </div>
            </div>
          </Link>
          
          {/* DCS Card */}
          <Link to="/dcs" style={{ textDecoration: 'none' }}>
            <div 
              style={{
                background: 'var(--bg-panel)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: 'var(--space-8)',
                textAlign: 'left',
                transition: 'transform 0.2s, border-color 0.2s',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--text-primary)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-2)' }}>Distributed Compiler</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', flex: 1 }}>
                A high-throughput distributed system for secure code compilation and execution.
              </p>
              <div style={{ 
                marginTop: 'var(--space-4)', 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.85rem', 
                color: 'var(--accent-highlight)' 
              }}>
                View Documentation &rarr;
              </div>
            </div>
          </Link>

          {/* DBDP Card */}
          <Link to="/dbdp" style={{ textDecoration: 'none' }}>
            <div 
              style={{
                background: 'var(--bg-panel)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: 'var(--space-8)',
                textAlign: 'left',
                transition: 'transform 0.2s, border-color 0.2s',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--text-primary)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-2)' }}>Build & Deploy Platform</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', flex: 1 }}>
                A Vercel-inspired distributed frontend build and deployment system.
              </p>
              <div style={{ 
                marginTop: 'var(--space-4)', 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.85rem', 
                color: 'var(--accent-highlight)' 
              }}>
                View Documentation &rarr;
              </div>
            </div>
          </Link>

          {/* WS Architecture Card */}
          <Link to="/ws" style={{ textDecoration: 'none' }}>
            <div 
              style={{
                background: 'var(--bg-panel)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: 'var(--space-8)',
                textAlign: 'left',
                transition: 'transform 0.2s, border-color 0.2s',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--text-primary)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--space-2)' }}>Scalable WebSockets</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', flex: 1 }}>
                Scaling real-time messaging using NGINX, Redis Pub/Sub, and Docker.
              </p>
              <div style={{ 
                marginTop: 'var(--space-4)', 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.85rem', 
                color: 'var(--accent-highlight)' 
              }}>
                View Documentation &rarr;
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
