'use client'
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import NavBar from "@/components/custom/NavBar";
import { CarouselPlugin } from "@/components/custom/Carousel";
import Footer from "@/components/custom/Footer";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      
        <NavBar />

      <main className="flex-grow">
        <div className="flex flex-col md:mx-10 md:flex-row justify-around items-center gap-5 mt-10 mx-auto">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Welcome to the Publicly</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">A community-where you expose people sarcastically :|</p>
          </div>
          <CarouselPlugin />
        </div>
      </main>

      <Footer />
    </div>
  );
}
