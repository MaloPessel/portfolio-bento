import type { ReactNode } from "react"

import { BrandTitle } from "@/components/brand-title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

/**
 * Carte bento standard : titre précédé du carré ambre (grammaire de marque),
 * lift + bordure ambre au survol. La classe d'aire (a-*) vient du parent.
 */
export function Tile({
  className,
  title,
  children,
}: {
  className?: string
  title: string
  children: ReactNode
}) {
  return (
    <Card
      className={cn(
        "ring-border transition-[translate,box-shadow,--tw-ring-color] duration-300 ease-out [--card-spacing:--spacing(6)] hover:-translate-y-[3px] hover:ring-brand motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className
      )}
    >
      <CardHeader>
        <CardTitle>
          <BrandTitle className="text-[1.05rem]">{title}</BrandTitle>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">{children}</CardContent>
    </Card>
  )
}
