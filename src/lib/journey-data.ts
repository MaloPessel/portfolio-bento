export type Step = {
  role: string
  when: string
  description: string
}

export const education: Step[] = [
  {
    role: "Master of Science — IA & Big Data",
    when: "Sept. 2026 – sept. 2028 · ETNA, Ivry-sur-Seine",
    description:
      "Data engineering, Big Data, machine learning, pipelines de données, architectures distribuées.",
  },
  {
    role: "Licence Informatique",
    when: "2021 – 2026 · Université Paris-Saclay, Orsay",
    description:
      "Algorithmique, bases de données, fondements de la data science et du ML, sécurité informatique.",
  },
]

export const experience: Step[] = [
  {
    role: "Stagiaire Data Scientist / Data Engineer",
    when: "Janv. 2026 – juin 2026 · Polynom, Rueil-Malmaison",
    description:
      "Traitement de données dans des pipelines, amélioration de la qualité (typage, déduplication), investigation de jobs BigQuery, Python et Talend.",
  },
  {
    role: "Vendeur charcuterie / fromagerie",
    when: "Janv. 2024 – déc. 2025 · Carrefour, Les Ulis",
    description:
      "Relation client, gestion des stocks, rigueur et respect des normes d'hygiène.",
  },
]
