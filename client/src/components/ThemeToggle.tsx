import { AnimatePresence, motion } from 'motion/react'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="border-line bg-surface grid size-10 place-items-center overflow-hidden rounded-full border-2"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 20, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -20, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="text-lg leading-none"
          aria-hidden="true"
        >
          {isDark ? '🌙' : '☀️'}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
