import { motion } from 'motion/react'
import { useEffect, type ReactNode } from 'react'
import { site } from '../data/site'

interface PageProps {
  title?: string // browser tab title; omit for the home page
  children: ReactNode
}

// Every page wraps itself in this: sets the tab title and animates in/out.
export function Page({ title, children }: PageProps) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : `${site.name} — Developer`
  }, [title])

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 sm:pt-16"
    >
      {children}
    </motion.main>
  )
}

export function PageHeading({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <header className="mb-10">
      <p className="font-display text-accent mb-2 font-bold tracking-wide uppercase">{eyebrow}</p>
      <h1 className="text-4xl font-extrabold sm:text-6xl">{children}</h1>
    </header>
  )
}
