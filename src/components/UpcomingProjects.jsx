import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { upcomingProjects } from '../data/projects';

const domainColors = {
  GenAI: { color: '#00d4aa', bg: 'rgba(0,212,170,0.08)', border: 'rgba(0,212,170,0.2)' },
  Analytics: { color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.2)' },
  'Full Stack': { color: '#38bdf8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.2)' },
  LLM: { color: '#fb923c', bg: 'rgba(251,146,60,0.08)', border: 'rgba(251,146,60,0.2)' },
  'Dev Tools': { color: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)' },
};
const defaultColor = { color: '#a0a0b0', bg: 'rgba(160,160,176,0.07)', border: 'rgba(160,160,176,0.18)' };

export default function UpcomingProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        padding: '0 1.5rem clamp(5rem, 10vw, 8rem)',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Section divider + heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ marginBottom: '2rem' }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}>
          <div style={{
            flex: 1,
            height: '1px',
            background: 'var(--border)',
          }} />
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            Coming Next
          </p>
          <div style={{
            flex: 1,
            height: '1px',
            background: 'var(--border)',
          }} />
        </div>

        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
          color: 'var(--text-secondary)',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          textAlign: 'center',
        }}>
          In the Pipeline
        </h2>
      </motion.div>

      {/* Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.1rem',
      }}>
        {upcomingProjects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
            style={{
              background: 'rgba(19,19,30,0.6)',
              border: '1px dashed rgba(0,212,170,0.18)',
              borderRadius: '14px',
              padding: '1.4rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.875rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 0 24px rgba(0,212,170,0.04), inset 0 0 40px rgba(0,212,170,0.02)',
              transition: 'border-color 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(0,212,170,0.35)';
              e.currentTarget.style.boxShadow = '0 0 32px rgba(0,212,170,0.1), inset 0 0 40px rgba(0,212,170,0.04)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(0,212,170,0.18)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(0,212,170,0.04), inset 0 0 40px rgba(0,212,170,0.02)';
            }}
          >
            {/* Muted overlay tint */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(10,10,15,0.3)',
              pointerEvents: 'none',
              borderRadius: '14px',
            }} />

            {/* Coming Soon badge */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              alignSelf: 'flex-start',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 600,
              color: 'var(--text-muted)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              padding: '0.2rem 0.55rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              <span style={{
                width: '5px', height: '5px',
                borderRadius: '50%',
                background: 'var(--text-muted)',
                display: 'inline-block',
              }} />
              Coming Soon
            </div>

            {/* Title */}
            <h3 style={{
              position: 'relative',
              zIndex: 1,
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              letterSpacing: '-0.01em',
            }}>
              {project.title}
            </h3>

            {/* Description */}
            <p style={{
              position: 'relative',
              zIndex: 1,
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
            }}>
              {project.description}
            </p>

            {/* Domain tags */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.35rem',
            }}>
              {project.techDomains.map(d => {
                const c = domainColors[d] || defaultColor;
                return (
                  <span key={d} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.67rem',
                    color: c.color,
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                    borderRadius: '4px',
                    padding: '0.18rem 0.5rem',
                    opacity: 0.75,
                  }}>
                    {d}
                  </span>
                );
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
