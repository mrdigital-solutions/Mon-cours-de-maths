# Mon cours de maths

Un site pour réviser les maths de première générale (spécialité). L'élève choisit un chapitre, puis une bulle :

- **Le cours** : définitions, formules, méthodes et exemples.
- **Explique-moi simplement** : l'idée avec des mots simples, un exemple pas à pas, les pièges à éviter.
- **Des exercices** : trois exercices avec indice et correction détaillée. Les nombres changent à chaque clic et la correction est calculée automatiquement.
- **Dépôt de son cours** : l'élève peut déposer une ou plusieurs feuilles (PDF, photos ou texte) pour un même chapitre. Les feuilles restent sur son appareil (stockage local dans le navigateur) et le site reconnaît automatiquement le chapitre quand le fichier contient du texte.
- **Mode IA (facultatif, payant)** : avec une clé API Anthropic enregistrée localement dans le navigateur, Claude lit toutes les feuilles déposées (PDF, photos, texte) pour expliquer le cours sur mesure ou générer 3 exercices corrigés adaptés, avec choix du modèle (`claude-opus-5-5`, `claude-sonnet-5-5`, `claude-haiku-5-5`) et suivi de la dépense estimée.

Le site fonctionne sans compte et sans connexion à un service pour toute la partie gratuite : tout le contenu de base est dans les fichiers.

## Programme

Les dix chapitres suivent le programme de spécialité mathématiques de première générale en vigueur depuis la rentrée 2026 (arrêté du 26 février 2026, BO n° 14 du 2 avril 2026) : suites, second degré, dérivation, variations, exponentielle, trigonométrie, produit scalaire, géométrie repérée, probabilités conditionnelles, variables aléatoires.

## Fichiers

- `index.html` : la page du site (interface, dépôt de plusieurs feuilles, reconnaissance et mode IA facultatif).
- `cours.js` : la base de cours (fiche de cours et explication simple de chaque chapitre).
- `exercices.js` : la base d'exercices (trois modèles par chapitre : facile, moyen, difficile).
- `reconnaitre.js` : reconnaissance locale du chapitre à partir des mots-clés du cours déposé.
- `cours-maths.html` : une autre version, sous forme d'artifact Claude, qui génère le contenu avec l'IA. Elle ne fonctionne que sur claude.ai et n'est pas utilisée par le site.

## Mise en ligne

Le site est fait pour GitHub Pages : dans Settings > Pages, choisir « Deploy from a branch », branche `main`, dossier `/ (root)`.
