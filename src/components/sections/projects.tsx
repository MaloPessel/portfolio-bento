import { ArrowUpRight } from "lucide-react"

import { GithubIcon } from "@/components/icons"
import { IconLink } from "@/components/icon-link"
import { Tile } from "@/components/tile"
import { projects } from "@/lib/projects-data"

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
            <IconLink
              href={project.href}
              icon={GithubIcon}
              external
              className="mt-auto pt-1.5 font-bold hover:text-accent-foreground"
            >
              {project.linkLabel}
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                aria-hidden="true"
              />
            </IconLink>
          </article>
        ))}
      </div>
    </Tile>
  )
}
