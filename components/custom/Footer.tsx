import React from 'react'
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl md:mx-10 px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-sm">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Publicly</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              A community-driven effort to raise civic sense through awareness, volunteering, and local initiatives.
            </p>
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">© {new Date().getFullYear()} Publicly — Built for better public life</p>
          </div>

          <div className="flex gap-16 md:gap-32">
            <div>
              <h4 className="font-medium text-sm text-zinc-900 dark:text-zinc-100">Explore</h4>
              <ul className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 space-y-2">
                <li><a className="hover:underline text-zinc-600 dark:text-zinc-300" href="/about">About</a></li>
                <li><a className="hover:underline text-zinc-600 dark:text-zinc-300" href="/posts">Stories</a></li>
                <li><a className="hover:underline text-zinc-600 dark:text-zinc-300" href="/join">Join</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-sm text-zinc-900 dark:text-zinc-100">Connect</h4>
              <ul className="mt-3 text-sm text-zinc-600 dark:text-zinc-300 space-y-2">
                <li><a className="hover:underline text-zinc-600 dark:text-zinc-300" href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a className="hover:underline text-zinc-600 dark:text-zinc-300" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a className="hover:underline text-zinc-600 dark:text-zinc-300" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-72">
            <h4 className="font-medium text-sm text-zinc-900 dark:text-zinc-100">Stay updated</h4>
            <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                aria-label="Your email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-md border px-3 py-2 text-sm bg-zinc-50 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100"
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">No spam — unsubscribe anytime.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer