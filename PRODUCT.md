# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Contacts professionnels qui découvrent Malo via LinkedIn, GitHub ou son CV : collègues et managers chez Polynom, recruteurs pour l'après-alternance, enseignants et pairs. Contexte : bureau, écran de travail, 30 à 60 secondes d'attention. Leur job : comprendre vite qui est Malo et ce qu'il sait faire.

## Product Purpose

Portfolio-CV une page de Malo Pessel, étudiant en Master IA & Big Data (ETNA) et alternant Data chez Polynom (sept. 2026 – sept. 2028, dans la continuité de son stage). Le site est sa vitrine professionnelle : crédibilité, réseau, et opportunités pour la suite (embauche post-alternance). Succès = une prise de contact ou un téléchargement de CV.

## Positioning

La compétence technique concrète et vérifiable plutôt que la liste de mots-clés : les compétences affichées (Python, SQL, BigQuery, Talend, pipelines de données) sont démontrées — projets au code source public sur GitHub, expérience data réelle chez Polynom — pas seulement énumérées comme sur un CV générique. Un recruteur peut cliquer et vérifier.

## Operating Context

Découverte via LinkedIn, GitHub ou un CV partagé ; lecture au bureau, sur écran de travail, avec 30 à 60 secondes d'attention avant que le visiteur décide de creuser ou de passer au candidat suivant. Aucune étape d'authentification ni de formulaire : tout le contenu est visible immédiatement, l'action attendue est un clic (mail, LinkedIn, GitHub, téléchargement du CV).

## Capabilities and Constraints

SPA statique (Vite → `dist/`, déployée sur Netlify, aucun backend/API/CMS). Le contenu factuel (parcours, projets, compétences, langues) vit en dur dans le code — prose dans les composants de section, listes structurées dans `src/lib/*-data.ts` — toute mise à jour de contenu est un déploiement, pas une saisie éditoriale séparée. Un seul thème visuel (clair, pas de dark mode). Site entièrement en français, pas d'i18n. Pas de canal de contact intégré (formulaire) : le contact se fait par mail/téléphone/LinkedIn directement.

## Brand Commitments

Personnalité : précis, énergique, fiable. Objet physique de référence : un dossier d'ingénieur bien imprimé sur papier blanc, avec un tampon ambre. Émotions visées : confiance ("ce candidat est sérieux et soigné") et sympathie ("et il a du goût").

Anti-références :
- Le template CV glassmorphism : cartes translucides, backdrop-blur, dégradé pastel bleu-violet en fond (c'était l'ancienne version — on s'en éloigne définitivement).
- Le portfolio "hacker" sombre avec néons et police mono partout.
- Le CV Canva générique : barres de progression de compétences, icônes rondes au-dessus de chaque titre, trois couleurs de tags arc-en-ciel.

## Evidence on Hand

- CV téléchargeable : `public/cv.pdf`.
- Photo de profil réelle : `public/photo.png` (+ `public/photo.webp`).
- Projets réels au code public et vérifiable : Deep Ocean, 2048, Pendu multijoueur, plusieurs sites web (tous liés à des dépôts GitHub réels sous github.com/MaloPessel).
- Expérience professionnelle réelle : stage Data Scientist/Engineer chez Polynom (janv.–juin 2026), suivi d'une alternance de 2 ans (sept. 2026 – sept. 2028) dans la continuité directe, plus un emploi antérieur (vendeur, Carrefour).
- Formation réelle : Licence Informatique (Université Paris-Saclay), Master IA & Big Data (ETNA).
- Langues confirmées : français natif, anglais B2, espagnol scolaire.
- Coordonnées réelles : téléphone, mail, LinkedIn, GitHub (voir `src/lib/contact-links.ts`).

Rien à fabriquer au-delà de cette liste : pas de témoignages, pas de logos clients, pas de métriques d'usage — le travail futur ne doit pas en inventer.

## Product Principles

1. **L'essentiel en 30 secondes** — nom, recherche d'alternance, dates et CTA lisibles dès le premier écran ; la hiérarchie sert le recruteur pressé.
2. **La preuve avant le style** — projets, stage, compétences concrètes portent le message ; le design les met en scène, il ne les remplace pas.
3. **Rapide et honnête** — SPA Vite légère (React + Tailwind + shadcn/ui), pas de fausse fonctionnalité (pas de formulaire factice) ; ce qui est cliquable fonctionne.
4. **Accessible par défaut** — contrastes AA vérifiés, HTML sémantique, reduced-motion respecté.

## Accessibility & Inclusion

WCAG 2.1 AA : contraste ≥ 4.5:1 pour le texte courant, ≥ 3:1 pour le texte large. `prefers-reduced-motion` respecté sur toutes les animations. Navigation clavier avec focus visible. Icônes décoratives masquées aux lecteurs d'écran, liens avec libellés explicites.
