import { motion } from 'motion/react'
import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { useTheme } from '../hooks/useTheme'
import { PaperPlane } from './PaperPlane'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const clicks = useRef(0)

  // Easter egg: click the plane 5 times quickly and the whole page does a barrel roll.
  const onLogoClick = () => {
    clicks.current += 1
    window.setTimeout(() => (clicks.current = Math.max(0, clicks.current - 1)), 1500)
    if (clicks.current >= 5) {
      clicks.current = 0
      const root = document.getElementById('root')
      root?.classList.remove('barrel-roll')
      void root?.offsetWidth // restart the animation if it's already applied
      root?.classList.add('barrel-roll')
    }
  }

  return (
    <header className="border-line bg-bg/85 sticky top-0 z-40 border-b-2 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          onClick={onLogoClick}
          className="group flex items-center gap-2"
          aria-label="Home"
        >
          <motion.span whileHover={{ rotate: -12, x: 3 }} className="inline-block">
            <PaperPlane className="size-9" />
          </motion.span>
          <span className="font-display text-xl font-extrabold">
            tylerwill<span className="text-accent">.is</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 font-medium transition-colors ${
                  isActive ? 'bg-ink text-bg' : 'hover:bg-ink/10'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="ml-2">
            <ThemeToggle theme={theme} onToggle={toggle} />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={toggle} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="border-line bg-surface grid size-10 place-items-center rounded-full border-2 font-bold"
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-line border-t-2 px-4 pb-4 md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 font-medium ${isActive ? 'bg-ink text-bg' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
