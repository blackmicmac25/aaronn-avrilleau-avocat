# Cabinet Aaronn AVRILLEAU — Avocat Fiscaliste

Site web professionnel du cabinet d'avocat fiscaliste **Maître Aaronn AVRILLEAU**, spécialisé en contrôle fiscal, contentieux et ingénierie patrimoniale — Montpellier & Perpignan.

🌐 **Site en production** : [avrilleau-avocat.fr](https://avrilleau-avocat.fr)

---

## Stack technique

- **Framework** : React 19 + TypeScript + Vite 6
- **Routing** : React Router DOM v7
- **Styles** : CSS in-line + Tailwind CDN
- **Node** : 22.x (`.nvmrc`)
- **Déploiement** : Hostinger via GitHub Actions (SSH/SCP)

---

## Déploiement automatique (GitHub Actions → Hostinger)

Le déploiement se déclenche automatiquement à chaque `git push` sur la branche `main`.

### Secrets à configurer dans GitHub

Aller dans **Settings → Secrets and variables → Actions** du repo et ajouter :

| Secret | Description |
|--------|-------------|
| `SSH_HOST` | IP ou domaine du serveur Hostinger (ex: `85.xxx.xxx.xxx`) |
| `SSH_USERNAME` | Nom d'utilisateur SSH Hostinger (ex: `u12345678`) |
| `SSH_PASSWORD` | Mot de passe SSH Hostinger |
| `SSH_PORT` | Port SSH (généralement `65002` chez Hostinger) |
| `SSH_TARGET_PATH` | Chemin du dossier public (ex: `/home/u12345678/domains/avrilleau-avocat.fr/public_html`) |
| `GEMINI_API_KEY` | Clé API Google Gemini (optionnel) |

---

## Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build
npm run preview
```

---

## Structure du projet

```
├── .github/workflows/deploy.yml  # CI/CD GitHub Actions
├── components/                   # Composants React
│   ├── Home.tsx                  # Page d'accueil
│   ├── About.tsx                 # À propos
│   ├── Expertise.tsx             # Domaines d'expertise
│   ├── Fees.tsx                  # Honoraires
│   ├── Articles.tsx              # Articles de doctrine
│   ├── News.tsx                  # Actualités fiscales
│   ├── Contact.tsx               # Contact
│   └── ...
├── public/images/                # Images statiques
├── App.tsx                       # Router principal
├── index.html                    # Point d'entrée HTML
└── vite.config.ts                # Configuration Vite
```
