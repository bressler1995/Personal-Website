import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/sidebar"
import { TransitionProvider } from "@/contexts/transition-context"
import '@fontsource/fira-code'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jane Doe - React Developer",
  description: "Portfolio of Jane Doe, a React Developer specializing in modern web applications.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#1a0f2e] text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TransitionProvider>
            <div className="flex h-screen overflow-hidden">
              <Sidebar />
              <main className="flex-1 overflow-auto">{children}</main>
            </div>
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

