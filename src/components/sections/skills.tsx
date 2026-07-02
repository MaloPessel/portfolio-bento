import { Badge } from "@/components/ui/badge"
import { Tile } from "@/components/tile"

const groups = [
  {
    label: "Programmation",
    strong: false,
    items: ["Python", "Java", "C++", "JavaScript", "HTML/CSS", "OCaml"],
  },
  {
    label: "Data & BDD",
    strong: true,
    items: ["SQL", "BigQuery", "Talend", "Pipelines de données"],
  },
  {
    label: "Environnement",
    strong: false,
    items: ["Git", "Linux", "IntelliJ / VS Code"],
  },
]

export function Skills() {
  return (
    <Tile className="a-skills" title="Compétences">
      <div className="flex flex-col gap-4.5">
        {groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-2">
            <h3 className="text-[0.82rem] font-bold text-muted-foreground">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item}>
                  <Badge
                    variant={group.strong ? "accent" : "secondary"}
                    className="h-6 px-3 text-[0.8rem] font-semibold"
                  >
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Tile>
  )
}
