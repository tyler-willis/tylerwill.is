import { motion } from 'motion/react'
import { Page, PageHeading } from '../components/Page'
import { jobs } from '../data/experience'
import { site } from '../data/site'

export function Experience() {
  return (
    <Page title="Experience">
      <PageHeading eyebrow="Experience">Where I've worked.</PageHeading>

      <a href={site.resumeUrl} download className="btn bg-sun text-ink mb-12">
        ⬇ Download résumé (PDF)
      </a>

      {/* Timeline: a vertical line with a dot per job */}
      <ol className="border-line relative space-y-10 border-l-2 pl-8">
        {jobs.map((job, i) => (
          <motion.li
            key={`${job.company}-${job.start}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.05 }}
            className="relative"
          >
            <span className="border-line bg-accent absolute top-6 -left-[42px] size-5 rounded-full border-2" />
            <div className="card p-6">
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-2xl font-bold">
                  {job.role} <span className="text-muted">@ {job.company}</span>
                </h2>
                <span className="text-muted font-medium">
                  {job.start} – {job.end}
                </span>
              </div>
              <ul className="mb-4 list-disc space-y-1.5 pl-5">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <li key={t} className="bg-ink/10 rounded-full px-3 py-1 text-sm font-medium">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Page>
  )
}
