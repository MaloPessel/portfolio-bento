export type Project = {
  name: string
  description: string
  stack: string
  href: string
  /** URL du site déployé, quand il y en a un : affiché à côté du code source. */
  liveHref?: string
}

export const projects: Project[] = [
  {
    name: "Diagonale du vide",
    description:
      "Diagnostic territorial à partir de sa position : géolocalisation, recherche de commune via l'API Adresse, carte de France projetée en SVG maison, verdict partageable par URL.",
    stack: "React 19 · TypeScript · Tailwind v4 · shadcn/ui",
    href: "https://github.com/MaloPessel/diagonale-du-vide",
    liveHref: "https://diagonale-du-vide.netlify.app",
  },
  {
    name: "50/50",
    description:
      "Jeu de vote multijoueur en temps réel : salles partagées, joueurs synchronisés en direct, gestion des déconnexions et effets sonores.",
    stack: "JavaScript · Firebase Realtime DB · Auth · Web Audio",
    href: "https://github.com/MaloPessel/50_50_game",
  },
  {
    name: "Yogatoroute",
    description:
      "Web app de pauses guidées sur l'aire d'autoroute : respiration, étirements, minuteur, audio, interface bilingue.",
    stack: "JavaScript · HTML · CSS · i18n",
    href: "https://github.com/MaloPessel/yogatoroute",
    liveHref: "https://yogatoroute.netlify.app",
  },
  {
    name: "Deep Ocean",
    description:
      "Jeu de stratégie en temps réel en Java : architecture MVC, unités et ressources pilotées par des threads concurrents.",
    stack: "Java · Swing · Concurrence",
    href: "https://github.com/MaloPessel/deep-ocean",
  },
]
