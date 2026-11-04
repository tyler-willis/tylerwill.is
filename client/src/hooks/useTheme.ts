import { useCallback, useState } from 'react'

type Theme = 'light' | 'dark'

// The inline script in index.html sets the initial class before React loads;
// this hook just reads that state and keeps it in sync when toggled.
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('dark', next === 'dark')
      try {
        localStorage.setItem('theme', next)
      } catch {
        // Storage can be blocked (private mode); the toggle still works for this visit.
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
