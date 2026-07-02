import type { Step } from "@/lib/journey-data"
import { Tile } from "@/components/tile"

/** Carte parcours : puce ambre + filet vertical, dates en mono. */
export function JourneyCard({
  className,
  title,
  steps,
}: {
  className?: string
  title: string
  steps: Step[]
}) {
  return (
    <Tile className={className} title={title}>
      <ol className="flex flex-col gap-5">
        {steps.map((step) => (
          <li
            key={step.role}
            className="relative pl-6 before:absolute before:top-[7px] before:left-0 before:size-2.5 before:rounded-full before:bg-brand after:absolute after:top-[22px] after:-bottom-3.5 after:left-1 after:w-0.5 after:bg-border last:after:hidden"
          >
            <h3 className="text-[0.95rem] font-extrabold tracking-tight">
              {step.role}
            </h3>
            <p className="mt-0.5 mb-1.5 font-mono text-xs text-muted-foreground">
              {step.when}
            </p>
            <p className="max-w-[58ch] text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Tile>
  )
}
