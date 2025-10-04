'use client'

import Link from "next/link"
import NavBar from "@/components/custom/NavBar"
import Footer from "@/components/custom/Footer"
import { Button } from "@/components/ui/button"

export default function StoriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">

      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-xl mx-auto text-center px-6 py-20">
          <h1 className="text-3xl font-bold mb-4">Stories — Under development</h1>
          <p className="text-zinc-600 dark:text-zinc-300 mb-6">
            We are building a collection of community stories and featured posts.
            Check back soon — or help us by joining the community.
          </p>

          <div className="flex items-center justify-center gap-3">
            <Button asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/signup">Join</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}