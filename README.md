# Mes cours de 1re — Maths & Physique-Chimie

Une application web installable sur téléphone (PWA) pour réviser la **spécialité Mathématiques** et la **spécialité Physique-Chimie** de première générale. L'élève choisit sa matière, puis un chapitre (ou **Mon cours** avec ses propres feuilles), puis une bulle :

- **Le cours** : définitions, formules, méthodes et exemples.
- **Explique-moi simplement** : l'idée avec des mots simples, un exemple pas à pas, les pièges à éviter.
- **Des exercices** : trois exercices avec indice et correction détaillée. Les nombres changent à chaque clic et la correction est calculée automatiquement.
- **Dépôt de son cours** : l'élève peut déposer une ou plusieurs feuilles (PDF, photos ou texte) pour chaque matière. Les feuilles restent sur son appareil (`IndexedDB`) et le site reconnaît automatiquement le chapitre quand le fichier contient du texte.
- **Mode IA (facultatif, payant)** : avec une clé API Anthropic enregistrée durablement sur l'appareil (`localStorage` + `IndexedDB`), Claude lit toutes les feuilles déposées pour remettre le cours au propre, l'expliquer sur mesure ou générer 3 exercices corrigés adaptés.
- **Installation téléphone (PWA) & transfert de clé** : installable sur Android et iPhone comme une vraie application hors-ligne, avec bouton de transfert par lien (`#cle=...`), export/import JSON des réglages et bouton de mise à jour forcée.

## Programmes couverts

- **Mathématiques (10 chapitres, programme rentrée 2026)** : suites numériques, second degré, dérivation, variations des fonctions, fonction exponentielle, trigonométrie, produit scalaire, géométrie repérée, probabilités conditionnelles, variables aléatoires.
- **Physique-Chimie (12 chapitres, première spécialité)** : mole/concentration et Beer-Lambert, tableau d'avancement et titrage, oxydoréduction, schéma de Lewis/géométrie/polarité, chimie organique/IR/synthèse, combustions et énergie chimique, interactions et champs, statique des fluides et pression, mouvement/vitesse/2ᵉ loi de Newton, énergie et puissance électrique, travail et énergie mécanique, ondes mécaniques/lentilles/photons.

## Fichiers

- `index.html` : application PWA, sélecteur Maths / Physique-Chimie, dépôt multi-feuilles, mode IA et réglages téléphone.
- `cours.js` / `exercices.js` : cours, explications simples et exercices aléatoires de Mathématiques.
- `physique-cours.js` / `physique-exercices.js` : cours, explications simples et exercices aléatoires de Physique-Chimie.
- `reconnaitre.js` : reconnaissance locale du chapitre (Maths et Physique-Chimie).
- `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `pwa-192x192.svg`, `pwa-512x512.svg` : fichiers PWA pour l'installation mobile et le mode hors-ligne.
- `cours-maths.html` : ancienne version autonome sous forme d'artifact Claude (non utilisée par le site).

## Mise en ligne

Le site est fait pour GitHub Pages : dans Settings > Pages, choisir « Deploy from a branch », branche `main`, dossier `/ (root)`.
