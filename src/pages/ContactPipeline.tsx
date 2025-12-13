import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SiApachekafka, SiPostgresql, SiReact } from 'react-icons/si';
import { FaCheckCircle, FaPaperPlane, FaCog, FaEnvelope } from 'react-icons/fa';
import { TechBackground } from '../components/TechBackground';

// Glassy Pipeline Step
const PipelineStep: React.FC<{ 
  label: string; 
  icon: React.ReactNode;
  status: 'pending' | 'active' | 'completed';
  isLast?: boolean;
}> = ({ label, icon, status, isLast }) => {
  const isActiveOrDone = status !== 'pending';
  const isDone = status === 'completed';
  const isActive = status === 'active';

  return (
    <div style={{ position: 'relative', paddingBottom: isLast ? 0 : 'var(--space-8)' }}>
      {/* Connector Line */}
      {!isLast && (
        <div style={{
          position: 'absolute',
          left: '20px', // Center of icon (40px width / 2)
          top: '40px',
          bottom: -10,
          width: '2px',
          background: isActiveOrDone ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
          opacity: isActiveOrDone ? 1 : 0.5,
          transition: 'background 0.4s ease',
          zIndex: 0
        }} />
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', position: 'relative', zIndex: 1 }}>
        {/* Icon Indicator */}
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: `1px solid ${isActive ? 'var(--accent-primary)' : isActiveOrDone ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)'}`,
          background: isActiveOrDone ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: isActiveOrDone ? 'var(--accent-primary)' : 'var(--text-secondary)',
          boxShadow: isActive ? '0 0 15px var(--accent-primary)' : 'none',
          transition: 'all 0.3s ease',
        }}>
          {isDone ? <FaCheckCircle size={18} /> : icon}
        </div>
        
        {/* Label */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '1rem',
          color: isActiveOrDone ? '#fff' : 'var(--text-secondary)',
          opacity: status === 'pending' ? 0.5 : 1,
          transition: 'color 0.3s ease, opacity 0.3s ease',
          letterSpacing: '0.02em',
          fontWeight: isActiveOrDone ? 'bold' : 'normal',
          textShadow: isActive ? '0 0 10px rgba(100, 255, 218, 0.3)' : 'none'
        }}>
          {label}
        </div>
      </div>
    </div>
  );
};

export const ContactPipeline: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(0); 
  
  const steps = [
    { label: 'User Submits Message', icon: <FaPaperPlane size={16} /> },
    { label: 'Frontend Emit', icon: <SiReact size={18} /> },
    { label: 'Queued (Kafka)', icon: <SiApachekafka size={18} /> },
    { label: 'Consumer Processing', icon: <FaCog size={16} /> },
    { label: 'Stored in Database', icon: <SiPostgresql size={18} /> },
    { label: 'Notification Sent', icon: <FaEnvelope size={16} /> },
    { label: 'Completed', icon: <FaCheckCircle size={16} /> }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setStep(1);
  };

  useEffect(() => {
    if (step > 0 && step <= steps.length) {
      const timeout = setTimeout(() => {
        setStep(s => s + 1);
      }, 600); 
      return () => clearTimeout(timeout);
    }
  }, [step]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a0a',
      color: '#fff',
      fontFamily: 'var(--font-primary)',
      position: 'relative',
      overflow: 'hidden',
      padding: 'var(--space-8)'
    }}>
      <TechBackground />
      
      <div style={{
        display: 'flex',
        width: '100%',
        maxWidth: '1100px',
        minHeight: '600px',
        background: 'rgba(5, 5, 5, 0.9)', // Much darker black background
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Left Pane: Form */}
        <div style={{
          flex: 1,
          padding: 'var(--space-12)',
          display: 'flex',
          flexDirection: 'column',
          borderRight: '1px solid rgba(255, 255, 255, 0.05)',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <Link to="/" style={{ 
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontFamily: 'var(--font-mono)',
            marginBottom: 'var(--space-8)',
            display: 'inline-block'
          }}>
            &larr; BACK DO PORTFOLIO
          </Link>

          <div>
            <h1 style={{ marginBottom: 'var(--space-2)', fontSize: '2.5rem', letterSpacing: '-0.02em', background: 'linear-gradient(to right, #fff, #aaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Contact System
            </h1>
            <p style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-12)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', opacity: 0.8 }}>
              // Event-driven message pipeline
            </p>

            <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <label style={{ display: 'block', marginBottom: 'var(--space-2)', fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={step > 0}
                  style={{
                    width: '100%',
                    padding: 'var(--space-3) var(--space-4)',
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  placeholder="user@example.com"
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div style={{ marginBottom: 'var(--space-10)' }}>
                <label style={{ display: 'block', marginBottom: 'var(--space-2)', fontSize: '0.8rem', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>PAYLOAD MESSAGE</label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={step > 0}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: 'var(--space-3) var(--space-4)',
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  placeholder="Initiate sequence..."
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>

              <button 
                type="submit"
                disabled={(!email || !message) || (step > 0)}
                style={{
                  marginTop: 'var(--space-6)', // Added margin as requested
                  width: '100%',
                  padding: 'var(--space-3)',
                  background: 'var(--accent-primary)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#000',
                  fontWeight: 'bold',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  cursor: (step > 0 || !email || !message) ? 'default' : 'pointer',
                  opacity: (step > 0 || !email || !message) ? 0.5 : 1,
                  transition: 'all 0.2s',
                  boxShadow: (step === 0 && email && message) ? '0 0 20px rgba(100, 255, 218, 0.4)' : 'none'
                }}
              >
                {step > 0 ? 'PROCESSING...' : 'EMIT EVENT ->'}
              </button>
            </form>
          </div>
        </div>

        {/* Right Pane: System Pipeline */}
        <div style={{
          flex: 1,
          padding: 'var(--space-12)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(0,0,0,0.2)'
        }}>
          <div style={{ width: '100%', maxWidth: '350px' }}>
              {steps.map((s, index) => {
                let status: 'pending' | 'active' | 'completed' = 'pending';
                const stepNum = index + 1;
                
                if (step > stepNum) status = 'completed';
                if (step === stepNum) status = 'active';

                return (
                  <PipelineStep 
                    key={index}
                    label={s.label}
                    icon={s.icon}
                    status={status}
                    isLast={index === steps.length - 1}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
