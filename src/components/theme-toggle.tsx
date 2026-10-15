import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/lib/theme"

/** Bascule clair/sombre — l'icône montre le thème vers lequel on passe. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      onClick={toggleTheme}
      aria-label={isDark ? "Passer en thème clair" : "Passer en thème sombre"}
      title={isDark ? "Thème clair" : "Thème sombre"}
      className="rounded-full text-muted-foreground focus-visible:ring-ring pointer-coarse:size-11"
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  )
}
