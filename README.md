# Mes cours de 1re — Maths & Physique-Chimie

Une application web installable sur téléphone (PWA) pour réviser la **spécialité Mathématiques** et la **spécialité Physique-Chimie** de première générale. L'élève choisit sa matière, puis un chapitre (ou **Mon cours** avec ses propres feuilles), puis une bulle :

- **Le cours** : définitions, formules, méthodes et exemples.
- **Explique-moi simplement** : l'idée avec des mots simples, un exemple pas à pas, les pièges à éviter.
- **Des exercices & Question flash** : trois exercices avec indice, correction détaillée et mode **⚡ 1 question flash** pour réviser en 5 minutes. Un bloc **✍️ Vérifier mon brouillon** permet aussi de soumettre sa réponse écrite ou prise en photo à Claude.
- **Suivi de progression** : possibilité de cocher chaque chapitre révisé (`✓`) avec compteur par matière.
- **Dépôt de son cours** : l'élève peut déposer des feuilles (PDF, photos, texte) ou **prendre directement une photo** depuis son téléphone, puis réordonner, renommer ou retirer ses feuilles. Les feuilles restent sur son appareil (`IndexedDB`) et le site reconnaît automatiquement le chapitre quand le fichier contient du texte.
- **Mode IA (facultatif, payant)** : avec une clé API Anthropic enregistrée durablement sur l'appareil (`localStorage` + `IndexedDB`), Claude lit toutes les feuilles déposées pour remettre le cours au propre, l'expliquer sur mesure, générer des exercices adaptés ou vérifier un brouillon.
- **Historique permanent avec recherche & Export PDF** : chaque cours, explication ou série d'exercices générés par l'IA reste conservé dans l'historique sur l'appareil (`IndexedDB` + `localStorage`) avec filtre par matière, recherche par mot-clé et export PDF en un clic.
- **Paramètres & Apparence** : bouton **⚙️ Paramètres** en haut à droite pour régler l'apparence (**Clair** par défaut ou **Sombre**), enregistrer la clé Anthropic (Mode IA, Sonnet 5.5 par défaut), transférer la clé vers un téléphone par lien (`#cle=...`) ou forcer la mise à jour de l'application.
- **Installation téléphone (PWA)** : installable sur Android et iPhone comme une vraie application hors-ligne (avec pré-cache des ressources principales et bibliothèques mathématiques/PDF).

## Programmes couverts

- **Mathématiques (10 chapitres, programme rentrée 2026)** : suites numériques, second degré, dérivation, variations des fonctions, fonction exponentielle, trigonométrie, produit scalaire, géométrie repérée, probabilités conditionnelles, variables aléatoires.
- **Physique-Chimie (12 chapitres, première spécialité)** : mole/concentration et Beer-Lambert, tableau d'avancement et titrage, oxydoréduction, schéma de Lewis/géométrie/polarité, chimie organique/IR/synthèse, combustions et énergie chimique, interactions et champs, statique des fluides et pression, mouvement/vitesse/2ᵉ loi de Newton, énergie et puissance électrique, travail et énergie mécanique, ondes mécaniques/lentilles/photons.

## Fichiers

- `index.html` & `styles.css` : application PWA, interface et feuille de styles.
- `cours.js` / `exercices.js` : cours, explications simples et exercices aléatoires de Mathématiques.
- `physique-cours.js` / `physique-exercices.js` : cours, explications simples et exercices aléatoires de Physique-Chimie.
- `reconnaitre.js` : reconnaissance locale du chapitre (Maths et Physique-Chimie).
- `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `pwa-192x192.svg`, `pwa-512x512.svg` : fichiers PWA pour l'installation mobile et le mode hors-ligne.

## Mise en ligne

Le site est fait pour GitHub Pages : dans Settings > Pages, choisir « Deploy from a branch », branche `main`, dossier `/ (root)`.
