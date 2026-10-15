# Design

Système visuel du portfolio bento de Malo Pessel. Stack : React + Vite + Tailwind CSS v4 + shadcn/ui (style radix-nova). Source de vérité des tokens : `src/index.css`. Registre : brand — le design EST le produit.

## Theme

Deux thèmes, mêmes rôles de tokens :

- **Clair** (référence) : blanc pur en fond, la chaleur est portée par la couleur de marque (ambre profond), pas par la surface.
- **Sombre** : « papier carbone » — surfaces quasi noires mais chaudes (teinte 75, jamais `#000`), ambre éclairci pour le texte de marque, encre bleue éclaircie pour le focus. Pas de lueur, pas de néon, pas de mono généralisé (anti-référence « portfolio hacker »).

Mécanique : classe `.dark` sur `<html>`, tokens redéfinis dans le bloc `.dark` de `src/index.css`. Un script inline dans `index.html` pose la classe avant le premier rendu (pas de flash). Par défaut on suit `prefers-color-scheme` en direct ; le bouton du footer (`ThemeToggle`, hook `useTheme` dans `src/lib/theme.ts`) mémorise un choix dans `localStorage["theme"]`, effacé si l'utilisateur revient au thème du système. Les transitions sont coupées pendant la bascule. Aucun composant ne doit utiliser de couleur en dur ni de variante `dark:` quand un token suffit.

## Colors (OKLCH)

Palette mappée sur les tokens sémantiques shadcn :

| Rôle shadcn | Valeur | Rôle design |
|---|---|---|
| `--background` / `--card` | `oklch(1 0 0)` | Blanc pur, page et cartes |
| `--foreground` | `oklch(0.24 0.02 75)` | Encre, texte courant (≥ 13:1) |
| `--muted-foreground` | `oklch(0.46 0.02 75)` | Texte secondaire (≥ 6:1) |
| `--primary` | `oklch(0.46 0.1 65)` | **Ambre profond** — fond du héro, texte de marque |
| `--primary-foreground` | `oklch(0.985 0.008 85)` | Blanc chaud sur ambre |
| `--secondary` / `--muted` | `oklch(0.972 0.008 80)` | Surface chaude — tuiles projets, tags neutres |
| `--accent` | `oklch(0.955 0.032 85)` | Ambre teinté — tags data, pills, hover projets |
| `--accent-foreground` | `oklch(0.46 0.1 65)` | Texte sur ambre teinté |
| `--border` | `oklch(0.885 0.014 80)` | Bordures 1px (ring des cartes) |
| `--ring` | `oklch(0.42 0.09 260)` | Focus ring (encre bleue) |

Thème sombre (bloc `.dark`, contrastes vérifiés AA) :

| Rôle shadcn | Valeur | Note |
|---|---|---|
| `--background` | `oklch(0.17 0.008 75)` | Carbone chaud |
| `--card` / `--popover` | `oklch(0.205 0.009 75)` | Un cran au-dessus du fond |
| `--foreground` | `oklch(0.94 0.012 85)` | 15:1 sur carte |
| `--muted-foreground` | `oklch(0.73 0.016 80)` | 7.5:1 sur carte |
| `--primary` | `oklch(0.44 0.095 65)` | Ambre du héro, à peine assourdi |
| `--secondary` / `--muted` | `oklch(0.25 0.011 75)` | Tuiles projets, tags neutres, CTA sur fonds colorés |
| `--accent` / `--accent-foreground` | `oklch(0.29 0.04 70)` / `oklch(0.83 0.11 78)` | Tags data, stacks (8:1) |
| `--border` | `oklch(0.33 0.012 75)` | Ring des cartes |
| `--ring` | `oklch(0.72 0.1 260)` | Focus (7:1 sur carte) |
| `--brand` / `--ink-blue` | `oklch(0.72 0.145 75)` / `oklch(0.33 0.07 260)` | Carrés de titres / carte contact |

Le texte de marque ambre sur surface neutre utilise `text-accent-foreground` (lisible dans les deux thèmes), jamais `text-primary`.

Tokens custom (déclarés dans `@theme inline`, utilisables en classes Tailwind) :

