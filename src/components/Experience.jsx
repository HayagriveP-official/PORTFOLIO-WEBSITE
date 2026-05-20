import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    type: 'work',
    role: 'Web Development Intern',
    org: 'Altruisty Innovation Pvt Ltd',
    period: 'Jun 2025 – Aug 2025',
    bullets: [
      'Developed full-stack web applications using the MERN stack',
      'Built responsive UIs and RESTful APIs',
      'Collaborated via Git/GitHub in structured workflows',
    ],
  },
];

const education = [
  {
    type: 'edu',
    role: 'B.Tech — Information Technology',
    org: 'Sri Sai Ram Institute of Technology, Chennai',
    period: '2022 – 2026',
    bullets: [],
  },
  {
    type: 'edu',
    role: 'High School',
    org: 'The Hindu Senior Secondary School, Chennai',
    period: '2020 – 2022',
    bullets: [],
  },
];

function TimelineItem({ item, index, inView }) {
  const isWork = item.type === 'work';
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
      style={{
        display: 'flex',
        gap: '1.25rem',
        position: 'relative',
      }}
    >
      {/* Icon + line */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0,
      }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: isWork ? 'var(--accent-dim)' : 'rgba(56, 189, 248, 0.1)',
          border: `1px solid ${isWork ? 'var(--border-accent)' : 'rgba(56,189,248,0.3)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: isWork ? 'var(--accent)' : '#38bdf8',
          zIndex: 1,
        }}>
          {isWork ? <Briefcase size={16} /> : <GraduationCap size={16} />}
        </div>
        <div style={{
          width: '1px',
          flex: 1,
          background: 'var(--border)',
          marginTop: '6px',
        }} />
      </div>

      {/* Content */}
      <div style={{
        paddingBottom: '2rem',
        flex: 1,
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '0.3rem',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: '1rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
          }}>
            {item.role}
          </h3>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: isWork ? 'var(--accent)' : '#38bdf8',
            background: isWork ? 'var(--accent-dim)' : 'rgba(56,189,248,0.1)',
            border: `1px solid ${isWork ? 'var(--border-accent)' : 'rgba(56,189,248,0.25)'}`,
            borderRadius: '4px',
            padding: '0.15rem 0.5rem',
          }}>
            {item.period}
          </span>
        </div>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          marginBottom: item.bullets.length ? '0.75rem' : 0,
        }}>
          {item.org}
        </p>
        {item.bullets.length > 0 && (
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
          }}>
            {item.bullets.map((b, i) => (
              <li key={i} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                paddingLeft: '1rem',
                position: 'relative',
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: 'var(--accent)',
                  fontWeight: 700,
                }}>›</span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
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
        style={{ marginBottom: '3rem' }}
      >
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          // journey
        </p>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
        }}>
          Experience & Education
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem 4rem',
      }}>
        {/* Experience column */}
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Work
          </p>
          {experience.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} inView={inView} />
          ))}
        </div>

        {/* Education column */}
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Education
          </p>
          {education.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
