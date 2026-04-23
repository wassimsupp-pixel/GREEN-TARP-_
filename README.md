# Green Tarp Wallonia — Site Web

Site vitrine B2B pour Green Tarp Wallonia.  
Stack : **React 19 + Vite 6 + Tailwind CSS 4 + TypeScript**

## Démarrage local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

## Build de production

```bash
npm run build
npm run preview   # prévisualisation locale du build
```

## Déploiement sur Vercel

### Option A — Interface Vercel (recommandé)

1. Pousse le code sur GitHub / GitLab
2. Va sur [vercel.com](https://vercel.com) → **Add New Project**
3. Importe ton dépôt
4. Vercel détecte **Vite** automatiquement → clique **Deploy**
5. ✅ C'est tout !

### Option B — CLI Vercel

```bash
npm i -g vercel
vercel          # première fois
vercel --prod   # mises à jour suivantes
```

## Structure

```
├── index.html               # Point d'entrée HTML (SEO + métadonnées)
├── vercel.json              # Routing SPA + headers cache/sécurité
├── vite.config.ts           # Build optimisé (code splitting)
├── src/
│   ├── App.tsx
│   ├── constants.ts         # Email, téléphone, adresse — à personnaliser
│   ├── index.css            # Tailwind + fonts Google
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Solutions.tsx
│   │   ├── ProductCard.tsx
│   │   ├── Impact.tsx
│   │   └── Contact.tsx
│   └── assets/              # Images optimisées
```

## Personnalisation rapide

Toutes les infos de contact se trouvent dans `src/constants.ts`.
