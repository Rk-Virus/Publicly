'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"


const NavBar = () => {
    const { setTheme } = useTheme()
    const [mode, setMode] = useState('light');

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
    return (
        <>
            <Link href="/">Logo@publicly</Link>
            <nav >
                <ul className="flex justify-between gap-6">
                    <Button variant="ghost" size="icon" onClick={toogleTheme}>
                        {mode === 'light' ? <Moon /> : <Sun />}
                    </Button>

                    <Link href={"/login"}>Login</Link>
                    <li> <Link href={"/"}>Get the App</Link> </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar