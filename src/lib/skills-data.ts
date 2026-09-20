export type SkillGroup = {
  label: string
  strong: boolean
  items: string[]
}

export const skillGroups: SkillGroup[] = [
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
