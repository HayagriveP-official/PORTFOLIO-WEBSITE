import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const links = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'hayagrive.official@gmail.com',
    href: 'mailto:hayagrive.official@gmail.com',
  },
  {
    icon: <LinkedinIcon size={18} />,
    label: 'LinkedIn',
    value: 'Hayagrive P',
    href: '#',
  },
  {
    icon: <GithubIcon size={18} />,
    label: 'GitHub',
    value: 'hayagrive',
    href: '#',
  },
  {
    icon: <MapPin size={18} />,
    label: 'Location',
    value: 'Chennai, India',
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: 'clamp(5rem, 10vw, 8rem) 1.5rem clamp(4rem, 8vw, 6rem)',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Divider line */}
      <div style={{
        width: '100%',
        height: '1px',
        background: 'var(--border)',
        marginBottom: 'clamp(4rem, 8vw, 6rem)',
      }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '3rem',
        alignItems: 'start',
      }}>
        {/* Left — heading + note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}>
            // reach out
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.025em',
            lineHeight: 1.1,
            marginBottom: '1.25rem',
          }}>
            Let's Build<br />Something.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.975rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            maxWidth: '340px',
          }}>
            Currently open to full-time opportunities and interesting projects.
            If you have something in mind — let's talk.
          </p>

          <a
            href="mailto:hayagrive.official@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '2rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: 'var(--bg-primary)',
              background: 'var(--accent)',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px var(--accent-glow)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Say Hello <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* Right — contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07, ease: 'easeOut' }}
            >
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    padding: '0.9rem 1.1rem',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--border-accent)';
                    e.currentTarget.style.background = 'var(--bg-card-hover)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'var(--bg-card)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{
                    width: '34px', height: '34px',
                    borderRadius: '8px',
                    background: 'var(--accent-dim)',
                    border: '1px solid var(--border-accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)',
                    flexShrink: 0,
                  }}>
                    {link.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                      marginBottom: '0.1rem',
                    }}>
                      {link.label}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                    }}>
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                </a>
              ) : (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '0.9rem 1.1rem',
                }}>
                  <div style={{
                    width: '34px', height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(96,96,117,0.15)',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)',
                    flexShrink: 0,
                  }}>
                    {link.icon}
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                      marginBottom: '0.1rem',
                    }}>
                      {link.label}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                    }}>
                      {link.value}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
        }}>
          © 2025 Hayagrive P. Built with React + Vite.
        </p>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
        }}>
          Chennai, India
        </p>
      </motion.div>
    </section>
  );
}
