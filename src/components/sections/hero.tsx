import { Download, MapPin } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function Hero() {
  return (
    <Card className="a-hero bg-primary text-primary-foreground ring-0 [--card-spacing:--spacing(6)] md:[--card-spacing:--spacing(8)]">
      <div className="flex h-full flex-col gap-5 px-(--card-spacing)">
        <div className="mb-auto flex flex-wrap items-start justify-between gap-4">
          <Avatar className="size-24 border-[3px] border-primary-foreground/35 md:size-28">
            <AvatarImage
              src="/photo.png"
              alt="Photo de profil de Malo Pessel"
            />
            <AvatarFallback className="text-lg font-bold text-primary">
              MP
            </AvatarFallback>
          </Avatar>
          <Badge
            variant="outline"
            className="h-auto border-primary-foreground/25 bg-primary-foreground/10 px-3.5 py-1.5 text-[0.82rem] font-semibold whitespace-normal text-primary-foreground"
          >
            <span
              aria-hidden="true"
              className="size-2 shrink-0 rounded-full bg-available"
            />
            Alternant Data chez Polynom — dès sept. 2026
          </Badge>
        </div>

        <h1 className="font-heading text-5xl leading-[0.98] font-black tracking-[-0.025em] text-balance md:text-7xl">
          Malo Pessel
        </h1>

        <p className="max-w-[52ch] text-base leading-relaxed text-primary-foreground/85 md:text-lg">
          Étudiant en Master{" "}
          <strong className="font-bold text-primary-foreground">
            IA&nbsp;&amp;&nbsp;Big&nbsp;Data
          </strong>{" "}
          (ETNA) et{" "}
          <strong className="font-bold text-primary-foreground">
            alternant Data chez Polynom
          </strong>{" "}
          — data engineering / data science, dans la continuité de mon stage,
          de septembre&nbsp;2026 à septembre&nbsp;2028.
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-3.5">
          <Button
            asChild
            variant="secondary"
            className="h-11 rounded-full px-5 text-sm font-bold"
          >
            <a href="/cv.pdf" download="CV_Malo_Pessel.pdf">
              <Download data-icon="inline-start" />
              Télécharger le CV
              <span className="text-xs font-medium opacity-70">
                PDF · 198&nbsp;Ko
              </span>
            </a>
          </Button>
          <p className="flex items-center gap-2 text-sm text-primary-foreground/80">
            <MapPin className="size-4" aria-hidden="true" />
            Les Ulis (91) — Île-de-France
          </p>
        </div>
      </div>
    </Card>
  )
}
