import React from "react";

interface SectionProps {
  title?: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  title,
  id,
  children,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`section ${className}`}
      style={{
        padding: "var(--space-12) 0",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        {title && (
          <h2 style={{ fontSize: "1.5rem", marginBottom: "var(--space-6)" }}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
