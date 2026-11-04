import { motion } from 'motion/react'
import { Link } from 'react-router'
import { Page } from '../components/Page'
import { PaperPlane } from '../components/PaperPlane'
import { RotatingTagline } from '../components/RotatingTagline'
import { site } from '../data/site'

const tiles = [
  { to: '/about', title: 'About', text: 'Who I am, minus the corporate voice.', color: 'bg-sky' },
  {
    to: '/projects',
    title: 'Projects',
    text: "Things I've built and am building.",
    color: 'bg-mint',
  },
  {
    to: '/experience',
    title: 'Experience',
    text: 'Eight years of shipping for the web.',
    color: 'bg-sun',
  },
  { to: '/contact', title: 'Contact', text: "Say hi. I'm friendly.", color: 'bg-accent' },
]

export function Home() {
  return (
    <Page>
      <section className="relative grid gap-10 py-6 md:grid-cols-[1fr_auto] md:items-center md:py-12">
        <div>
          <p className="text-muted mb-4 font-medium">Hi there 👋</p>
          <h1 className="text-5xl leading-[1.1] font-extrabold sm:text-7xl">
            Tyler Will<span className="text-accent">.is</span>
            <br />
            <span className="text-3xl font-bold sm:text-5xl">
              <RotatingTagline words={site.taglines} />
            </span>
          </h1>
          <p className="text-muted mt-8 max-w-xl text-lg">
            I'm a software engineer with eight years of experience building React and TypeScript
            apps for state agencies and national labs. I like clean code, accessible UIs, and test
            suites that catch bugs before users do.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="btn bg-accent text-accent-ink">
              See my work →
            </Link>
            <Link to="/contact" className="btn bg-surface">
              Get in touch
            </Link>
          </div>
        </div>

        {/* A gently bobbing paper plane. Decorative only. */}
        <motion.div
          className="hidden md:block"
          animate={{ y: [0, -14, 0], rotate: [-4, 3, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <PaperPlane className="size-56 drop-shadow-[6px_6px_0_var(--line)]" />
        </motion.div>
      </section>

      <section className="mt-16 grid gap-5 sm:grid-cols-2">
        {tiles.map((t, i) => (
          <motion.div
            key={t.to}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link to={t.to} className="card card-hover flex items-start gap-4 p-6">
              <span
                className={`border-line mt-1 size-4 shrink-0 rounded-full border-2 ${t.color}`}
              />
              <span>
                <span className="font-display block text-2xl font-bold">{t.title}</span>
                <span className="text-muted">{t.text}</span>
              </span>
            </Link>
          </motion.div>
        ))}
      </section>
    </Page>
  )
}
