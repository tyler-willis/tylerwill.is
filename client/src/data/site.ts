export const site = {
  name: 'Tyler Willis',
  domain: 'tylerwill.is',

  // Words that rotate after "Tyler Will.is" on the home page.
  taglines: [
    'building things for the web',
    'shipping TypeScript',
    'catching bugs before you do',
    'probably refactoring something',
    'learning something new',
    'open to new roles',
  ],

  email: 'Tyler.T.Willis@outlook.com',
  resumeUrl: '/resume.pdf',

  socials: [
    { label: 'GitHub', href: 'https://github.com/tyler-willis' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ttwillis1/' },
  ],

  // Free form backend until we build our own API. Create a form at
  // https://formspree.io and paste its ID (the part after /f/). Empty = mailto fallback.
  formspreeId: '',
} as const
