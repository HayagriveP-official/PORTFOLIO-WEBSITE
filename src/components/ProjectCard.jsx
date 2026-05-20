import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const typeColors = {
  SaaS: { color: '#00d4aa', bg: 'rgba(0,212,170,0.1)', border: 'rgba(0,212,170,0.25)' },
  Dashboard: { color: '#38bdf8', bg: 'rgba(56,189,248,0.1)', border: 'rgba(56,189,248,0.25)' },
  Analytics: { color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.25)' },
  'Interview Tool': { color: '#fb923c', bg: 'rgba(251,146,60,0.1)', border: 'rgba(251,146,60,0.25)' },
  'Dev Tools': { color: '#34d399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.25)' },
  'Document AI': { color: '#f472b6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.25)' },
  'Autonomous Vehicle': { color: '#fbbf24', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.25)' },
  IoT: { color: '#60a5fa', bg: 'rgba(96,165,250,0.1)', border: 'rgba(96,165,250,0.25)' },
};

const defaultTypeColor = { color: '#a0a0b0', bg: 'rgba(160,160,176,0.08)', border: 'rgba(160,160,176,0.2)' };

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
      layout
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '14px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'border-color 0.25s, background 0.25s, transform 0.25s, box-shadow 0.25s',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 12px 40px rgba(0,212,170,0.12), 0 0 0 1px rgba(0,212,170,0.25)',
        borderColor: 'rgba(0,212,170,0.35)',
        background: 'var(--bg-card-hover)',
      }}
    >
      {/* Badge (e.g. "Patented") */}
      {project.badge && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          fontWeight: 700,
          color: '#fbbf24',
          background: 'rgba(251,191,36,0.12)',
          border: '1px solid rgba(251,191,36,0.3)',
          borderRadius: '4px',
          padding: '0.2rem 0.55rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          {project.badge}
        </div>
      )}

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: '1.05rem',
        color: 'var(--text-primary)',
        letterSpacing: '-0.01em',
        lineHeight: 1.3,
        paddingRight: project.badge ? '5rem' : 0,
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.875rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        flex: 1,
      }}>
        {project.description}
      </p>

      {/* Project type chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.projectTypes.map(type => {
          const c = typeColors[type] || defaultTypeColor;
          return (
            <span key={type} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: c.color,
              background: c.bg,
              border: `1px solid ${c.border}`,
              borderRadius: '100px',
              padding: '0.2rem 0.6rem',
              letterSpacing: '0.02em',
            }}>
              {type}
            </span>
          );
        })}
      </div>

      {/* Tech stack tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {project.techStack.map(tech => (
          <span key={tech} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--text-muted)',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            padding: '0.18rem 0.5rem',
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* CTA buttons */}
      <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.25rem' }}>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '0.82rem',
            color: 'var(--bg-primary)',
            background: 'var(--accent)',
            borderRadius: '7px',
            padding: '0.55rem 0.875rem',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <ExternalLink size={13} /> View Live
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: '7px',
            padding: '0.55rem 0.875rem',
            textDecoration: 'none',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--border-accent)';
            e.currentTarget.style.color = 'var(--accent)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          <GithubIcon size={13} /> GitHub
        </a>
      </div>
    </motion.article>
  );
}
