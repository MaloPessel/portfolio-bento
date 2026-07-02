import { Tile } from "@/components/tile"

export function About() {
  return (
    <Tile className="a-about" title="À propos">
      <p className="max-w-[62ch] text-[0.95rem] text-muted-foreground">
        Après une licence d'informatique à l'Université Paris-Saclay et un stage
        data chez Polynom, j'y poursuis en alternance pendant mon Master
        IA&nbsp;&amp;&nbsp;Big&nbsp;Data&nbsp;: construire des pipelines propres
        et fiables, et comprendre ce qu'elles racontent.
      </p>
    </Tile>
  )
}
