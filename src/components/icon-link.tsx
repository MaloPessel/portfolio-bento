import type { ElementType, ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Lien icône + texte, hover souligné (offset commun) — couleur/poids laissés
 * au contexte via className. `external` ajoute target/rel plutôt que de les
 * mettre en dur, pour les liens internes (tel:, mailto:).
 */
export function IconLink({
  href,
  icon: Icon,
  external,
  className,
  children,
}: {
  href: string
  icon: ElementType
  external?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm hover:underline hover:underline-offset-3",
        className
      )}
    >
      <Icon className="size-4" aria-hidden="true" />
      {children}
    </a>
  )
}
