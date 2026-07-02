import { ArrowUpRight } from "lucide-react"

import { GithubIcon } from "@/components/icons"
import { Tile } from "@/components/tile"

const projects = [
  {
    name: "Deep Ocean",
    description:
      "Jeu de stratégie en temps réel en Java : gestion de la concurrence, interfaces graphiques.",
    stack: "Java · JavaFX · Threads",
    href: "https://github.com/MaloPessel/deep-ocean",
    linkLabel: "Code source",
  },
  {
    name: "2048",
    description:
      "Implémentation complète du jeu : logique algorithmique, gestion des états, tests.",
    stack: "C++ · STL · Tests unitaires",
    href: "https://github.com/MaloPessel/Projet-2048",
    linkLabel: "Code source",
  },
  {
    name: "Pendu multijoueur",
    description:
      "Jeu du pendu en mode terminal, à deux joueurs, en programmation fonctionnelle.",
    stack: "OCaml",
    href: "https://github.com/MaloPessel/pendu",
    linkLabel: "Code source",
  },
  {
    name: "Sites web",
    description:
      "Plusieurs sites dynamiques, avec un accent sur l'expérience utilisateur et le responsive.",
    stack: "HTML · CSS · JavaScript",
    href: "https://github.com/MaloPessel",
    linkLabel: "Voir le GitHub",
  },
]

export function Projects() {
  return (
    <Tile className="a-projects" title="Projets">
      <div className="grid grid-cols-1 gap-3 min-[561px]:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col gap-2 rounded-[10px] bg-secondary p-4.5 transition-colors duration-300 ease-out hover:bg-accent motion-reduce:transition-none"
          >
            <h3 className="text-base font-extrabold tracking-tight">
              {project.name}
            </h3>
            <p className="text-muted-foreground">{project.description}</p>
            <p className="font-mono text-xs text-accent-foreground">
              {project.stack}
            </p>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-auto inline-flex items-center gap-1.5 pt-1.5 text-sm font-bold hover:text-accent-foreground hover:underline hover:underline-offset-3"
            >
              <GithubIcon className="size-4" aria-hidden="true" />
              {project.linkLabel}
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </a>
          </article>
        ))}
      </div>
    </Tile>
  )
}
