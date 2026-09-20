import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Grammaire de marque : carré ambre + titre. Partagé entre Tile (titres de
 * tuile) et les tuiles hors-Tile (héro, contact) qui ont leur propre taille.
 * Aucune taille de texte par défaut : l'appelant doit toujours en fournir une
 * via className (ex. text-[1.05rem], text-2xl).
 */
export function BrandTitle({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <h2
      className={cn(
        "flex items-center gap-2.5 font-extrabold tracking-tight",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="size-2.5 shrink-0 rounded-[3px] bg-brand"
      />
      {children}
    </h2>
  )
}
