/* Reconnaît le chapitre d'un cours déposé (maths ou physique-chimie), à partir des mots qu'il contient.
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

const MOTS_PC = {
  'pc-mole-concentration': { 'mole': 2, 'masse molaire': 4, 'concentration': 3, 'dilution': 4, 'beer-lambert': 5, 'beer lambert': 5, 'absorbance': 4, 'spectrophotometr': 4, 'etalonnage': 3 },
  'pc-avancement-titrage': { 'avancement': 4, 'reactif limitant': 5, 'stoechiometr': 4, 'titrage': 5, 'equivalence': 4, 'burette': 3, 'colorimetrique': 3 },
  'pc-oxydoreduction': { 'oxydoreduction': 5, 'oxydant': 4, 'reducteur': 4, 'demi-equation': 4, 'oxydation': 3, 'reduction': 3, 'transfert d\'electrons': 4 },
  'pc-lewis-polarite': { 'lewis': 5, 'doublet non liant': 4, 'doublets non liants': 4, 'electronegativite': 5, 'polarite': 4, 'polaire': 3, 'apolaire': 3, 'tetraedrique': 3, 'extraction liquide': 4, 'tensioactif': 3 },
  'pc-chimie-organique': { 'chimie organique': 4, 'groupe caracteristique': 4, 'alcane': 3, 'alcool': 2, 'aldehyde': 3, 'cetone': 3, 'acide carboxylique': 4, 'infrarouge': 4, 'transmittance': 4, 'chauffage a reflux': 5, 'chromatographie': 3, 'rendement': 2 },
  'pc-combustion': { 'combustion': 5, 'combustible': 3, 'comburant': 3, 'exothermique': 3, 'energie molaire de reaction': 5, 'energie de liaison': 4, 'pouvoir calorifique': 5 },
  'pc-interactions-champs': { 'coulomb': 5, 'gravitation': 4, 'champ electrostatique': 5, 'champ de pesanteur': 4, 'interaction fondamentale': 4, 'charge ponctuelle': 4 },
  'pc-fluides': { 'boyle-mariotte': 5, 'boyle mariotte': 5, 'statique des fluides': 5, 'pression': 3, 'force pressante': 4, 'pascal': 2, 'profondeur': 2, 'incompressible': 3 },
  'pc-mouvement-newton': { 'vecteur vitesse': 4, 'variation du vecteur vitesse': 5, 'deuxieme loi de newton': 5, '2e loi de newton': 5, 'chronophotograph': 4, 'referentiel galileen': 4, 'principe d\'inertie': 3 },
  'pc-electricite': { 'effet joule': 5, 'puissance electrique': 5, 'energie electrique': 4, 'force electromotrice': 5, 'resistance interne': 4, 'loi des mailles': 4, 'loi des noeuds': 4, 'intensite': 2 },
  'pc-energie-mecanique': { 'energie cinetique': 5, 'travail d\'une force': 5, 'energie potentielle': 4, 'energie mecanique': 5, 'frottement': 2, 'conservative': 3, 'theoreme de l\'energie cinetique': 5 },
  'pc-ondes-optique': { 'onde mecanique': 5, 'longueur d\'onde': 5, 'celerite': 4, 'lentille': 4, 'relation de conjugaison': 5, 'distance focale': 4, 'grandissement': 4, 'photon': 5, 'electronvolt': 3 }
};

const simplifier = (t) => t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ');

const chercher = (dict, t) => {
  let meilleur = null, max = 0, second = 0;
  for (const id in dict) {
    let score = 0;
    for (const mot in dict[id]) {
      const n = Math.min(t.split(mot).length - 1, 8);
      score += n * dict[id][mot];
    }
    if (score > max) { second = max; max = score; meilleur = id; } else if (score > second) second = score;
  }
  return (max >= 6 && max >= second * 1.3) ? meilleur : null;
};

window.matiereDuChapitre = (id) => (String(id || '').startsWith('pc-') ? 'pc' : 'maths');

/* Renvoie l'identifiant du chapitre reconnu, ou null si le texte ne permet pas de trancher. */
window.reconnaitreChapitre = (texte, matiereCourante) => {
  const t = simplifier(texte || '');
  if (!t) return null;
  if (matiereCourante === 'pc') return chercher(MOTS_PC, t) || chercher(MOTS, t);
  if (matiereCourante === 'maths') return chercher(MOTS, t) || chercher(MOTS_PC, t);
  return chercher({ ...MOTS, ...MOTS_PC }, t);
};
})();