| Token | Classe | Valeur | Usage |
|---|---|---|---|
| `--brand` | `bg-brand` | `oklch(0.68 0.145 75)` | Ambre vif : carrés de titres, puces timeline, ring au hover — jamais du texte sur blanc |
| `--ink-blue` | `bg-ink-blue` | `oklch(0.35 0.075 260)` | Fond de la carte contact |
| `--available` | `bg-available` | `oklch(0.84 0.19 145)` | Point vert de la pastille de disponibilité |
| `--text-body` | `text-body` | `0.95rem` | Corps de tuile — texte courant (à propos, parcours, langues, centres d'intérêt, tagline contact) |

Stratégie : committed. Deux tuiles colorées en diagonale (héro `bg-primary` en haut à gauche, contact `bg-ink-blue` en bas à droite) ; le reste blanc à bordures fines. Texte clair sur fonds saturés (`text-primary-foreground/85`, `text-white/75`), jamais de gris.

## Typography

- **Archivo Variable** (Fontsource, self-hosted) : tout le texte. `--font-sans` et `--font-heading`. Display 900, titres 800, corps 400.
- **JetBrains Mono Variable** (Fontsource) : uniquement dates du parcours et stacks techniques (`font-mono text-xs`).
- H1 : `text-5xl md:text-7xl`, `tracking-[-0.025em]`, `leading-[0.98]`, `text-balance`.
- Titres de tuiles : h2 dans `CardTitle`, `text-[1.05rem] font-extrabold` + carré ambre `size-2.5 rounded-[3px] bg-brand` (grammaire de marque — pas d'icônes de titres).
- Corps de tuile : token `--text-body` (`0.95rem`, classe `text-body`) — texte courant des tuiles (à propos, parcours, langues, centres d'intérêt, tagline contact).

## Layout

- Grille bento : `.bento` dans `src/index.css` — `grid-template-areas` sur 6 colonnes, max-width 1180px. Breakpoints : ≤ 980px → 2 colonnes, ≤ 640px → 1 colonne. Chaque tuile porte sa classe d'aire `a-*`.
- `.bento > * { min-width: 0 }` — garde-fou anti-débordement.
- `--radius: 0.75rem` → cartes `rounded-xl` ≈ 17px, tuiles internes 10px, boutons/badges pill.
- Cartes : `ring-border` (pas d'ombre). Hover = lift 3px + `ring-brand` (désactivé en reduced-motion). Héro et contact : `ring-0`, pas de hover.
- Projets : `grid-cols-1 min-[561px]:grid-cols-2` — 2×2, jamais d'orphelin.

## Motion

- Entrée : keyframes `rise` sur `.bento > *`, stagger 60ms par nth-child, `animation-fill-mode: backwards` (pas `both` — sinon le transform reste épinglé et casse le hover). Sous `@media (prefers-reduced-motion: no-preference)` uniquement.
- Hover : transitions transform/couleur avec `motion-reduce:transition-none`.

## Components (shadcn/ui)

Installés : `button`, `card`, `badge`, `avatar`, `separator`. Règles maison :

- **`Tile`** (`src/components/tile.tsx`) : Card + CardHeader/CardTitle/CardContent, padding `[--card-spacing:--spacing(6)]`, titre + carré ambre. Toutes les tuiles standard passent par lui.
- **Badge** : variante custom `accent` ajoutée (`bg-accent text-accent-foreground`) pour tags data et niveaux de langue ; `secondary` pour les tags neutres.
- **Button** : CTAs en `variant="secondary"` + `rounded-full` sur les fonds colorés (héro, contact), toujours `asChild` avec un `<a>`. La taille `cta` remplace le ring de focus (`--ring`, invisible sur ambre/encre bleue) par un contour `primary-foreground` 2px décollé de 2px.
- **Focus** : liens texte (`IconLink`) en contour `currentColor` 2px ; au pointeur tactile (`pointer-coarse`), zones de tap portées à 44px sans décaler la mise en page.
- **Avatar** : photo du héro, avec `AvatarFallback` "MP".
- **Icônes** : lucide-react ; `data-icon="inline-start"` dans les Buttons, pas de classe de taille dans les composants. GitHub/LinkedIn (retirées de lucide v1) vivent dans `src/components/icons.tsx` en SVG inline.

## Voice

Français, direct, première personne. Pas d'eyebrows uppercase, pas de sections numérotées, pas de barres de progression. Pas de formulaire factice — le canal de contact est le mail. Footer : « fait main avec React, Tailwind CSS & shadcn/ui ».
