/* Reconnaît le chapitre d'un cours déposé, à partir des mots qu'il contient.
   Pas d'IA : on compte les mots-clés de chaque chapitre (le nombre est le poids du mot). */
(() => {
const MOTS = {
  'suites': { 'suite': 2, 'arithmetique': 3, 'geometrique': 3, 'raison': 2, 'recurrence': 3, 'terme general': 3, 'premier terme': 2 },
  'second-degre': { 'second degre': 4, 'discriminant': 4, 'trinome': 4, 'forme canonique': 4, 'racine': 1, 'parabole': 2, 'forme factorisee': 3 },
  'derivation': { 'derivee': 2, 'nombre derive': 4, 'tangente': 3, 'taux de variation': 3, 'derivable': 3, 'derivation': 3, 'secante': 2 },
  'variations': { 'sens de variation': 3, 'tableau de variation': 4, 'extremum': 3, 'maximum': 1, 'minimum': 1, 'croissante': 1, 'decroissante': 1, 'optimisation': 3, 'signe de la derivee': 4 },
  'exponentielle': { 'exponentielle': 5, 'exp(': 3, 'nombre e': 3 },
  'trigonometrie': { 'cosinus': 3, 'sinus': 3, 'radian': 4, 'cercle trigonometrique': 5, 'trigonometri': 4, 'enroulement': 3, 'periodique': 2 },
  'produit-scalaire': { 'produit scalaire': 5, 'orthogona': 2, 'al-kashi': 5, 'al kashi': 5, 'norme': 2, 'projete orthogonal': 2, 'bilinearite': 4 },
  'geometrie-reperee': { 'vecteur normal': 5, 'equation cartesienne': 4, 'equation de cercle': 5, 'equation du cercle': 5, 'cercle de centre': 3, 'rayon': 1, 'repere orthonorme': 1 },
  'probas-conditionnelles': { 'probabilite conditionnelle': 5, 'probabilites conditionnelles': 5, 'sachant': 3, 'arbre pondere': 4, 'independan': 3, 'probabilites totales': 5, 'partition': 2 },
  'variables-aleatoires': { 'variable aleatoire': 5, 'variables aleatoires': 5, 'esperance': 4, 'variance': 3, 'ecart type': 3, 'ecart-type': 3, 'loi de probabilite': 3 }
};
const simplifier = (t) => t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ');
/* Renvoie l'identifiant du chapitre reconnu, ou null si le texte ne permet pas de trancher. */
window.reconnaitreChapitre = (texte) => {
  const t = simplifier(texte || '');
  let meilleur = null, max = 0, second = 0;
  for (const id in MOTS) {
    let score = 0;
    for (const mot in MOTS[id]) {
      const n = Math.min(t.split(mot).length - 1, 8);
      score += n * MOTS[id][mot];
    }
    if (score > max) { second = max; max = score; meilleur = id; } else if (score > second) second = score;
  }
  return (max >= 6 && max >= second * 1.3) ? meilleur : null;
};
})();
