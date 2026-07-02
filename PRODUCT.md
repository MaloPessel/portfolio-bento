# Product

## Register

brand

## Users

Recruteurs, RH et tech leads data qui reçoivent une candidature d'alternance et ouvrent ce lien depuis un CV ou LinkedIn. Contexte : bureau, écran de travail, 30 à 60 secondes d'attention. Leur job : décider vite si Malo mérite un entretien. Visiteurs secondaires : enseignants et pairs.

## Product Purpose

Portfolio-CV une page de Malo Pessel, étudiant en informatique (Paris-Saclay) qui rejoint le Master IA & Big Data de l'ETNA. Objectif unique : décrocher une alternance Data (data engineering / data science) de 2 ans à partir de septembre 2026. Succès = le recruteur télécharge le CV ou envoie un mail.

## Brand Personality

Précis, énergique, fiable. L'objet physique de référence : un dossier d'ingénieur bien imprimé sur papier blanc, avec un tampon ambre. Émotions visées : confiance ("ce candidat est sérieux et soigné") et sympathie ("et il a du goût").

## Anti-references

- Le template CV glassmorphism : cartes translucides, backdrop-blur, dégradé pastel bleu-violet en fond (c'était l'ancienne version — on s'en éloigne définitivement).
- Le portfolio "hacker" sombre avec néons et police mono partout.
- Le CV Canva générique : barres de progression de compétences, icônes rondes au-dessus de chaque titre, trois couleurs de tags arc-en-ciel.

## Design Principles

1. **L'essentiel en 30 secondes** — nom, recherche d'alternance, dates et CTA lisibles dès le premier écran ; la hiérarchie sert le recruteur pressé.
2. **La preuve avant le style** — projets, stage, compétences concrètes portent le message ; le design les met en scène, il ne les remplace pas.
3. **Une seule voix chromatique** — ambre profond + encre bleue sur blanc pur ; toute nouvelle couleur doit se justifier ou disparaître.
4. **Rapide et honnête** — SPA Vite légère (React + Tailwind + shadcn/ui), pas de fausse fonctionnalité (pas de formulaire factice) ; ce qui est cliquable fonctionne.
5. **Accessible par défaut** — contrastes AA vérifiés, HTML sémantique, reduced-motion respecté.

## Accessibility & Inclusion

WCAG 2.1 AA : contraste ≥ 4.5:1 pour le texte courant, ≥ 3:1 pour le texte large. `prefers-reduced-motion` respecté sur toutes les animations. Navigation clavier avec focus visible. Icônes décoratives masquées aux lecteurs d'écran, liens avec libellés explicites.
