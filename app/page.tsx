"use client";

import { SessionProvider } from "next-auth/react"
import LoginBtn from "@/components/login-btn"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <SessionProvider>
          <LoginBtn></LoginBtn>
        </SessionProvider>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        test page
      </div>
    </main>
  )
}


