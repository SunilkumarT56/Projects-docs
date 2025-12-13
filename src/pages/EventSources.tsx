import React from 'react';
import { Section } from '../components/Section';

export const EventSources: React.FC = () => {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--space-8)' }}>Event Sources</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-12)' }}>
        Capturing high-fidelity signals at the source, ensuring data immutability and context preservation.
      </p>

      <Section title="Terminal Events">
        <p>
          The command line is the nervous system of engineering work. We instrument the shell using Zsh <code>preexec</code> and <code>precmd</code> hooks.
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)', marginTop: 'var(--space-4)' }}>
          <li><strong>Command Capture:</strong> Every executed command is hashed and timestamped. We capture the command string, arguments (sanitized for secrets), and the working directory.</li>
          <li><strong>Context:</strong> Environmental metadata such as <code>$TERM_SESSION_ID</code> allows us to link sequential commands into a coherent session.</li>
          <li>
            <strong>Why Zsh?</strong> Bash hooks are less reliable. Zsh is the default on macOS and widely used by power users. It offers superior hook integration for capturing exit codes and execution duration.
          </li>
        </ul>
      </Section>

      <Section title="Editor Events">
        <p>
          We utilize a custom VS Code extension to listen to the Language Server Protocol (LSP) and editor lifecycle events.
        </p>
        <div style={{ background: 'var(--bg-panel)', padding: 'var(--space-4)', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: 'var(--space-4)' }}>
          Event: FILE_SAVE<br/>
          Uri: file:///src/pages/Home.tsx<br/>
          Language: TypeScript<br/>
          Diagnostics: [ERROR TS2304 at line 12]<br/>
          Timestamp: 1702482120000
        </div>
        <p>
          By capturing error states at the moment of save, we can correlate "time spent debugging" with specific compiler errors, rather than just measuring "time in file".
        </p>
      </Section>

      <Section title="Browser Events">
        <p>
          A lightweight Chrome extension tracks interaction with internal documentation and known technical resources (StackOverflow, GitHub Issues).
        </p>
        <p>
          <strong>Privacy First:</strong> The extension operates on a strict allowlist. It does NOT capture general browsing history. It only emits events when a URL matches a regex for relevant engineering subdomains.
        </p>
      </Section>

      <Section title="GitHub Events">
        <p>
          Webhooks provide the final source of truth for code integration.
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
          <li><strong>Pull Requests:</strong> Creation, review comments, and merge timestamps.</li>
          <li><strong>Commits:</strong> Diff stats and file touches.</li>
        </ul>
        <p style={{ marginTop: 'var(--space-4)' }}>
          <strong>Why not just poll the API?</strong> Webhooks provide near real-time latency. Polling introduces unnecessary lag and consumes rate limits. We treat GitHub as a push-based event source to maintain parity with our realtime shell and editor streams.
        </p>
      </Section>
    </div>
  );
};
