import { AnimatePresence, motion } from 'motion/react'
import { useState, type FormEvent } from 'react'
import { Page, PageHeading } from '../components/Page'
import { PaperPlane } from '../components/PaperPlane'
import { site } from '../data/site'

// 'mailto' = we handed off to the visitor's email app, which may not exist.
type Status = 'idle' | 'sending' | 'sent' | 'error' | 'mailto'

// Shown whenever we can't confirm the message went out, so nobody hits a dead end.
function EmailFallback({ intro }: { intro: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard can be blocked; the address is still visible to copy by hand.
    }
  }

  return (
    <div role="status" className="border-accent bg-accent/10 rounded-xl border-2 p-4">
      <p className="font-medium">{intro}</p>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <code className="font-semibold break-all">{site.email}</code>
        <button type="button" onClick={copy} className="btn bg-surface px-3 py-1 text-sm">
          {copied ? 'Copied ✓' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // No form service configured yet → open the visitor's email app instead.
    if (!site.formspreeId) {
      const subject = encodeURIComponent(`Hello from ${data.get('name')}`)
      const body = encodeURIComponent(
        `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`,
      )
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      // We can't detect whether an email app actually opened, so always offer the address.
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      // Later this URL becomes our own Express endpoint, e.g. POST /api/messages
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-xl border-2 border-line bg-surface px-4 py-3 placeholder:text-muted/70 focus:outline-none focus-visible:outline-3 focus-visible:outline-accent'

  return (
    <Page title="Contact">
      <PageHeading eyebrow="Contact">
        Let's <span className="text-accent">talk</span>.
      </PageHeading>

      <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
        <div className="space-y-4 text-lg">
          <p>
            Hiring, collaborating, or just want to say hi? Drop me a note and I'll get back to you
            quickly.
          </p>
          <p>
            Or email me directly at{' '}
            <a
              href={`mailto:${site.email}`}
              className="text-accent font-semibold underline underline-offset-4"
            >
              {site.email}
            </a>
          </p>
        </div>

        <div className="card relative overflow-hidden p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center"
              >
                {/* The plane takes off across the card */}
                <motion.div
                  initial={{ x: 0, y: 0, rotate: 0 }}
                  animate={{ x: 400, y: -200, rotate: -20, opacity: 0 }}
                  transition={{ duration: 1.4, ease: 'easeIn' }}
                  className="absolute top-1/2 left-1/2"
                >
                  <PaperPlane className="size-16" />
                </motion.div>
                <p className="font-display text-3xl font-bold">Message sent!</p>
                <p className="text-muted mt-2">Thanks for reaching out. I'll reply soon.</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn bg-surface mt-6"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <label className="block">
                  <span className="mb-1.5 block font-semibold">Name</span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Ada Lovelace"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-semibold">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="ada@example.com"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-semibold">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className={inputClass}
                    placeholder="We'd love to chat about…"
                  />
                </label>
                {status === 'error' && (
                  <EmailFallback intro="Hmm, that didn't send. Try again, or email me directly:" />
                )}
                {status === 'mailto' && (
                  <EmailFallback intro="Your email app should open with the message ready. If nothing happened, you can email me directly:" />
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn bg-accent text-accent-ink"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                  <PaperPlane className="size-5" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Page>
  )
}
