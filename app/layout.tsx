import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/sidebar"
import { TransitionProvider } from "@/contexts/transition-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
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
      <body className={`${inter.className}`}>
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

