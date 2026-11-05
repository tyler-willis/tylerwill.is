export interface Job {
  company: string
  role: string
  start: string // free text, e.g. "Mar 2021"
  end: string // "Present" for the current job
  highlights: string[]
  tech: string[]
}

// Newest first. Lead highlights with outcomes ("caught dozens of defects")
// rather than duties ("worked on testing").
export const jobs: Job[] = [
  {
    company: 'Public Consulting Group',
    role: 'Software Engineer III',
    start: 'Mar 2021',
    end: 'Present',
    highlights: [
      'Build and maintain React + TypeScript applications for California state agencies, integrating REST APIs and cloud services across AWS and Azure.',
      "Helped design and build California's DHCS PATH website: built many of its React components, shipped regular content updates, and designed a Playwright regression framework that caught dozens of defects before they reached production.",
      'Led Independent Verification & Validation (IV&V) efforts across multiple enterprise projects, including serving as Project Owner and Scrum Master for the CA Fi$Cal readiness assessment.',
      "Contributed to California's COVID-19 vaccine distribution system, and supported modernization work using Microsoft Power Platform.",
    ],
    tech: ['React', 'TypeScript', 'Playwright', 'AWS', 'Azure', 'Power Platform'],
  },
  {
    company: 'Pacific Northwest National Laboratory',
    role: 'Software Engineer',
    start: 'Sep 2019',
    end: 'Feb 2021',
    highlights: [
      'Kept 70+ production websites secure and up to date for scientific research organizations.',
      'Built reusable themes and interface components in close collaboration with designers and stakeholders.',
      'Designed and deployed a web platform for managing scientific sensor data for the U.S. Department of Energy.',
    ],
    tech: ['Drupal', 'Sass', 'JavaScript', 'PHP'],
  },
  {
    company: 'Pacific Northwest National Laboratory',
    role: 'Tech Intern IV',
    start: 'May 2019',
    end: 'Sep 2019',
    highlights: [
      'Streamlined development processes and worked through the Drupal team backlog.',
      'Hired on as a full-time developer at the end of the internship.',
    ],
    tech: ['Drupal', 'JavaScript'],
  },
  {
    company: 'Benton County Mosquito Control',
    role: 'Android Application Developer',
    start: 'Jan 2019',
    end: 'May 2019',
    highlights: [
      'Designed and built Mosquito MD Abatement, an offline-first Android app with custom map tile rendering for field technicians.',
      'Made pesticide tracking and reporting faster for field crews.',
    ],
    tech: ['Android', 'Java'],
  },
]
