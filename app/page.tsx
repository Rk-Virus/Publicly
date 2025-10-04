'use client'
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/custom/NavBar";
import { CarouselPlugin } from "@/components/custom/Carousel";
import Footer from "@/components/custom/Footer";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <NavBar />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Hero: improved for large screens */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
            {/* Left: content (span fewer cols on very large screens) */}
            <div className="mx-auto md:mx-0 text-center md:text-left lg:col-span-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                Join Publicly.
              </h1>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300 max-w-xl">
                Spread the awareness sarcastically.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <Button size="lg" onClick={() => router.push("/login")}>Join Community</Button>
                <Button variant="outline" size="lg" onClick={() => router.push("/stories")}>Explore Stories</Button>
              </div>

              
            </div>

            {/* Right: carousel (span more cols on large screens) */}
            <div className="w-full lg:col-span-7">
                  <CarouselPlugin />
            </div>
          </section>

          {/* Featured (simple) */}
          <section className="mt-12">
            <h2 className="text-xl font-semibold mb-4 text-center md:text-left">Top stories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-lg p-4 shadow-sm">
                <h3 className="font-medium">How small habits build civic pride</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Simple actions like disposing trash responsibly create visible impact.</p>
              </article>

              <article className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-lg p-4 shadow-sm">
                <h3 className="font-medium">Volunteer spotlight: Local heroes</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Meet volunteers making a difference in their communities.</p>
              </article>

              <article className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-lg p-4 shadow-sm">
                <h3 className="font-medium">Policy wins for cleaner streets</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Recent initiatives that improved public infrastructure and behavior.</p>
              </article>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
