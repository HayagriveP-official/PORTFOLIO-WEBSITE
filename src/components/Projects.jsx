import { useState, useMemo, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const TECH_DOMAINS = ['All', 'GenAI', 'RAG', 'LLM', 'MERN Stack', 'Full Stack', 'Real-Time', 'Analytics'];
const PROJECT_TYPES = ['All Types', 'SaaS', 'Dashboard', 'Analytics', 'Interview Tool', 'Dev Tools', 'Document AI', 'Autonomous Vehicle', 'IoT'];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [activeDomain, setActiveDomain] = useState('All');
  const [activeTypes, setActiveTypes] = useState(['All Types']);

  const toggleType = (type) => {
    if (type === 'All Types') {
      setActiveTypes(['All Types']);
      return;
    }
    setActiveTypes(prev => {
      const withoutAll = prev.filter(t => t !== 'All Types');
      if (withoutAll.includes(type)) {
        const next = withoutAll.filter(t => t !== type);
        return next.length === 0 ? ['All Types'] : next;
      }
      return [...withoutAll, type];
    });
  };

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const domainMatch = activeDomain === 'All' || p.techDomains.includes(activeDomain);
      const typeMatch = activeTypes.includes('All Types') || p.projectTypes.some(t => activeTypes.includes(t));
      return domainMatch && typeMatch;
    });
  }, [activeDomain, activeTypes]);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ marginBottom: '2.5rem' }}
      >
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          // what I build
        </p>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
        }}>
          Projects
        </h2>
      </motion.div>

      {/* Primary filter — tech domain tabs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        style={{
          display: 'flex',
          gap: '0.35rem',
          overflowX: 'auto',
          paddingBottom: '0.25rem',
          marginBottom: '1rem',
          scrollbarWidth: 'none',
        }}
      >
        <style>{`.domain-scroll::-webkit-scrollbar{display:none}`}</style>
        {TECH_DOMAINS.map(domain => (
          <button
            key={domain}
            onClick={() => setActiveDomain(domain)}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: activeDomain === domain ? 700 : 400,
              color: activeDomain === domain ? 'var(--bg-primary)' : 'var(--text-secondary)',
              background: activeDomain === domain ? 'var(--accent)' : 'transparent',
              border: `1px solid ${activeDomain === domain ? 'var(--accent)' : 'var(--border)'}`,
              borderRadius: '7px',
              padding: '0.45rem 0.9rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.18s ease',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              if (activeDomain !== domain) {
                e.currentTarget.style.borderColor = 'var(--border-accent)';
                e.currentTarget.style.color = 'var(--accent)';
              }
            }}
            onMouseLeave={e => {
              if (activeDomain !== domain) {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }
            }}
          >
            {domain}
          </button>
        ))}
      </motion.div>

      {/* Secondary filter — project type chips */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        style={{
          display: 'flex',
          gap: '0.4rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem',
          alignItems: 'center',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.06em',
          marginRight: '0.25rem',
        }}>
          type:
        </span>
        {PROJECT_TYPES.map(type => {
          const isActive = activeTypes.includes(type);
          return (
            <button
              key={type}
              onClick={() => toggleType(type)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: isActive ? 600 : 400,
                color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                background: isActive ? 'var(--accent-dim)' : 'transparent',
                border: `1px solid ${isActive ? 'var(--border-accent)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '100px',
                padding: '0.3rem 0.75rem',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'var(--border-accent)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                }
              }}
            >
              {type}
            </button>
          );
        })}
      </motion.div>

      {/* Result count */}
      <motion.p
        layout
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          marginBottom: '1.25rem',
        }}
      >
        {filtered.length} project{filtered.length !== 1 ? 's' : ''} found
      </motion.p>

      {/* Project grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '4rem 1rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
              }}
            >
              No projects match the selected filters.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
