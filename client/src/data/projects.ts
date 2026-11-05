// When we add the backend, this shape becomes the MongoDB schema and this
// array becomes an API call. Keeping the type separate makes that swap easy.

export type ProjectStatus = 'live' | 'in-progress' | 'planned' | 'professional' | 'freelance'

export interface Project {
  slug: string
  title: string
  blurb: string
  tags: string[]
  status: ProjectStatus
  repoUrl?: string
  liveUrl?: string
  color: 'accent' | 'sky' | 'sun' | 'mint'
}

export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'tylerwill.is',
    blurb:
      "The site you're looking at. React 19, TypeScript, Tailwind v4 and Motion, built to grow into a full MERN app with its own API and admin dashboard.",
    tags: ['React', 'TypeScript', 'Tailwind', 'Motion', 'Vite'],
    status: 'in-progress',
    repoUrl: 'https://github.com/tyler-willis/tylerwill.is',
    color: 'accent',
  },
  {
    slug: 'dhcs-path',
    title: 'CA DHCS PATH: Regression Testing',
    blurb:
      'Designed a Playwright regression testing framework for a California Department of Health Care Services program. It caught dozens of defects across multiple production deployments.',
    tags: ['Playwright', 'E2E Testing', 'QA Automation'],
    status: 'professional',
    color: 'mint',
  },
  {
    slug: 'ne-sensor',
    title: 'NE Sensor',
    blurb:
      'A web platform for managing scientific sensor data for the U.S. Department of Energy, focused on usability, data visualization, and reliable access to complex information.',
    tags: ['Drupal', 'JavaScript', 'Sass'],
    status: 'professional',
    color: 'sky',
  },
  {
    slug: 'ca-vaccine',
    title: 'CA Vaccine Rollout',
    blurb:
      'Contributed to the system California used to distribute COVID-19 vaccines across the state.',
    tags: ['Public Sector', 'Healthcare'],
    status: 'professional',
    color: 'sun',
  },
  {
    slug: 'mosquito-md',
    title: 'Mosquito MD Abatement',
    blurb:
      'An offline-first Android app with custom map tile rendering, built so field technicians could track pesticide treatments without a signal.',
    tags: ['Android', 'Offline-first', 'Maps'],
    status: 'professional',
    color: 'mint',
  },
  {
    slug: 'bulk-nft-generation',
    title: 'Freelance 3D work',
    blurb:
      'I modeled assets in Blender and wrote a Python pipeline with Pillow to composite them into batches of unique animated GIFs. The buyers turned them into NFTs; I took the real money. 100% five-star reviews on Fiverr.',
    tags: ['Python', 'Pillow', 'Blender'],
    status: 'freelance',
    color: 'accent',
  },
  // {
  //   slug: 'preflight',
  //   title: 'Preflight (working title)',
  //   blurb:
  //     'A pilot weather briefing app: METARs and TAFs decoded into plain English, saved airports, and flight-category maps. MongoDB, Express, React, Node.',
  //   tags: ['MERN', 'Aviation', 'APIs'],
  //   status: 'planned',
  //   color: 'sky',
  // },
]
