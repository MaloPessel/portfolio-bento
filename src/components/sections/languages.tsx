import { Badge } from "@/components/ui/badge"
import { Tile } from "@/components/tile"
import { languages } from "@/lib/languages-data"

export function Languages() {
  return (
    <Tile className="a-langs" title="Langues">
      <ul className="flex flex-col gap-3">
        {languages.map((language) => (
          <li
            key={language.name}
            className="flex items-center justify-between gap-3"
          >
            <span className="text-body font-semibold">
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
