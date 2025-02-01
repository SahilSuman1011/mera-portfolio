import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import "./globals.css"
import type React from "react" // Added import for React

export const metadata = {
  title: "Sahil Suman Portfolio",
  description: "Full Stack Developer building web applications and open source projects.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="flex min-h-screen flex-col bg-background">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

