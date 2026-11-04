import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

export function RotatingTagline({
  words,
  interval = 2600,
}: {
  words: readonly string[]
  interval?: number
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => window.clearInterval(id)
  }, [words.length, interval])

  return (
    // aria-live lets screen readers announce the change politely
    <span className="relative inline-block" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: '0.6em', opacity: 0, rotate: 2 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: '-0.6em', opacity: 0, rotate: -2 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="bg-sun text-ink inline-block rounded-xl px-3"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
