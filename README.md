## Arcade Vault

Es una plataforma para jugar online y competir por la mayor cantidad de puntos.

## Tema visual

Estética arcade retro/neón basada en `references/templates/styles.css`, aplicada como tema global en `app/globals.css`:

- Solo tema oscuro, con fondo de rejilla en perspectiva, scanlines y ruido (`.av-bg`, `.av-noise`).
- Variables CSS de paleta (`--cyan`, `--magenta`, `--yellow`, ...) también disponibles como utilidades de Tailwind (`text-cyan`, `bg-arcade-bg-2`, `font-pixel`).
- Clases de componentes listas para usar: `.btn`, `.card`, `.chip`, `.av-nav`, `.leaderboard`, `.crt`, `.modal`, `.podium`, portadas `.cover-*`, etc.
- Fuentes (vía `next/font/google`): Press Start 2P, JetBrains Mono y Courier Prime.

Las pantallas del prototipo (`references/templates/*.jsx`) aún no están migradas a componentes de Next.

## Usa Spec Driven Design

Basado en /spec y /spec-impl

Siguiendo las buenas practicas recomendadas aquí:
https://github.com/Klerith/fernando-skills

## Skills usadas

```bash
npx skills@latest add Klerith/fernando-skills
```

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` / `npm run start` — production build / serve
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + typescript). Pass paths to lint a single file, e.g. `npx eslint app/page.tsx`
- Type check: `npx tsc --noEmit`