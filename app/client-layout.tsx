"use client"

import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/sidebar"
import PageTransitionLayout from "@/components/page-transition-layout"
import { TransitionProvider, useTransition } from "@/contexts/transition-context"

function MainContent({ children }: { children: React.ReactNode }) {
  const { isTransitioning } = useTransition()

  return (
    <main
      className={`flex-1 overflow-auto transition-[overflow] duration-300 ${isTransitioning ? "overflow-hidden" : ""}`}
    >
      <PageTransitionLayout>{children}</PageTransitionLayout>
    </main>
  )
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style jsx global>{`
        /* Customize scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background-color: rgba(155, 155, 155, 0.5);
          border-radius: 20px;
          border: 3px solid transparent;
          background-clip: content-box;
        }
        /* Customize scrollbar for Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
        }
      `}</style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TransitionProvider>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <MainContent>{children}</MainContent>
          </div>
        </TransitionProvider>
      </ThemeProvider>
    </>
  )
}

