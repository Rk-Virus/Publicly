'use client'
import React from 'react'
import Link from "next/link"
import NavBar from "@/components/custom/NavBar"
import Footer from "@/components/custom/Footer"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
          <NavBar />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Publicly</h1>
          <p className="text-zinc-600 dark:text-zinc-300 mb-8">
            Publicly is a community-led effort to improve civic sense through small, consistent actions —
            awareness, volunteering and respectful use of public spaces.
          </p>

          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="text-center">
              <div className="text-xl font-semibold">24+</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-300">Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold">3.2k+</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-300">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold">18</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-300">Cities</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/login">Join the Community</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/stories">Explore Stories</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}