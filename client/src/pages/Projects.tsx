import { motion } from 'motion/react'
import { Page, PageHeading } from '../components/Page'
import { projects, type Project, type ProjectStatus } from '../data/projects'

const statusLabel: Record<ProjectStatus, string> = {
  live: '🟢 Live',
  'in-progress': '🛠️ In progress',
  planned: '🗺️ Planned',
  professional: '💼 Professional work',
  freelance: '💸 Freelance',
}

// Tailwind only generates classes it can see in the source, so map to full class names
// rather than building them like `bg-${color}`.
const bandColor: Record<Project['color'], string> = {
  accent: 'bg-accent',
  sky: 'bg-sky',
  sun: 'bg-sun',
  mint: 'bg-mint',
}

export function Projects() {
  return (
    <Page title="Projects">
      <PageHeading eyebrow="Projects">Things I've built.</PageHeading>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card card-hover flex flex-col overflow-hidden"
          >
            <div className={`border-line h-3 border-b-2 ${bandColor[p.color]}`} />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-muted mb-2 text-sm font-semibold">{statusLabel[p.status]}</p>
              <h2 className="mb-3 text-2xl font-bold">{p.title}</h2>
              <p className="text-muted mb-5 flex-1">{p.blurb}</p>
              <ul className="mb-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="bg-ink/10 rounded-full px-3 py-1 text-sm font-medium">
                    {t}
                  </li>
                ))}
              </ul>
              {(p.liveUrl || p.repoUrl) && (
                <div className="flex gap-3">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn bg-accent text-accent-ink text-sm"
                    >
                      Live site ↗
                    </a>
                  )}
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn bg-surface text-sm"
                    >
                      Code ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      <p className="text-muted mt-10 text-center">More projects on the way. Check back soon.</p>
    </Page>
  )
}
