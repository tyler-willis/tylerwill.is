import type { SVGProps } from 'react'

export function PaperPlane(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 30 58 8 44 56 31 40z"
        fill="var(--surface)"
        stroke="var(--line)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M31 40 58 8 24 35z"
        fill="var(--accent)"
        stroke="var(--line)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="m24 35 7 5-4 11z"
        fill="var(--line)"
        stroke="var(--line)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}
