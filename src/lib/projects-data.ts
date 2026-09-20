export type Project = {
  name: string
  description: string
  stack: string
  href: string
  linkLabel: string
}

export const projects: Project[] = [
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
