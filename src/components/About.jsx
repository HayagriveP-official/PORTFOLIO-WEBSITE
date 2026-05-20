import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Medal, Award, FileText } from 'lucide-react';

const skillGroups = [
  {
    label: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'C'],
  },
  {
    label: 'Frontend',
    skills: ['React.js', 'HTML', 'CSS', 'Tailwind', 'Bootstrap'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    label: 'AI / ML',
    skills: ['Groq API', 'LangChain', 'ChromaDB', 'RAG Pipelines', 'LLMs'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Figma', 'Canva'],
  },
];

const accomplishments = [
  {
    icon: <Trophy size={18} />,
    title: 'IEEE YESIST\'12 2025 Grand Finale',
    subtitle: 'Finalist',
  },
  {
    icon: <Medal size={18} />,
    title: 'TOP 100 — ICT Talkathon, Chennai',
    subtitle: 'Gold',
  },
  {
    icon: <Award size={18} />,
    title: 'Best IEEE Student Volunteer Award',
    subtitle: 'Awardee',
  },
  {
    icon: <FileText size={18} />,
    title: 'Patent Holder',
    subtitle: 'SustainDine Delivery Wagon',
  },
];

const groupColors = [
  '#00d4aa', '#38bdf8', '#a78bfa', '#fb923c', '#f472b6', '#34d399'
];

function SectionHeading({ label, title }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: 'var(--accent)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '0.5rem',
      }}>
        {label}
      </p>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em',
        lineHeight: 1.15,
      }}>
        {title}
      </h2>
    </div>
  );
}

function SkillTags() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref}>
      {skillGroups.map((group, gi) => (
        <div key={group.label} style={{ marginBottom: '1.5rem' }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '0.6rem',
          }}>
            {group.label}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {group.skills.map((skill, si) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 12, scale: 0.92 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.35, delay: gi * 0.06 + si * 0.04, ease: 'easeOut' }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: groupColors[gi % groupColors.length],
                  background: `${groupColors[gi % groupColors.length]}14`,
                  border: `1px solid ${groupColors[gi % groupColors.length]}30`,
                  borderRadius: '6px',
                  padding: '0.3rem 0.75rem',
                  letterSpacing: '0.02em',
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <SectionHeading label="// who I am" title="About Me" />
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'start',
      }}>
        {/* Bio + Skills */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.0625rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
          }}>
            I'm a final-year Information Technology student at{' '}
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              Sri Sai Ram Institute of Technology, Chennai
            </span>
            . I build full-stack web applications and AI-integrated products using the{' '}
            <span style={{ color: 'var(--accent)' }}>MERN stack, GenAI APIs, and RAG pipelines</span>
            . I have a patent to my name, have competed at{' '}
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              IEEE YESIST'12 Grand Finale
            </span>
            , and I'm currently focused on building production-grade projects that solve real problems.
          </p>

          <SkillTags />
        </motion.div>

        {/* Accomplishments */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Highlights
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {accomplishments.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08, ease: 'easeOut' }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.875rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '1rem 1.1rem',
                  transition: 'border-color 0.2s, background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--border-accent)';
                  e.currentTarget.style.background = 'var(--bg-card-hover)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'var(--bg-card)';
                }}
              >
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'var(--accent-dim)',
                  border: '1px solid var(--border-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0,
                }}>
                  {a.icon}
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.15rem',
                  }}>
                    {a.title}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--accent)',
                  }}>
                    {a.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
