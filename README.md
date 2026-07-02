# Portfolio — Malo Pessel

Portfolio-CV une page en grille bento. React + TypeScript + Vite + Tailwind CSS + [shadcn/ui](https://ui.shadcn.com).

Le cadrage produit est dans [PRODUCT.md](PRODUCT.md), le système visuel dans [DESIGN.md](DESIGN.md).

## Développement

```bash
npm install
npm run dev        # serveur de dev (http://localhost:5173)
npm run build      # build de production dans dist/
npm run preview    # sert le build (http://localhost:4173)
npm run lint       # ESLint
```

## Structure

- `src/App.tsx` — composition de la grille bento (les aires `a-*` sont définies dans `src/index.css`)
- `src/components/sections/` — une section par tuile (hero, à propos, compétences, projets, parcours, langues, intérêts, contact)
- `src/components/tile.tsx` — carte bento standard (titre + carré ambre, lift au survol)
- `src/components/ui/` — composants shadcn/ui (gérés via `npx shadcn@latest add …`)
- `src/lib/journey-data.ts` — contenu formation / expérience
- `public/` — `photo.png`, `cv.pdf`, `favicon.ico`

## Déploiement

Hébergé sur Netlify. `netlify.toml` définit le build (`npm run build` → `dist/`) : chaque push sur le repo connecté déclenche un déploiement automatique.

## Contenu à maintenir

Le texte des sections vit directement dans les composants de `src/components/sections/` (et `src/lib/journey-data.ts` pour le parcours). Penser à mettre à jour le poids du PDF affiché dans `hero.tsx` si le CV change.
