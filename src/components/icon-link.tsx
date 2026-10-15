import type { ComponentType, ReactNode, SVGProps } from "react"

import { cn } from "@/lib/utils"

/**
 * Lien icône + texte, hover souligné (offset commun) — couleur/poids laissés
 * au contexte via className. `external` ajoute target/rel plutôt que de les
 * mettre en dur, pour les liens internes (tel:, mailto:). Focus en
 * currentColor (lisible sur tuile blanche comme sur l'encre bleue) ; au
 * tactile, zone de tap portée à 44px sans décaler la mise en page.
 */
export function IconLink({
  href,
  icon: Icon,
  external,
  className,
  children,
}: {
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  external?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-sm text-sm hover:underline hover:underline-offset-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current pointer-coarse:-my-3 pointer-coarse:py-3",
        className
      )}
    >
      <Icon className="size-4" aria-hidden="true" />
      {children}
    </a>
  )
}
