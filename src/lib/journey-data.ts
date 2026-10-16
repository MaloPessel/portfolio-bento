export type Step = {
  role: string
  when: string
  description: string
}

export const education: Step[] = [
  {
    role: "Master of Science — IA & Big Data",
    when: "2027 – 2029 · ETNA, Ivry-sur-Seine",
    description:
      "Data engineering, Big Data, machine learning, pipelines de données, architectures distribuées. En alternance chez Polynom.",
  },
  {
    role: "Bachelor — 3e année",
    when: "Sept. 2026 – 2027 · ETNA, Ivry-sur-Seine",
    description:
      "Admission en 3e année pour intégrer le parcours IA & Big Data en alternance chez Polynom.",
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
    role: "Alternant Data Engineer / Data Scientist",
    when: "Depuis sept. 2026 · Polynom, Rueil-Malmaison",
    description:
      "Alternance dans la continuité de mon stage, en parallèle de mon cursus à l’ETNA : pipelines de données, qualité des données, BigQuery, Python, Talend.",
  },
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
      "Relation client, gestion des stocks, rigueur et respect des normes d’hygiène.",
  },
]
