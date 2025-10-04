'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const NavBar = () => {
    const { setTheme } = useTheme()
    const [mode, setMode] = useState('light');
    const pathname = usePathname() ?? '/'

    const toogleTheme = () => {
        if(mode === 'light') {
            setTheme('dark');
            setMode('dark');
        }
        else {
            setTheme('light');
            setMode('light');
        }
    }

    const isActive = (path: string) => {
      if (path === "/") return pathname === "/" || pathname === ""
      return pathname === path || pathname.startsWith(path + "/")
    }

    const linkBase = "text-zinc-700 dark:text-zinc-300 hover:underline"
    const linkActive = "font-medium underline text-zinc-900 dark:text-zinc-100"

    return (
        <>
        <header className="p-4 px-8 flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-800/50">
            <Link href="/" className="font-semibold text-zinc-900 dark:text-zinc-100">Logo@publicly</Link>

            <nav>
                <ul className="flex items-center gap-6">
                    <li>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toogleTheme}
                        aria-label="Toggle theme"
                        className="flex items-center"
                      >
                        {mode === 'light' ? <Moon /> : <Sun />}
                      </Button>
                    </li>

                    <li>
                      <Link
                        href="/about"
                        className={`${linkBase} ${isActive("/about") ? linkActive : ""}`}
                      >
                        About
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/login"
                      >
                        Login
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/"
                      >
                        Get the App
                      </Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default NavBar