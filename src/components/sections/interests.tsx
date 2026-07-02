import { Tile } from "@/components/tile"

const interests = [
  { emoji: "🏉", label: "Rugby en club", detail: "7 ans de pratique" },
  { emoji: "🎮", label: "Jeux vidéo" },
  { emoji: "🎵", label: "Musique" },
]

export function Interests() {
  return (
    <Tile className="a-interests" title="Centres d'intérêt">
      <ul className="flex flex-col gap-3">
        {interests.map((interest) => (
          <li key={interest.label} className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid size-9.5 shrink-0 place-items-center rounded-[10px] bg-secondary text-lg"
            >
              {interest.emoji}
            </span>
            <span className="text-[0.95rem] font-semibold">
              {interest.label}
              {interest.detail && (
                <em className="block text-xs font-normal text-muted-foreground not-italic">
                  {interest.detail}
                </em>
              )}
            </span>
          </li>
        ))}
      </ul>
    </Tile>
  )
}
