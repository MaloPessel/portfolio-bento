import { Badge } from "@/components/ui/badge"
import { Tile } from "@/components/tile"

const languages = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "B2" },
  { name: "Espagnol", level: "Scolaire" },
]

export function Languages() {
  return (
    <Tile className="a-langs" title="Langues">
      <ul className="flex flex-col gap-3">
        {languages.map((language) => (
          <li
            key={language.name}
            className="flex items-center justify-between gap-3"
          >
            <span className="text-[0.95rem] font-semibold">
              {language.name}
            </span>
            <Badge variant="accent" className="font-semibold">
              {language.level}
            </Badge>
          </li>
        ))}
      </ul>
    </Tile>
  )
}
