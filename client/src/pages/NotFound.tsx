import { Link } from 'react-router'
import { Page } from '../components/Page'

export function NotFound() {
  return (
    <Page title="Not found">
      <div className="py-16 text-center">
        <p className="font-display text-accent text-8xl font-extrabold">404</p>
        <h1 className="mt-4 text-3xl font-bold">Nothing to see here.</h1>
        <p className="text-muted mt-2">This page doesn't exist, or it moved somewhere else.</p>
        <Link to="/" className="btn bg-accent text-accent-ink mt-8">
          Back to home
        </Link>
      </div>
    </Page>
  )
}
