import { site } from '../data/site'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-line mt-24 border-t-2">
      <div className="text-muted mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm sm:flex-row sm:px-6">
        <p>
          © {year} {site.name}. Favorite Emoji → 🙂‍↕️
        </p>
        <ul className="flex gap-4">
          {site.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent font-medium"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
