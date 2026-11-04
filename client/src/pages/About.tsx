import { Page, PageHeading } from '../components/Page'

// Order matters: it loops, so the last card leads back into the first.
// Rhythm is pro → fun → pro → fun → fun, so the professional facts never bunch up.
const facts = [
  { emoji: '💻', label: 'Written code professionally', value: '8 years' },
  { emoji: '🌱', label: 'Favorite Pokémon', value: 'Oddish' },
  { emoji: '🌐', label: 'Production sites maintained at once', value: '70+' },
  { emoji: '🪐', label: 'Best Star Wars movie', value: 'Revenge of the Sith' },
  { emoji: '🥾', label: 'UNESCO Dual Pilgrimage completion', value: '50%' },
  { emoji: '📈', label: 'In 4 months', value: 'Intern → Engineer' },
  { emoji: '🐉', label: 'Magic: The Gathering games won', value: 'Over 1 Billion' },
  { emoji: '🌗', label: 'Preferred theme', value: 'Light mode (I know)' },
  { emoji: '🦟', label: 'Mosquitos Controlled (App Assisted)', value: 'Countless' },
  { emoji: '👮‍♂️', label: 'Hear me out', value: 'Leon S. Kennedy' },
  // { emoji: '🍺', label: 'Kegerator beer capacity', value: '3 taps' },
]

type Fact = (typeof facts)[number]

function FactCard({ fact }: { fact: Fact }) {
  return (
    <div className="card flex items-center gap-4 p-4">
      <span className="text-3xl" aria-hidden="true">
        {fact.emoji}
      </span>
      <div>
        <div className="font-display text-xl font-bold">{fact.value}</div>
        <div className="text-muted text-sm">{fact.label}</div>
      </div>
    </div>
  )
}

const skillGroups = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'C#', 'SQL', 'Java', 'C++'] },
  {
    label: 'Front end',
    items: ['React', 'HTML & CSS', 'Tailwind CSS', 'React Bootstrap', 'Vite', 'Responsive Design'],
  },
  { label: 'Testing', items: ['Playwright', 'End-to-End Testing', 'Regression Testing'] },
  { label: 'Cloud & tools', items: ['AWS', 'Azure', 'Docker', 'Git', 'REST APIs'] },
  { label: 'Practices', items: ['Accessibility (WCAG)', 'Agile / Scrum', 'IV&V'] },
]

export function About() {
  return (
    <Page title="About">
      <PageHeading eyebrow="About me">
        Hi, I'm <span className="text-accent">Tyler</span>.
      </PageHeading>

      <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            I'm a software engineer in Sacramento with eight years of experience building web
            applications that real people depend on: California health programs, the state's
            COVID-19 vaccine rollout, and research platforms for the U.S. Department of Energy.
          </p>
          <p>
            Most of my work lives in React and TypeScript, but I've also become the person who makes
            sure things don't break. I've built Playwright test suites that catch bugs before users
            do, and led verification efforts on large state projects. I care about accessible
            interfaces, clear information, and code the next person can actually read.
          </p>
          <p>
            Lately I've been leveling up on the full MERN stack, and this site is part of that. It
            started as a React front end and is growing into a full app with its own API.
          </p>
          <p>
            I studied software engineering at BYU–Idaho with a focus on graphics and game
            development. Outside of work I'm into aviation and making 3D art in Blender. I don't
            take myself too seriously, but I take the work seriously.
          </p>
        </div>

        {/*
          Infinite vertical marquee. The list is rendered twice and the track slides up by
          exactly 50% (one copy), so the loop is seamless. The mask fades both edges.
          Hover pauses it; "reduce motion" users get a normal scrollable list instead.

          Height: on desktop the <aside> is absolutely positioned inside this wrapper, so it adds
          no height of its own. The grid row is sized by the text alone, the wrapper stretches to
          match (grid's default), and the marquee fills it. On mobile it's a fixed height.
        */}
        <div className="relative">
          <aside
            aria-label="Quick facts"
            className="group h-[26rem] overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] motion-reduce:overflow-y-auto md:absolute md:inset-0 md:h-auto"
          >
            <div
              className="animate-scroll-up px-1 pr-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
              style={{ animationDuration: `${facts.length * 4}s` }}
            >
              {/* Padding (not gap) between cards keeps both copies exactly the same height */}
              <ul>
                {facts.map((f) => (
                  <li key={f.label} className="pb-4">
                    <FactCard fact={f} />
                  </li>
                ))}
              </ul>
              <ul aria-hidden="true" className="motion-reduce:hidden">
                {facts.map((f) => (
                  <li key={f.label} className="pb-4">
                    <FactCard fact={f} />
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="mb-5 text-3xl font-bold">Toolbox</h2>
        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.label} className="sm:flex sm:items-baseline sm:gap-4">
              <h3 className="text-muted mb-2 w-36 shrink-0 font-sans text-sm font-bold tracking-wide uppercase sm:mb-0">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li
                    key={s}
                    className="border-line bg-surface rounded-full border-2 px-4 py-1.5 font-medium"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Page>
  )
}
