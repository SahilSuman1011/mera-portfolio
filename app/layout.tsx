import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import "./globals.css"
import type { Metadata } from "next"
import type React from "react" // Added import for React

export const metadata: Metadata = {
  title: "Sahil Suman Portfolio",
  description: "Full Stack Developer building web applications and open source projects.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

