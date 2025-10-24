"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ReactNode } from "react"

interface ThemeProviderProps {
  children: ReactNode
  attribute?: "class" | "data-theme"
  defaultTheme?: "system" | "light" | "dark"
  enableSystem?: boolean
}

export const ThemeProvider = ({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
}: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
    >
      {children}
    </NextThemesProvider>
  )
}


