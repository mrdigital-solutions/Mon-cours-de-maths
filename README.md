# Mon cours de maths

Un site pour réviser les maths de première générale (spécialité). L'élève choisit un chapitre, puis une bulle :

- **Le cours** : définitions, formules, méthodes et exemples.
- **Explique-moi simplement** : l'idée avec des mots simples, un exemple pas à pas, les pièges à éviter.
- **Des exercices** : trois exercices avec indice et correction détaillée. Les nombres changent à chaque clic et la correction est calculée automatiquement.

Le site fonctionne sans compte et sans connexion à un service : tout le contenu est dans les fichiers.

## Programme

Les dix chapitres suivent le programme de spécialité mathématiques de première générale en vigueur depuis la rentrée 2026 (arrêté du 26 février 2026, BO n° 14 du 2 avril 2026) : suites, second degré, dérivation, variations, exponentielle, trigonométrie, produit scalaire, géométrie repérée, probabilités conditionnelles, variables aléatoires.

## Fichiers

- `index.html` : la page du site.
- `cours.js` : la base de cours (fiche de cours et explication simple de chaque chapitre).
- `exercices.js` : la base d'exercices (trois modèles par chapitre : facile, moyen, difficile).
- `cours-maths.html` : une autre version, sous forme d'artifact Claude, qui génère le contenu avec l'IA. Elle ne fonctionne que sur claude.ai et n'est pas utilisée par le site.

## Mise en ligne

Le site est fait pour GitHub Pages : dans Settings > Pages, choisir « Deploy from a branch », branche `main`, dossier `/ (root)`.
