import { useCallback, useEffect, useState } from "react"

export type Theme = "light" | "dark"

const STORAGE_KEY = "theme"
const darkQuery = () => window.matchMedia("(prefers-color-scheme: dark)")

function systemTheme(): Theme {
  return darkQuery().matches ? "dark" : "light"
}

function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === "light" || value === "dark" ? value : null
  } catch {
    return null
  }
}

/**
 * Applique le thème sur <html> en coupant les transitions le temps d'un
 * reflow, pour que les tuiles basculent d'un bloc au lieu de fondre chacune
 * à sa propre vitesse.
 */
function applyTheme(theme: Theme) {
  const style = document.createElement("style")
  style.textContent = "*,*::before,*::after{transition:none!important}"
  document.head.appendChild(style)

  document.documentElement.classList.toggle("dark", theme === "dark")

  void window.getComputedStyle(document.body).opacity
  style.remove()
}

/**
 * Thème courant : choix mémorisé, sinon préférence système (suivie en direct).
 * Choisir le thème qui correspond déjà au système efface le choix mémorisé —
 * le site recommence alors à suivre le système.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  )

  useEffect(() => {
    const query = darkQuery()
    const onChange = () => {
      if (storedTheme()) return
      const next = systemTheme()
      applyTheme(next)
      setTheme(next)
    }
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark"
      try {
        if (next === systemTheme()) localStorage.removeItem(STORAGE_KEY)
        else localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Stockage indisponible (navigation privée) : le choix vaut pour la session.
      }
      applyTheme(next)
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
