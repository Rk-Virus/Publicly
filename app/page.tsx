'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center sm:p-20">
      <main>
        Here goes the content...
        <button onClick={() => {
          router.push("/about");
        }}>
          Go to about without link
        </button>
      </main>
    </div>
  );
}
