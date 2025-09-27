'use client'
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import NavBar from "@/components/custom/NavBar";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <header className="p-4 flex justify-between items-center border-b">
        <NavBar />
      </header>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center sm:p-20">
        <main>
          Here goes the content...
          <Button onClick={() => {
            router.push("/about");
          }}>Go to about without link</Button>
        </main>
      </div>


    </>

  );
}
