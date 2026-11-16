/* Base d'exercices de spécialité physique-chimie (première générale) :
   pour chaque chapitre, trois modèles (facile, moyen, difficile) avec valeurs aléatoires et correction calculée. */
(() => {
const T = String.raw;
const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = (t) => t[R(0, t.length - 1)];
const dec = (x, k = 2) => {
  const f = 10 ** k;
  const v = Math.round(x * f) / f;
  return String(v).replace('.', '{,}');
};
const sci = (x, k = 2) => {
  if (x === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(x)));
  const m = x / 10 ** e;
  return e === 0 ? dec(m, k) : T`${dec(m, k)} \times 10^{${e}}`;
};

const E = {};

/* 1. Mole, concentration et Beer-Lambert */
E['pc-mole-concentration'] = [
() => {
  const especes = [
    { nom: 'de glucose', f: '\\text{C}_6\\text{H}_{12}\\text{O}_6', M: 180 },
    { nom: 'de chlorure de sodium', f: '\\text{NaCl}', M: 58.5 },
    { nom: 'de saccharose', f: '\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}', M: 342 },
    { nom: 'd\'acide ascorbique (vitamine C)', f: '\\text{C}_6\\text{H}_8\\text{O}_6', M: 176 }
  ];
  const esp = pick(especes);
  const mult = pick([0.05, 0.1, 0.2, 0.25, 0.5]);
  const m = esp.M * mult;
  const Vml = pick([100, 200, 250, 500]);
  const VL = Vml / 1000;
  const C = mult / VL;
  return {
    titre: 'Quantité de matière et concentration',
    enonce: T`On dissout $m = ${dec(m, 2)}\text{ g}$ ${esp.nom} ($${esp.f}$, $M = ${dec(esp.M, 1)}\text{ g}\cdot\text{mol}^{-1}$) dans de l'eau pour obtenir $V = ${Vml}\text{ mL}$ de solution.
1. Calcule la quantité de matière $n$ de soluté dissous.
2. Calcule la concentration en quantité de matière $C$ de cette solution.`,
    indice: T`Utilise $n = \dfrac{m}{M}$, puis convertis le volume en litres ($1\text{ L} = 1000\text{ mL}$) avant de calculer $C = \dfrac{n}{V}$.`,
    correction: T`1. $n = \dfrac{m}{M} = \dfrac{${dec(m, 2)}}{${dec(esp.M, 1)}} = ${dec(mult, 2)}\text{ mol}$.
2. On convertit $V = ${Vml}\text{ mL} = ${dec(VL, 3)}\text{ L}$.
Alors $C = \dfrac{n}{V} = \dfrac{${dec(mult, 2)}}{${dec(VL, 3)}} = ${dec(C, 2)}\text{ mol}\cdot\text{L}^{-1}$.`
  };
},
() => {
  const F = pick([2, 4, 5, 10]);
  const Cfille = pick([0.02, 0.05, 0.1, 0.2]);
  const Cmere = Cfille * F;
  const Vfille = pick([100, 200, 250]);
  const Vmere = Vfille / F;
  return {
    titre: 'Préparation d\'une solution par dilution',
    enonce: T`On dispose d'une solution mère de concentration $C_{\text{mère}} = ${dec(Cmere, 2)}\text{ mol}\cdot\text{L}^{-1}$. On souhaite préparer $V_{\text{fille}} = ${Vfille}\text{ mL}$ de solution fille à $C_{\text{fille}} = ${dec(Cfille, 2)}\text{ mol}\cdot\text{L}^{-1}$.
1. Calcule le facteur de dilution $F$.
2. Quel volume $V_{\text{mère}}$ de solution mère faut-il prélever ?
3. Cite la verrerie de précision nécessaire.`,
    indice: T`Au cours d'une dilution, la quantité de matière de soluté se conserve : $C_{\text{mère}} \times V_{\text{mère}} = C_{\text{fille}} \times V_{\text{fille}}$.`,
    correction: T`1. $F = \dfrac{C_{\text{mère}}}{C_{\text{fille}}} = \dfrac{${dec(Cmere, 2)}}{${dec(Cfille, 2)}} = ${F}$.
2. Par conservation de la quantité de matière :
$$V_{\text{mère}} = \dfrac{C_{\text{fille}} \times V_{\text{fille}}}{C_{\text{mère}}} = \dfrac{${Vfille}}{${F}} = ${Vmere}\text{ mL}$$
3. On utilise une **pipette jaugée** de $${Vmere}\text{ mL}$ (avec propipette) et une **fiole jaugée** de $${Vfille}\text{ mL}$.`
  };
},
() => {
  const k = pick([12, 15, 20, 25]);
  const C0 = 0.02;
  const A0 = k * C0;
  const F = pick([4, 5, 10]);
  const Cdil = pick([0.015, 0.025, 0.03, 0.04]);
  const Ax = k * Cdil;
  const Cinit = Cdil * F;
  return {
    titre: 'Dosage par la loi de Beer-Lambert',
    enonce: T`On réalise le dosage spectrophotométrique d'une solution bleue de sulfate de cuivre. Une solution étalon de concentration $C_0 = ${dec(C0, 2)}\text{ mol}\cdot\text{L}^{-1}$ donne une absorbance $A_0 = ${dec(A0, 2)}$.
On dilue $F = ${F}$ fois une solution commerciale inconnue ; son absorbance mesurée dans les mêmes conditions vaut $A_x = ${dec(Ax, 3)}$.
1. Détermine le coefficient de proportionnalité $k$ de la loi de Beer-Lambert ($A = k \times C$).
2. Déduis-en la concentration $C_{\text{dil}}$ de la solution diluée.
3. Calcule la concentration $C_{\text{init}}$ de la solution commerciale avant dilution.`,
    indice: T`D'après la loi de Beer-Lambert, $k = \dfrac{A_0}{C_0}$, puis $C_{\text{dil}} = \dfrac{A_x}{k}$. N'oublie pas de remultiplier par $F$ à la fin.`,
    correction: T`1. $k = \dfrac{A_0}{C_0} = \dfrac{${dec(A0, 2)}}{${dec(C0, 2)}} = ${k}\text{ L}\cdot\text{mol}^{-1}$.
2. $C_{\text{dil}} = \dfrac{A_x}{k} = \dfrac{${dec(Ax, 3)}}{${k}} = ${dec(Cdil, 4)}\text{ mol}\cdot\text{L}^{-1}$.
3. La solution commerciale était $${F}$ fois plus concentrée :
$$C_{\text{init}} = F \times C_{\text{dil}} = ${F} \times ${dec(Cdil, 4)} = ${dec(Cinit, 3)}\text{ mol}\cdot\text{L}^{-1}$$`
  };
}];

/* 2. Tableau d'avancement et titrage */
E['pc-avancement-titrage'] = [
() => {
  const nH2 = pick([0.4, 0.6, 0.8, 1.0, 1.2]);
  const nO2 = pick([0.3, 0.4, 0.5, 0.7]);
  const rH2 = nH2 / 2, rO2 = nO2;
  const limitant = rH2 <= rO2 ? '\\text{H}_2' : '\\text{O}_2';
  const xmax = Math.min(rH2, rO2);
  const fH2 = nH2 - 2 * xmax, fO2 = nO2 - xmax, fH2O = 2 * xmax;
  return {
    titre: 'Réactif limitant et avancement maximal',
    enonce: T`On réalise la synthèse de l'eau selon l'équation : $2\,\text{H}_2 + \text{O}_2 \longrightarrow 2\,\text{H}_2\text{O}$.
À l'état initial, on introduit $n_i(\text{H}_2) = ${dec(nH2, 2)}\text{ mol}$ et $n_i(\text{O}_2) = ${dec(nO2, 2)}\text{ mol}$.
1. Détermine le réactif limitant et la valeur de l'avancement maximal $x_{\max}$.
2. Donne les quantités de matière de toutes les espèces à l'état final.`,
    indice: T`Compare les rapports $\dfrac{n_i(\text{H}_2)}{2}$ et $\dfrac{n_i(\text{O}_2)}{1}$. Le plus petit donne $x_{\max}$.`,
    correction: T`1. On teste la disparition de chaque réactif :
- Si $\text{H}_2$ est limitant : $${dec(nH2, 2)} - 2x = 0 \implies x = ${dec(rH2, 2)}\text{ mol}$.
- Si $\text{O}_2$ est limitant : $${dec(nO2, 2)} - x = 0 \implies x = ${dec(rO2, 2)}\text{ mol}$.
On garde la plus petite valeur : $x_{\max} = ${dec(xmax, 2)}\text{ mol}$, et le réactif limitant est $${limitant}$.
2. À l'état final :
- $n_f(\text{H}_2) = ${dec(fH2, 2)}\text{ mol}$
- $n_f(\text{O}_2) = ${dec(fO2, 2)}\text{ mol}$
- $n_f(\text{H}_2\text{O}) = 2 \times ${dec(xmax, 2)} = ${dec(fH2O, 2)}\text{ mol}$.`
  };
},
() => {
  const VA = pick([10, 20, 25]);
  const CB = pick([0.04, 0.05, 0.10]);
  const VE = R(8, 22);
  const CA = (CB * VE) / (2 * VA);
  return {
    titre: 'Titrage colorimétrique du diiode',
    enonce: T`On titre un volume $V_A = ${VA}\text{ mL}$ d'une solution de diiode $\text{I}_2$ de concentration inconnue $C_A$ par une solution de thiosulfate de sodium ($\text{S}_2\text{O}_3^{2-}$) de concentration $C_B = ${dec(CB, 2)}\text{ mol}\cdot\text{L}^{-1}$.
L'équation support du titrage est : $\text{I}_2 + 2\,\text{S}_2\text{O}_3^{2-} \longrightarrow 2\,\text{I}^- + \text{S}_4\text{O}_6^{2-}$.
Le virage (disparition de la couleur jaune-brun) est observé pour un volume équivalent $V_E = ${VE}\text{ mL}$.
1. Écris la relation entre les quantités de matière à l'équivalence.
2. Calcule la concentration $C_A$ de la solution de diiode.`,
    indice: T`Attention au coefficient $2$ devant $\text{S}_2\text{O}_3^{2-}$ : à l'équivalence, $\dfrac{n(\text{I}_2)}{1} = \dfrac{n(\text{S}_2\text{O}_3^{2-})}{2}$.`,
    correction: T`1. À l'équivalence, les réactifs ont été introduits dans les proportions stœchiométriques :
$$n(\text{I}_2) = \dfrac{n_{\text{versé}}(\text{S}_2\text{O}_3^{2-})}{2} \iff C_A \times V_A = \dfrac{C_B \times V_E}{2}$$
2. On isole $C_A$ (les volumes peuvent rester tous les deux en $\text{mL}$ car c'est un rapport) :
$$C_A = \dfrac{C_B \times V_E}{2 \times V_A} = \dfrac{${dec(CB, 2)} \times ${VE}}{2 \times ${VA}} = ${dec(CA, 4)}\text{ mol}\cdot\text{L}^{-1}$$`
  };
},
() => {
  const F = pick([5, 10]);
  const VA = 20;
  const CB = 0.02;
  const VE = pick([12, 16, 20, 24]);
  const Cdil = (2.5 * CB * VE) / VA;
  const C0 = F * Cdil;
  return {
    titre: 'Titrage avec dilution préalable',
    enonce: T`On dilue $F = ${F}$ fois une eau oxygénée commerciale. On prélève $V_A = ${VA}\text{ mL}$ de cette solution diluée et on la titre par une solution acidifiée de permanganate de potassium ($\text{MnO}_4^-$) de concentration $C_B = ${dec(CB, 2)}\text{ mol}\cdot\text{L}^{-1}$.
Équation support : $2\,\text{MnO}_4^- + 5\,\text{H}_2\text{O}_2 + 6\,\text{H}^+ \longrightarrow 2\,\text{Mn}^{2+} + 5\,\text{O}_2 + 8\,\text{H}_2\text{O}$.
La teinte violette persiste à partir de $V_E = ${VE}\text{ mL}$.
1. Écris la relation à l'équivalence entre $C_{\text{dil}}, V_A, C_B$ et $V_E$.
2. Calcule la concentration $C_{\text{dil}}$ puis la concentration $C_0$ du flacon commercial.`,
    indice: T`À l'équivalence : $\dfrac{C_{\text{dil}} \times V_A}{5} = \dfrac{C_B \times V_E}{2}$.`,
    correction: T`1. À l'équivalence : $\dfrac{n(\text{H}_2\text{O}_2)}{5} = \dfrac{n(\text{MnO}_4^-)}{2}$, soit $\dfrac{C_{\text{dil}} \times V_A}{5} = \dfrac{C_B \times V_E}{2}$.
2. On en déduit :
$$C_{\text{dil}} = \dfrac{5 \times C_B \times V_E}{2 \times V_A} = \dfrac{5 \times ${dec(CB, 2)} \times ${VE}}{2 \times ${VA}} = ${dec(Cdil, 3)}\text{ mol}\cdot\text{L}^{-1}$$
Comme la solution a été diluée $${F}$ fois : $C_0 = ${F} \times ${dec(Cdil, 3)} = ${dec(C0, 2)}\text{ mol}\cdot\text{L}^{-1}$.`
  };
}];

/* 3. Oxydoréduction */
E['pc-oxydoreduction'] = [
() => {
  const cas = pick([
    {
      ox1: '\\text{Cu}^{2+}', red1: '\\text{Cu}', n1: 2,
      ox2: '\\text{Zn}^{2+}', red2: '\\text{Zn}', n2: 2,
      demi1: '\\text{Cu}^{2+} + 2\\,\\text{e}^- \\rightleftharpoons \\text{Cu}',
      demi2: '\\text{Zn} \\rightleftharpoons \\text{Zn}^{2+} + 2\\,\\text{e}^-',
      bilan: '\\text{Cu}^{2+} + \\text{Zn} \\longrightarrow \\text{Cu} + \\text{Zn}^{2+}'
    },
    {
      ox1: '\\text{Ag}^+', red1: '\\text{Ag}', n1: 1,
      ox2: '\\text{Cu}^{2+}', red2: '\\text{Cu}', n2: 2,
      demi1: '2\\times(\\text{Ag}^+ + \\text{e}^- \\rightleftharpoons \\text{Ag})',
      demi2: '\\text{Cu} \\rightleftharpoons \\text{Cu}^{2+} + 2\\,\\text{e}^-',
      bilan: '2\\,\\text{Ag}^+ + \\text{Cu} \\longrightarrow 2\\,\\text{Ag} + \\text{Cu}^{2+}'
    },
    {
      ox1: '\\text{H}^+', red1: '\\text{H}_2', n1: 2,
      ox2: '\\text{Al}^{3+}', red2: '\\text{Al}', n2: 3,
      demi1: '3\\times(2\\,\\text{H}^+ + 2\\,\\text{e}^- \\rightleftharpoons \\text{H}_2)',
      demi2: '2\\times(\\text{Al} \\rightleftharpoons \\text{Al}^{3+} + 3\\,\\text{e}^-)',
      bilan: '6\\,\\text{H}^+ + 2\\,\\text{Al} \\longrightarrow 3\\,\\text{H}_2 + 2\\,\\text{Al}^{3+}'
    }
  ]);
  return {
    titre: 'Écrire une équation d\'oxydoréduction simple',
    enonce: T`On fait réagir l'oxydant $${cas.ox1}$ (du couple $${cas.ox1}/${cas.red1}$) avec le réducteur $${cas.red2}$ (du couple $${cas.ox2}/${cas.red2}$).
1. Écris les deux demi-équations électroniques et précise laquelle est une oxydation et laquelle est une réduction.
2. Écris l'équation de la réaction d'oxydoréduction.`,
    indice: T`Un oxydant gagne des électrons (réduction) : $\text{Ox} + n\,\text{e}^- \rightleftharpoons \text{Réd}$. Ajuste les coefficients pour échanger le même nombre d'électrons.`,
    correction: T`1. - Réduction de $${cas.ox1}$ (gain d'électrons) : $${cas.demi1}$
- Oxydation de $${cas.red2}$ (perte d'électrons) : $${cas.demi2}$
2. En additionnant de façon à éliminer les électrons :
$$${cas.bilan}$$`
  };
},
() => {
  const cas = pick([
    {
      titre: 'Oxydation des ions fer(II) par le dichromate',
      reactifs: '\\text{Cr}_2\\text{O}_7^{2-} \\text{ (couple } \\text{Cr}_2\\text{O}_7^{2-}/\\text{Cr}^{3+}) \\text{ et } \\text{Fe}^{2+} \\text{ (couple } \\text{Fe}^{3+}/\\text{Fe}^{2+})',
      demiOx: '\\text{Cr}_2\\text{O}_7^{2-} + 14\\,\\text{H}^+ + 6\\,\\text{e}^- \\rightleftharpoons 2\\,\\text{Cr}^{3+} + 7\\,\\text{H}_2\\text{O}',
      demiRed: '\\text{Fe}^{2+} \\rightleftharpoons \\text{Fe}^{3+} + \\text{e}^-',
      bilan: '\\text{Cr}_2\\text{O}_7^{2-} + 6\\,\\text{Fe}^{2+} + 14\\,\\text{H}^+ \\longrightarrow 2\\,\\text{Cr}^{3+} + 6\\,\\text{Fe}^{3+} + 7\\,\\text{H}_2\\text{O}'
    },
    {
      titre: 'Oxydation de l\'acide oxalique par le permanganate',
      reactifs: '\\text{MnO}_4^- \\text{ (couple } \\text{MnO}_4^-/\\text{Mn}^{2+}) \\text{ et } \\text{H}_2\\text{C}_2\\text{O}_4 \\text{ (couple } \\text{CO}_2/\\text{H}_2\\text{C}_2\\text{O}_4)',
      demiOx: '\\text{MnO}_4^- + 8\\,\\text{H}^+ + 5\\,\\text{e}^- \\rightleftharpoons \\text{Mn}^{2+} + 4\\,\\text{H}_2\\text{O}',
      demiRed: '\\text{H}_2\\text{C}_2\\text{O}_4 \\rightleftharpoons 2\\,\\text{CO}_2 + 2\\,\\text{H}^+ + 2\\,\\text{e}^-',
      bilan: '2\\,\\text{MnO}_4^- + 5\\,\\text{H}_2\\text{C}_2\\text{O}_4 + 6\\,\\text{H}^+ \\longrightarrow 2\\,\\text{Mn}^{2+} + 10\\,\\text{CO}_2 + 8\\,\\text{H}_2\\text{O}'
    }
  ]);
  return {
    titre: cas.titre,
    enonce: T`En milieu acide, on fait réagir $${cas.reactifs}$.
1. Écris les deux demi-équations électroniques ajustées.
2. Déduis-en l'équation bilan de la réaction.`,
    indice: T`Équilibre dans l'ordre : atomes autres que $\text{H}$ et $\text{O}$, puis $\text{O}$ avec $\text{H}_2\text{O}$, puis $\text{H}$ avec $\text{H}^+$, puis les charges avec $\text{e}^-$.`,
    correction: T`1. Demi-équations :
- Réduction : $${cas.demiOx}$
- Oxydation : $${cas.demiRed}$
2. On égalise le nombre d'électrons échangés et on simplifie les $\text{H}^+$ présents des deux côtés :
$$${cas.bilan}$$`
  };
},
() => {
  const V1 = pick([10, 15, 20]);
  const C1 = 0.02;
  const V2 = 25;
  const C2 = (5 * C1 * V1) / V2;
  const mFe = C2 * (V2 / 1000) * 55.8;
  return {
    titre: 'Bilan d\'une réaction d\'oxydoréduction',
    enonce: T`On fait réagir exactement $V_1 = ${V1}\text{ mL}$ d'une solution de permanganate de potassium ($\text{MnO}_4^-$) à $C_1 = ${dec(C1, 2)}\text{ mol}\cdot\text{L}^{-1}$ avec $V_2 = ${V2}\text{ mL}$ d'une solution d'ions fer(II) ($\text{Fe}^{2+}$) en milieu acide selon :
$$\text{MnO}_4^- + 5\,\text{Fe}^{2+} + 8\,\text{H}^+ \longrightarrow \text{Mn}^{2+} + 5\,\text{Fe}^{3+} + 4\,\text{H}_2\text{O}$$
1. Quelle quantité de matière d'ions $\text{MnO}_4^-$ a été introduite ?
2. En supposant le mélange stœchiométrique, calcule la concentration $C_2$ des ions $\text{Fe}^{2+}$.
3. Quelle masse de fer cela représente-t-il dans les $${V2}\text{ mL}$ ($M(\text{Fe}) = 55{,}8\text{ g}\cdot\text{mol}^{-1}$) ?`,
    indice: T`Pour $1\text{ mol}$ de $\text{MnO}_4^-$ consommée, il faut $5\text{ mol}$ de $\text{Fe}^{2+}$.`,
    correction: T`1. $n(\text{MnO}_4^-) = C_1 \times V_1 = ${dec(C1, 2)} \times ${dec(V1 / 1000, 3)} = ${sci(C1 * V1 / 1000, 2)}\text{ mol}$.
2. À la stœchiométrie, $n(\text{Fe}^{2+}) = 5 \times n(\text{MnO}_4^-)$, donc :
$$C_2 = \dfrac{5 \times C_1 \times V_1}{V_2} = \dfrac{5 \times ${dec(C1, 2)} \times ${V1}}{${V2}} = ${dec(C2, 3)}\text{ mol}\cdot\text{L}^{-1}$$
3. $n(\text{Fe}^{2+}) = C_2 \times V_2 = ${sci(C2 * V2 / 1000, 2)}\text{ mol}$, d'où $m = n \times M = ${dec(mFe, 3)}\text{ g}$.`
  };
}];

/* 4. Schéma de Lewis, géométrie et polarité */
E['pc-lewis-polarite'] = [
() => {
  const mols = [
    { nom: 'l\'ammoniac', f: '\\text{NH}_3', zC: 5, voisins: 3, dnl: 1, geom: 'pyramidale' },
    { nom: 'l\'eau', f: '\\text{H}_2\\text{O}', zC: 6, voisins: 2, dnl: 2, geom: 'coudée' },
    { nom: 'le méthane', f: '\\text{CH}_4', zC: 4, voisins: 4, dnl: 0, geom: 'tétraédrique' },
    { nom: 'le dioxyde de carbone', f: '\\text{CO}_2', zC: 4, voisins: 2, dnl: 0, geom: 'linéaire' }
  ];
  const m = pick(mols);
  return {
    titre: 'Schéma de Lewis et géométrie',
    enonce: T`On étudie la molécule de ${m.nom} de formule $${m.f}$.
1. Combien d'électrons de valence possède son atome central ?
2. Combien de doublets non liants porte cet atome central dans son schéma de Lewis ?
3. Quelle est la géométrie de la molécule autour de l'atome central ?`,
    indice: T`Compte les groupes d'électrons (liaisons multiples comptées comme un groupe + doublets non liants) autour de l'atome central.`,
    correction: T`1. L'atome central possède $${m.zC}$ électrons de valence.
2. Il forme des liaisons avec $${m.voisins}$ atome(s) voisin(s) et porte **$${m.dnl}$ doublet(s) non liant(s)**.
3. Par répulsion des doublets dans l'espace, la molécule adopte une géométrie **${m.geom}**.`
  };
},
() => {
  const cas = pick([
    { nom: 'le sulfure d\'hydrogène', f: '\\text{H}_2\\text{S}', geom: 'coudée', chi: '\\chi(\\text{S})=2{,}6 ;\\; \\chi(\\text{H})=2{,}2', polaire: true, explication: 'les liaisons $\\text{S}-\\text{H}$ sont polarisées ($\\Delta\\chi = 0{,}4$) et la géométrie coudée fait que $G^+$ et $G^-$ ne sont pas confondus' },
    { nom: 'le tétrachlorométhane', f: '\\text{CCl}_4', geom: 'tétraédrique symétrique', chi: '\\chi(\\text{Cl})=3{,}2 ;\\; \\chi(\\text{C})=2{,}6', polaire: false, explication: 'les 4 liaisons $\\text{C}-\\text{Cl}$ sont polarisées ($\\Delta\\chi = 0{,}6$), mais par symétrie tétraédrique les barycentres $G^+$ et $G^-$ coïncident au centre sur le carbone' },
    { nom: 'le trichlorure d\'azote', f: '\\text{NCl}_3', geom: 'pyramidale', chi: '\\chi(\\text{N})=3{,}0 ;\\; \\chi(\\text{Cl})=3{,}2', polaire: false, explication: 'la différence d\'électronégativité vaut $\\Delta\\chi = 0{,}2 < 0{,}4$, donc les liaisons ne sont pratiquement pas polarisées' }
  ]);
  return {
    titre: 'Polarité d\'une molécule',
    enonce: T`On considère ${cas.nom} ($${cas.f}$), de géométrie **${cas.geom}**. On donne $${cas.chi}$.
1. Les liaisons de cette molécule sont-elles polarisées ? (Rappel : seuil $\Delta\chi \geq 0{,}4$).
2. Cette molécule est-elle polaire ou apolaire ? Justifie.`,
    indice: T`Une molécule est polaire si elle possède des liaisons polarisées ET que leur effet ne s'annule pas par symétrie.`,
    correction: T`1. et 2. Ici, ${cas.explication}.
Conclusion : la molécule $${cas.f}$ est donc **${cas.polaire ? 'polaire' : 'apolaire'}**.`
  };
},
() => {
  const solv = pick([
    { nom: 'cyclohexane', d: 0.78, haut: 'la phase organique (cyclohexane)', bas: 'la phase aqueuse' },
    { nom: 'dichlorométhane', d: 1.33, haut: 'la phase aqueuse', bas: 'la phase organique (dichlorométhane)' }
  ]);
  return {
    titre: 'Extraction liquide-liquide',
    enonce: T`On souhaite extraire du diiode ($\text{I}_2$, molécule apolaire) dissous dans de l'eau à l'aide du **${solv.nom}** (solvant apolaire, non miscible à l'eau, de densité $d = ${dec(solv.d, 2)}$).
1. Pourquoi le ${solv.nom} permet-il d'extraire efficacement le diiode de l'eau ?
2. Après agitation et décantation dans une ampoule à décanter, quelle phase se trouve en haut et laquelle se trouve en bas ?`,
    indice: T`« Qui se ressemble s'assemble » : le diiode apolaire préfère le solvant apolaire. Le liquide le moins dense flotte au-dessus de l'eau ($d_{\text{eau}} = 1{,}00$).`,
    correction: T`1. Le diiode $\text{I}_2$ est **apolaire** : il est donc beaucoup plus soluble dans le ${solv.nom} (apolaire) que dans l'eau (polaire), et les deux solvants ne sont pas miscibles.
2. Comme $d = ${dec(solv.d, 2)} ${solv.d < 1 ? '< 1{,}00' : '> 1{,}00'}$ :
- Phase du **haut** : ${solv.haut}.
- Phase du **bas** : ${solv.bas}.`
  };
}];

/* 5. Chimie organique : squelettes, IR et synthèse */
E['pc-chimie-organique'] = [
() => {
  const cas = pick([
    { f: '\\text{CH}_3-\\text{CH}_2-\\text{CH}(\\text{OH})-\\text{CH}_3', fam: 'alcool', groupe: 'hydroxyle ($-\\text{OH}$)', nom: 'butan-2-ol' },
    { f: '\\text{CH}_3-\\text{CH}_2-\\text{CHO}', fam: 'aldéhyde', groupe: 'carbonyle en bout de chaîne ($-\\text{CH}=\\text{O}$)', nom: 'propanal' },
    { f: '\\text{CH}_3-\\text{CO}-\\text{CH}_2-\\text{CH}_3', fam: 'cétone', groupe: 'carbonyle entre deux carbones ($-\\text{CO}-$)', nom: 'butanone (ou butan-2-one)' },
    { f: '\\text{CH}_3-\\text{CH}_2-\\text{COOH}', fam: 'acide carboxylique', groupe: 'carboxyle ($-\\text{COOH}$)', nom: 'acide propanoïque' }
  ]);
  return {
    titre: 'Famille fonctionnelle et nomenclature',
    enonce: T`On étudie la molécule de formule semi-développée :
$$${cas.f}$$
1. Entoure/nomme le groupe caractéristique et indique la famille fonctionnelle correspondante.
2. Donne le nom officiel (UICPA) de cette molécule.`,
    indice: T`Compte les atomes de carbone de la chaîne principale en donnant le plus petit indice possible au carbone portant le groupe fonctionnel.`,
    correction: T`1. On reconnaît le groupe **${cas.groupe}** : la molécule appartient à la famille des **${cas.fam}s**.
2. Son nom systématique est : **${cas.nom}**.`
  };
},
() => {
  const cas = pick([
    { nom: 'propan-1-ol', f: '\\text{C}_3\\text{H}_8\\text{O}', ir: 'une bande large et forte vers $3350\\text{ cm}^{-1}$ et aucune bande vers $1720\\text{ cm}^{-1}$', exp: 'La bande large vers $3350\\text{ cm}^{-1}$ est caractéristique d\'une liaison $\\text{O}-\\text{H}$ liée d\'un **alcool**, et l\'absence de pic à $1720\\text{ cm}^{-1}$ exclut $\\text{C}=\\text{O}$.' },
    { nom: 'propanone', f: '\\text{C}_3\\text{H}_6\\text{O}', ir: 'une bande fine et intense vers $1715\\text{ cm}^{-1}$ et aucune bande large au-dessus de $3100\\text{ cm}^{-1}$', exp: 'La bande fine à $1715\\text{ cm}^{-1}$ montre la présence d\'un groupe carbonyle $\\text{C}=\\text{O}$ (cétone ou aldéhyde), et l\'absence de bande vers $3300\\text{ cm}^{-1}$ confirme l\'absence de $-\\text{OH}$.' },
    { nom: 'acide éthanoïque', f: '\\text{C}_2\\text{H}_4\\text{O}_2', ir: 'une bande très large entre $2500$ et $3300\\text{ cm}^{-1}$ accompagnée d\'une bande fine et forte à $1710\\text{ cm}^{-1}$', exp: 'L\'association de $\\text{C}=\\text{O}$ ($1710\\text{ cm}^{-1}$) et d\'une très large bande $\\text{O}-\\text{H}$ ($2500-3300\\text{ cm}^{-1}$) caractérise un **acide carboxylique**.' }
  ]);
  return {
    titre: 'Identification par spectroscopie infrarouge',
    enonce: T`Un flacon contient un liquide pur de formule brute $${cas.f}$. Son spectre infrarouge (IR) présente ${cas.ir}.
1. Associe chaque observation spectrale à une liaison chimique.
2. Déduis-en la famille fonctionnelle (et un nom possible) de ce liquide.`,
    indice: T`Repère les deux bandes clés : $\text{O}-\text{H}$ (large autour de $3300\text{ cm}^{-1}$, ou $2500-3300\text{ cm}^{-1}$ pour un acide) et $\text{C}=\text{O}$ (fine vers $1720\text{ cm}^{-1}$).`,
    correction: T`1. ${cas.exp}
2. Un isomère compatible avec $${cas.f}$ est par exemple : **${cas.nom}**.`
  };
},
() => {
  const n1 = pick([0.10, 0.15, 0.20]);
  const n2 = n1 + 0.05;
  const Mprod = pick([130, 138, 180]);
  const rdt = pick([60, 70, 75, 80]);
  const mmax = n1 * Mprod;
  const mexp = (mmax * rdt) / 100;
  return {
    titre: 'Rendement d\'une synthèse organique',
    enonce: T`Lors d'une synthèse organique (équation stœchiométrique $1:1$, $A + B \longrightarrow P + \text{eau}$), on chauffe à reflux $n_i(A) = ${dec(n1, 2)}\text{ mol}$ de réactif $A$ et $n_i(B) = ${dec(n2, 2)}\text{ mol}$ de réactif $B$.
Après isolement, purification et séchage, on récupère une masse $m_{\text{exp}} = ${dec(mexp, 2)}\text{ g}$ du produit $P$ ($M_P = ${Mprod}\text{ g}\cdot\text{mol}^{-1}$).
1. Quel est l'intérêt du chauffage à reflux ?
2. Quel est le réactif limitant et quelle est la masse théorique maximale $m_{\max}$ de produit attendue ?
3. Calcule le rendement $\eta$ de cette synthèse.`,
    indice: T`Le rendement vaut $\eta = \dfrac{m_{\text{exp}}}{m_{\max}}$, où $m_{\max} = n_{\max}(P) \times M_P$.`,
    correction: T`1. Le **chauffage à reflux** permet d'accélérer la réaction en chauffant sans perdre de réactifs ni de solvant (les vapeurs se condensent dans le réfrigérant et retombent).
2. Comme les coefficients sont $1:1$ et $n_i(A) < n_i(B)$, **$A$ est limitant** et $n_{\max}(P) = ${dec(n1, 2)}\text{ mol}$.
Donc $m_{\max} = ${dec(n1, 2)} \times ${Mprod} = ${dec(mmax, 2)}\text{ g}$.
3. $\eta = \dfrac{m_{\text{exp}}}{m_{\max}} = \dfrac{${dec(mexp, 2)}}{${dec(mmax, 2)}} = ${dec(rdt / 100, 2)}$, soit **$${rdt}\,\%$**.`
  };
}];

/* 6. Combustions et énergie chimique */
E['pc-combustion'] = [
() => {
  const n = pick([2, 3, 4, 5]);
  const nom = { 2: 'éthane', 3: 'propane', 4: 'butane', 5: 'pentane' }[n];
  const h = 2 * n + 2;
  const o2 = (2 * n + (h / 2)) / 2;
  const mult = Number.isInteger(o2) ? 1 : 2;
  const cComb = mult, cO2 = mult * o2, cCO2 = mult * n, cH2O = mult * (h / 2);
  const nComb = pick([2, 3, 5]);
  const nCO2 = nComb * n;
  const mCO2 = nCO2 * 44;
  return {
    titre: 'Équation de combustion d\'un alcane',
    enonce: T`On réalise la combustion complète du ${nom} ($\text{C}_${n}\text{H}_{${h}}$) dans le dioxygène ($\text{O}_2$).
1. Écris l'équation ajustée (avec des coefficients entiers) de cette combustion complète.
2. Si l'on brûle $n = ${nComb}\text{ mol}$ de ${nom}, quelle quantité de matière et quelle masse de $\text{CO}_2$ ($M = 44\text{ g}\cdot\text{mol}^{-1}$) sont rejetées ?`,
    indice: T`Équilibre toujours dans l'ordre : $\text{C} \rightarrow \text{H} \rightarrow \text{O}$ (multiplie toute l'équation par $2$ si tu obtiens un demi-entier devant $\text{O}_2$).`,
    correction: T`1. Avec $${n}$ carbones et $${h}$ hydrogènes, l'équation entière est :
$$${cComb === 1 ? '' : cComb + '\\,'}\\text{C}_${n}\\text{H}_{${h}} + ${cO2}\\,\\text{O}_2 \\longrightarrow ${cCO2}\\,\\text{CO}_2 + ${cH2O}\\,\\text{H}_2\\text{O}$$
2. Chaque mole d'alcane forme $${n}$ moles de $\text{CO}_2$ :
- $n(\text{CO}_2) = ${nComb} \times ${n} = ${nCO2}\text{ mol}$.
- $m(\text{CO}_2) = ${nCO2} \times 44 = ${mCO2}\text{ g}$.`
  };
},
() => {
  const dCH = pick([413, 415]), dOO = 498, dCO = 804, dOH = 463;
  const rompues = 4 * dCH + 2 * dOO;
  const formees = 2 * dCO + 4 * dOH;
  const deltaE = rompues - formees;
  const nMeth = pick([2, 4, 5]);
  const Q = nMeth * Math.abs(deltaE);
  return {
    titre: 'Énergie molaire de combustion par énergies de liaison',
    enonce: T`On étudie la combustion complète du méthane : $\text{CH}_4 + 2\,\text{O}_2 \longrightarrow \text{CO}_2 + 2\,\text{H}_2\text{O}$.
Énergies de liaison moyennes (en $\text{kJ}\cdot\text{mol}^{-1}$) : $D(\text{C}-\text{H}) = ${dCH}$, $D(\text{O}=\text{O}) = ${dOO}$, $D(\text{C}=\text{O}) = ${dCO}$, $D(\text{O}-\text{H}) = ${dOH}$.
1. Calcule l'énergie molaire de réaction $\Delta_r E$. La réaction est-elle exothermique ou endothermique ?
2. Quelle énergie thermique $|Q|$ libère la combustion de $${nMeth}\text{ mol}$ de méthane ?`,
    indice: T`Une molécule de $\text{CO}_2$ ($O=C=O$) contient $2$ liaisons $\text{C}=\text{O}$, et $2\,\text{H}_2\text{O}$ contiennent $4$ liaisons $\text{O}-\text{H}$.`,
    correction: T`1. Énergie des liaisons rompues : $4 \times ${dCH} + 2 \times ${dOO} = ${rompues}\text{ kJ}\cdot\text{mol}^{-1}$.
Énergie des liaisons formées : $2 \times ${dCO} + 4 \times ${dOH} = ${formees}\text{ kJ}\cdot\text{mol}^{-1}$.
$$\Delta_r E = ${rompues} - ${formees} = ${deltaE}\text{ kJ}\cdot\text{mol}^{-1}$$
Comme $\Delta_r E < 0$, la réaction est **exothermique**.
2. Pour $${nMeth}\text{ mol}$ : $|Q| = ${nMeth} \times ${Math.abs(deltaE)} = ${Q}\text{ kJ}$.`
  };
},
() => {
  const PC = pick([42, 45, 46]); // MJ/kg
  const Q = pick([210, 270, 360]); // MJ
  const m = Q / PC;
  return {
    titre: 'Pouvoir calorifique d\'un carburant',
    enonce: T`Un trajet en voiture nécessite une énergie thermique fournie par le carburant égale à $|Q| = ${Q}\text{ MJ}$. On utilise de l'essence de pouvoir calorifique $PC = ${PC}\text{ MJ}\cdot\text{kg}^{-1}$.
1. Quelle masse $m$ d'essence faut-il brûler ?
2. Si l'essence a une masse volumique $\rho = 0{,}75\text{ kg}\cdot\text{L}^{-1}$, quel volume $V$ de carburant cela représente-t-il ?`,
    indice: T`Utilise $|Q| = m \times PC$, puis $V = \dfrac{m}{\rho}$.`,
    correction: T`1. $m = \dfrac{|Q|}{PC} = \dfrac{${Q}}{${PC}} \approx ${dec(m, 2)}\text{ kg}$.
2. $V = \dfrac{m}{\rho} \approx \dfrac{${dec(m, 2)}}{0{,}75} \approx ${dec(m / 0.75, 2)}\text{ L}$.`
  };
}];

/* 7. Interactions fondamentales et champs */
E['pc-interactions-champs'] = [
() => {
  const mA = pick([2, 4, 5]) * 1e3;
  const mB = pick([3, 6]) * 1e3;
  const d = pick([2, 5, 10]);
  const G = 6.67e-11;
  const F = (G * mA * mB) / (d * d);
  return {
    titre: 'Loi de gravitation et influence de la distance',
    enonce: T`Deux masses $m_A = ${mA}\text{ kg}$ et $m_B = ${mB}\text{ kg}$ sont séparées d'une distance $d = ${d}\text{ m}$ ($G = 6{,}67 \times 10^{-11}\text{ N}\cdot\text{m}^2\cdot\text{kg}^{-2}$).
1. Calcule la valeur de la force d'interaction gravitationnelle $F_{A/B}$.
2. Que devient cette force si l'on double la distance ($d' = 2d$) sans changer les masses ?`,
    indice: T`$F = G \dfrac{m_A m_B}{d^2}$ : attention, $d$ est au **carré** au dénominateur !`,
    correction: T`1. $F_{A/B} = 6{,}67 \times 10^{-11} \times \dfrac{${mA} \times ${mB}}{${d}^2} \approx ${sci(F, 2)}\text{ N}$.
2. Comme $F$ est inversement proportionnelle à $d^2$, multiplier la distance par $2$ divise la force par $2^2 = 4$ : $F' = \dfrac{F}{4} \approx ${sci(F / 4, 2)}\text{ N}$.`
  };
},
() => {
  const U = pick([150, 200, 300, 500]);
  const dcm = pick([2.0, 4.0, 5.0]);
  const dm = dcm / 100;
  const E0 = U / dm;
  const q = 1.6e-19;
  const F = q * E0;
  return {
    titre: 'Champ électrostatique entre deux plaques',
    enonce: T`Entre deux plaques planes parallèles distantes de $d = ${dec(dcm, 1)}\text{ cm}$, on applique une tension $U = ${U}\text{ V}$. On place un électron ($q = -1{,}60 \times 10^{-19}\text{ C}$) entre les plaques.
1. Calcule l'intensité du champ électrostatique uniforme $E$ entre les plaques.
2. Calcule la norme $F_e$ de la force électrostatique subie par l'électron, et précise son sens par rapport à $\vec{E}$.`,
    indice: T`Convertis $d$ en mètres, puis utilise $E = \dfrac{U}{d}$ et $F_e = |q| \times E$.`,
    correction: T`1. $d = ${dec(dcm, 1)}\text{ cm} = ${dec(dm, 3)}\text{ m}$.
Donc $E = \dfrac{U}{d} = \dfrac{${U}}{${dec(dm, 3)}} = ${sci(E0, 2)}\text{ V}\cdot\text{m}^{-1}$.
2. $F_e = |q| \times E = 1{,}60 \times 10^{-19} \times ${sci(E0, 2)} \approx ${sci(F, 2)}\text{ N}$.
Comme la charge $q$ de l'électron est **négative**, $\vec{F}_e = q\vec{E}$ est de **sens opposé** au champ $\vec{E}$ (attiré par la plaque positive).`
  };
},
() => {
  const k = 8.99e9, q1 = 2.0e-9, q2 = 3.0e-9;
  const dcm = pick([3.0, 6.0, 10.0]);
  const dm = dcm / 100;
  const Fc = (k * q1 * q2) / (dm * dm);
  return {
    titre: 'Loi de Coulomb entre deux charges',
    enonce: T`Deux petites sphères ponctuelles portent des charges $q_A = +2{,}0\text{ nC}$ et $q_B = -3{,}0\text{ nC}$ et sont distantes de $d = ${dec(dcm, 1)}\text{ cm}$ ($k = 8{,}99 \times 10^9\text{ N}\cdot\text{m}^2\cdot\text{C}^{-2}$, $1\text{ nC} = 10^{-9}\text{ C}$).
1. Cette interaction est-elle attractive ou répulsive ?
2. Calcule la valeur de la force électrique $F_{A/B}$ qui s'exerce entre elles.`,
    indice: T`Convertis les charges en $\text{C}$ ($\times 10^{-9}$) et la distance en $\text{m}$ ($\times 10^{-2}$).`,
    correction: T`1. Les deux charges sont de **signes opposés** ($+$ et $-$), l'interaction est donc **attractive**.
2. Avec $d = ${dec(dm, 3)}\text{ m}$ :
$$F_{A/B} = k \times \dfrac{|q_A \times q_B|}{d^2} = 8{,}99 \times 10^9 \times \dfrac{2{,}0 \times 10^{-9} \times 3{,}0 \times 10^{-9}}{(${dec(dm, 3)})^2} \approx ${sci(Fc, 2)}\text{ N}$$`
  };
}];

/* 8. Statique des fluides et pression */
E['pc-fluides'] = [
() => {
  const F = pick([120, 250, 400, 600]);
  const Scm2 = pick([4, 5, 10, 20]);
  const Sm2 = Scm2 * 1e-4;
  const P = F / Sm2;
  return {
    titre: 'Pression et force pressante',
    enonce: T`Une force pressante de valeur $F = ${F}\text{ N}$ appuie perpendiculairement sur une surface d'aire $S = ${Scm2}\text{ cm}^2$.
1. Convertis l'aire $S$ en $\text{m}^2$.
2. Calcule la pression $P$ correspondante en pascals ($\text{Pa}$), puis en bars ($1\text{ bar} = 10^5\text{ Pa}$).`,
    indice: T`Attention : $1\text{ cm}^2 = 10^{-4}\text{ m}^2$. Ensuite $P = \dfrac{F}{S}$.`,
    correction: T`1. $S = ${Scm2}\text{ cm}^2 = ${Scm2} \times 10^{-4}\text{ m}^2 = ${sci(Sm2, 2)}\text{ m}^2$.
2. $P = \dfrac{F}{S} = \dfrac{${F}}{${sci(Sm2, 2)}} = ${sci(P, 2)}\text{ Pa}$, soit $${dec(P / 1e5, 2)}\text{ bar}$.`
  };
},
() => {
  const V1 = pick([40, 50, 60]);
  const P1 = 1.0; // bar
  const V2 = pick([10, 20, 25]);
  const P2 = (P1 * V1) / V2;
  return {
    titre: 'Compression d\'un gaz (loi de Boyle-Mariotte)',
    enonce: T`On emprisonne un volume $V_1 = ${V1}\text{ mL}$ d'air dans une seringue à la pression atmosphérique $P_1 = 1{,}0\text{ bar}$. On bouche l'embout et on pousse le piston à température constante jusqu'à un volume $V_2 = ${V2}\text{ mL}$.
1. Quel modèle de comportement des gaz s'applique ici ?
2. Calcule la nouvelle pression $P_2$ de l'air dans la seringue.`,
    indice: T`D'après la loi de Boyle-Mariotte à température constante, $P_1 \times V_1 = P_2 \times V_2$.`,
    correction: T`1. À température constante et quantité de gaz fixe, on applique la **loi de Boyle-Mariotte** : $P \times V = \text{constante}$.
2. $P_2 = \dfrac{P_1 \times V_1}{V_2} = \dfrac{1{,}0 \times ${V1}}{${V2}} = ${dec(P2, 2)}\text{ bar}$ (soit $${sci(P2 * 1e5, 2)}\text{ Pa}$).`
  };
},
() => {
  const h = pick([15, 20, 30, 40]);
  const rho = 1025, g = 9.81, Patm = 1.013e5;
  const P = Patm + rho * g * h;
  const Scm2 = 400;
  const F = P * (Scm2 * 1e-4);
  return {
    titre: 'Pression sous-marine et loi de la statique des fluides',
    enonce: T`Un hublot sous-marin d'aire $S = ${Scm2}\text{ cm}^2$ se trouve à une profondeur $h = ${h}\text{ m}$ dans de l'eau de mer ($\rho = 1025\text{ kg}\cdot\text{m}^{-3}$, $g = 9{,}81\text{ N}\cdot\text{kg}^{-1}$, $P_{\text{atm}} = 1{,}013 \times 10^5\text{ Pa}$).
1. Calcule la pression $P$ de l'eau à cette profondeur.
2. Calcule l'intensité $F$ de la force pressante exercée par l'eau sur l'extérieur du hublot.`,
    indice: T`Utilise $P = P_{\text{atm}} + \rho \times g \times h$, puis $F = P \times S$ (avec $S$ en $\text{m}^2$).`,
    correction: T`1. $P = P_{\text{atm}} + \rho g h = 1{,}013 \times 10^5 + 1025 \times 9{,}81 \times ${h} \approx ${sci(P, 2)}\text{ Pa}$ (soit environ $${dec(P / 1e5, 2)}\text{ bar}$).
2. Avec $S = ${Scm2} \times 10^{-4} = 0{,}040\text{ m}^2$ :
$$F = P \times S \approx ${sci(P, 2)} \times 0{,}040 \approx ${sci(F, 2)}\text{ N}$$`
  };
}];

/* 9. Mouvement, vecteur vitesse et loi de Newton */
E['pc-mouvement-newton'] = [
() => {
  const dtms = pick([40, 50, 80, 100]);
  const dt = dtms / 1000;
  const dcm = pick([6.0, 8.0, 12.0]);
  const dm = dcm / 100;
  const v = dm / (2 * dt);
  return {
    titre: 'Calcul d\'une vitesse sur une chronophotographie',
    enonce: T`Sur une chronophotographie prise toutes les $\Delta t = ${dtms}\text{ ms}$, la distance réelle entre les points $M_{i-1}$ et $M_{i+1}$ vaut $M_{i-1}M_{i+1} = ${dec(dcm, 1)}\text{ cm}$.
1. Quelle durée s'écoule entre le passage en $M_{i-1}$ et le passage en $M_{i+1}$ ?
2. Calcule la valeur de la vitesse $v_i$ au point $M_i$.`,
    indice: T`Entre $M_{i-1}$ et $M_{i+1}$, il y a **$2$ intervalles** de temps, soit $2\,\Delta t$.`,
    correction: T`1. Il s'écoule $2\,\Delta t = 2 \times ${dec(dt, 3)} = ${dec(2 * dt, 3)}\text{ s}$.
2. Avec $M_{i-1}M_{i+1} = ${dec(dm, 3)}\text{ m}$ :
$$v_i = \dfrac{M_{i-1}M_{i+1}}{2\,\Delta t} = \dfrac{${dec(dm, 3)}}{${dec(2 * dt, 3)}} = ${dec(v, 2)}\text{ m}\cdot\text{s}^{-1}$$`
  };
},
() => {
  const m = pick([0.4, 0.5, 0.8, 1.2]);
  const v1 = pick([2.0, 3.0, 4.0]);
  const dv = pick([1.5, 2.0, 2.5]);
  const v2 = v1 + dv;
  const dt = pick([0.1, 0.2, 0.25]);
  const F = (m * dv) / dt;
  return {
    titre: 'Deuxième loi de Newton approchée',
    enonce: T`Un chariot de masse $m = ${dec(m, 1)}\text{ kg}$ roule en ligne droite vers la droite. À l'instant $t_1$, sa vitesse vaut $v_1 = ${dec(v1, 1)}\text{ m}\cdot\text{s}^{-1}$. Une durée $\Delta t = ${dec(dt, 2)}\text{ s}$ plus tard, sa vitesse vaut $v_2 = ${dec(v2, 1)}\text{ m}\cdot\text{s}^{-1}$ toujours vers la droite.
1. Donne la direction, le sens et la norme de $\Delta\vec{v} = \vec{v}_2 - \vec{v}_1$.
2. Déduis-en la valeur et le sens de la somme des forces extérieures $\sum \vec{F}_{\text{ext}}$ agissant sur le chariot.`,
    indice: T`Utilise la relation approchée de la 2ᵉ loi de Newton : $\sum\vec{F} \approx m \dfrac{\Delta\vec{v}}{\Delta t}$.`,
    correction: T`1. Les deux vecteurs ont la même direction (horizontale) et le même sens (vers la droite) : $\Delta\vec{v}$ est donc horizontal vers la droite, de norme $\Delta v = v_2 - v_1 = ${dec(v2, 1)} - ${dec(v1, 1)} = ${dec(dv, 1)}\text{ m}\cdot\text{s}^{-1}$.
2. D'après la 2ᵉ loi de Newton, $\sum\vec{F}_{\text{ext}}$ a le même sens que $\Delta\vec{v}$ (vers la droite) et vaut :
$$\sum F = m \times \dfrac{\Delta v}{\Delta t} = ${dec(m, 1)} \times \dfrac{${dec(dv, 1)}}{${dec(dt, 2)}} = ${dec(F, 2)}\text{ N}$$`
  };
},
() => {
  const m = pick([0.5, 1.0, 1.5]);
  const vx = 4.0, vy1 = 2.0, vy2 = -1.0;
  const dt = pick([0.2, 0.3, 0.5]);
  const dvy = vy2 - vy1;
  const F = (m * Math.abs(dvy)) / dt;
  return {
    titre: 'Variation de vitesse en chute parabolique',
    enonce: T`Un ballon de masse $m = ${dec(m, 1)}\text{ kg}$ effectue un lancer dans un repère $(Ox$ horizontal, $Oy$ vertical vers le haut$)$.
À l'instant $t_1$, les coordonnées de sa vitesse sont $\vec{v}_1(4{,}0\,;\,2{,}0)\text{ m}\cdot\text{s}^{-1}$.
À l'instant $t_2 = t_1 + ${dec(dt, 1)}\text{ s}$, sa vitesse vaut $\vec{v}_2(4{,}0\,;\,-1{,}0)\text{ m}\cdot\text{s}^{-1}$.
1. Calcule les coordonnées de $\Delta\vec{v} = \vec{v}_2 - \vec{v}_1$, puis sa norme $\|\Delta\vec{v}\|$.
2. Calcule la norme et la direction de la résultante des forces $\sum\vec{F}$ sur le ballon.`,
    indice: T`Soustrais coordonnée par coordonnée : $\Delta v_x = v_{2x} - v_{1x}$ et $\Delta v_y = v_{2y} - v_{1y}$.`,
    correction: T`1. $\Delta v_x = 4{,}0 - 4{,}0 = 0\text{ m}\cdot\text{s}^{-1}$ et $\Delta v_y = -1{,}0 - 2{,}0 = -3{,}0\text{ m}\cdot\text{s}^{-1}$.
Donc $\Delta\vec{v}(0\,;\,-3{,}0)$ est vertical dirigé **vers le bas**, de norme $3{,}0\text{ m}\cdot\text{s}^{-1}$.
2. $\sum\vec{F} = m\dfrac{\Delta\vec{v}}{\Delta t}$ est vertical vers le bas, de norme :
$$F = ${dec(m, 1)} \times \dfrac{3{,}0}{${dec(dt, 1)}} = ${dec(F, 2)}\text{ N}$$`
  };
}];

/* 10. Énergie et puissance électrique */
E['pc-electricite'] = [
() => {
  const U = 230, I = pick([4, 5, 6, 8, 10]);
  const P = U * I;
  const min = pick([15, 20, 30]);
  const dt = min * 60;
  const Ej = P * dt;
  const Ewh = (P * min) / 60;
  return {
    titre: 'Puissance et énergie d\'un appareil électrique',
    enonce: T`Un radiateur fonctionne sous une tension $U = 230\text{ V}$ et est parcouru par un courant $I = ${I}\text{ A}$ pendant $\Delta t = ${min}\text{ min}$.
1. Calcule la puissance électrique $P$ reçue par le radiateur.
2. Calcule l'énergie électrique $E$ consommée pendant ces $${min}$ minutes, en joules ($\text{J}$) puis en wattheures ($\text{Wh}$).`,
    indice: T`Pour calculer en joules, convertis $\Delta t$ en **secondes** ($\times 60$). Pour des $\text{Wh}$, convertis $\Delta t$ en **heures** ($/ 60$).`,
    correction: T`1. $P = U \times I = 230 \times ${I} = ${P}\text{ W}$.
2. En joules ($\Delta t = ${min} \times 60 = ${dt}\text{ s}$) :
$$E = P \times \Delta t = ${P} \times ${dt} = ${sci(Ej, 2)}\text{ J}$$
En wattheures ($\Delta t = ${dec(min / 60, 3)}\text{ h}$) : $E = ${P} \times \dfrac{${min}}{60} = ${dec(Ewh, 1)}\text{ Wh}$.`
  };
},
() => {
  const E0 = pick([9.0, 12.0]);
  const r = pick([0.5, 1.0]);
  const I = pick([2.0, 3.0, 4.0]);
  const U = E0 - r * I;
  const Pu = U * I, Pj = r * I * I, Pt = E0 * I;
  const rdt = (Pu / Pt) * 100;
  return {
    titre: 'Bilan de puissance d\'un générateur réel',
    enonce: T`Une batterie de force électromotrice $E = ${dec(E0, 1)}\text{ V}$ et de résistance interne $r = ${dec(r, 1)}\text{ }\Omega$ débite un courant $I = ${dec(I, 1)}\text{ A}$.
1. Calcule la tension $U$ disponible aux bornes de la batterie.
2. Calcule la puissance utile $P_{\text{utile}}$ fournie au circuit et la puissance perdue par effet Joule $P_J$.
3. Déduis-en le rendement $\eta$ de la batterie dans ce régime.`,
    indice: T`Pour un générateur réel : $U = E - rI$, $P_{\text{utile}} = UI$, $P_J = rI^2$ et $P_{\text{totale}} = EI$.`,
    correction: T`1. $U = E - rI = ${dec(E0, 1)} - ${dec(r, 1)} \times ${dec(I, 1)} = ${dec(U, 1)}\text{ V}$.
2. $P_{\text{utile}} = U \times I = ${dec(U, 1)} \times ${dec(I, 1)} = ${dec(Pu, 1)}\text{ W}$.
$P_J = r \times I^2 = ${dec(r, 1)} \times ${dec(I, 1)}^2 = ${dec(Pj, 1)}\text{ W}$.
3. Puissance totale : $P_{\text{totale}} = E \times I = ${dec(Pt, 1)}\text{ W}$.
Rendement : $\eta = \dfrac{P_{\text{utile}}}{P_{\text{totale}}} = \dfrac{${dec(Pu, 1)}}{${dec(Pt, 1)}} \approx ${dec(rdt, 1)}\,\%$.`
  };
},
() => {
  const E0 = 12, r = pick([1, 2]), Rres = pick([4, 5, 10]);
  const I = E0 / (Rres + r);
  const U = Rres * I;
  const Pr = Rres * I * I;
  const eta = (Rres / (Rres + r)) * 100;
  return {
    titre: 'Générateur branché sur une résistance',
    enonce: T`On branche un résistor de résistance $R = ${Rres}\text{ }\Omega$ aux bornes d'un générateur ($E = ${E0}\text{ V}$, $r = ${r}\text{ }\Omega$).
1. À l'aide de la loi des mailles ($E - rI - RI = 0$), calcule l'intensité $I$ dans le circuit.
2. Calcule la tension $U$ aux bornes du résistor et la puissance thermique $P_J$ dissipée dans $R$.
3. Calcule le rendement $\eta$ du générateur.`,
    indice: T`D'après la loi des mailles, $I = \dfrac{E}{R + r}$.`,
    correction: T`1. $I = \dfrac{E}{R + r} = \dfrac{${E0}}{${Rres} + ${r}} = ${dec(I, 2)}\text{ A}$.
2. $U = R \times I = ${Rres} \times ${dec(I, 2)} = ${dec(U, 2)}\text{ V}$.
$P_J = R \times I^2 = ${Rres} \times (${dec(I, 2)})^2 \approx ${dec(Pr, 2)}\text{ W}$.
3. $\eta = \dfrac{U \times I}{E \times I} = \dfrac{U}{E} = \dfrac{R}{R + r} \approx ${dec(eta, 1)}\,\%$.`
  };
}];

/* 11. Travail d'une force et énergie mécanique */
E['pc-energie-mecanique'] = [
() => {
  const m = pick([60, 70, 80, 900]);
  const vkmh = pick([36, 54, 72, 90]);
  const vms = vkmh / 3.6;
  const Ec = 0.5 * m * vms * vms;
  const z = pick([5, 10, 15]);
  const Epp = m * 9.81 * z;
  return {
    titre: 'Énergie cinétique et énergie potentielle',
    enonce: T`Un mobile de masse $m = ${m}\text{ kg}$ roule à $v = ${vkmh}\text{ km}\cdot\text{h}^{-1}$ sur un viaduc situé à l'altitude $z = ${z}\text{ m}$ ($g = 9{,}81\text{ N}\cdot\text{kg}^{-1}$).
1. Convertis la vitesse $v$ en $\text{m}\cdot\text{s}^{-1}$, puis calcule l'énergie cinétique $E_c$.
2. Calcule l'énergie potentielle de pesanteur $E_{pp}$ (avec $E_{pp} = 0$ au niveau du sol) et l'énergie mécanique $E_m$.`,
    indice: T`Pour passer de $\text{km}\cdot\text{h}^{-1}$ à $\text{m}\cdot\text{s}^{-1}$, divise par $3{,}6$.`,
    correction: T`1. $v = \dfrac{${vkmh}}{3{,}6} = ${vms}\text{ m}\cdot\text{s}^{-1}$.
$$E_c = \dfrac{1}{2} m v^2 = 0{,}5 \times ${m} \times ${vms}^2 = ${sci(Ec, 2)}\text{ J}$$
2. $E_{pp} = m g z = ${m} \times 9{,}81 \times ${z} \approx ${sci(Epp, 2)}\text{ J}$.
Donc $E_m = E_c + E_{pp} \approx ${sci(Ec + Epp, 2)}\text{ J}$.`
  };
},
() => {
  const zA = pick([2.0, 3.2, 4.5, 5.0]);
  const g = 9.81;
  const vB = Math.sqrt(2 * g * zA);
  return {
    titre: 'Conservation de l\'énergie mécanique sans frottements',
    enonce: T`Un skieur part sans vitesse initiale ($v_A = 0$) du sommet $A$ d'une piste située à l'altitude $z_A = ${dec(zA, 1)}\text{ m}$ au-dessus de l'arrivée $B$ ($z_B = 0$). On néglige les frottements ($g = 9{,}81\text{ N}\cdot\text{kg}^{-1}$).
1. Justifie la conservation de l'énergie mécanique $E_m$ entre $A$ et $B$.
2. Exprime puis calcule la vitesse $v_B$ du skieur au point $B$.`,
    indice: T`Écris $E_c(A) + E_{pp}(A) = E_c(B) + E_{pp}(B)$ : la masse $m$ se simplifie des deux côtés !`,
    correction: T`1. Les frottements sont négligés et la réaction de la piste est perpendiculaire au déplacement ($W(\vec{R}) = 0$). Seul le poids (force conservative) travaille : **$E_m$ se conserve**.
2. $0 + m g z_A = \dfrac{1}{2} m v_B^2 + 0 \implies v_B^2 = 2 g z_A$, soit :
$$v_B = \sqrt{2 g z_A} = \sqrt{2 \times 9{,}81 \times ${dec(zA, 1)}} \approx ${dec(vB, 2)}\text{ m}\cdot\text{s}^{-1}$$`
  };
},
() => {
  const m = pick([40, 50, 60]);
  const h = pick([6.0, 8.0, 10.0]);
  const L = pick([15, 20, 25]);
  const vB = pick([6.0, 8.0]);
  const g = 9.81;
  const EmA = m * g * h;
  const EmB = 0.5 * m * vB * vB;
  const dEm = EmB - EmA;
  const f = -dEm / L;
  return {
    titre: 'Chute sur piste avec frottements',
    enonce: T`Un enfant de masse $m = ${m}\text{ kg}$ glisse sans vitesse initiale depuis le haut d'un toboggan de hauteur $h = ${dec(h, 1)}\text{ m}$ et de longueur $L = ${L}\text{ m}$. En bas ($z_B = 0$), sa vitesse mesurée vaut $v_B = ${dec(vB, 1)}\text{ m}\cdot\text{s}^{-1}$ ($g = 9{,}81\text{ N}\cdot\text{kg}^{-1}$).
1. Calcule l'énergie mécanique $E_m(A)$ au départ et $E_m(B)$ à l'arrivée.
2. En utilisant $\Delta E_m = W_{AB}(\vec{f})$, déduis-en la valeur $f$ de la force de frottement supposée constante et opposée au mouvement.`,
    indice: T`$W_{AB}(\vec{f}) = -f \times L$ car les frottements s'opposent au déplacement ($\cos 180^\circ = -1$).`,
    correction: T`1. $E_m(A) = 0 + m g h = ${m} \times 9{,}81 \times ${dec(h, 1)} \approx ${dec(EmA, 0)}\text{ J}$.
$E_m(B) = \dfrac{1}{2} m v_B^2 + 0 = 0{,}5 \times ${m} \times ${dec(vB, 1)}^2 = ${dec(EmB, 0)}\text{ J}$.
2. $\Delta E_m = E_m(B) - E_m(A) \approx ${dec(dEm, 0)}\text{ J} = -f \times L$.
Donc $f = \dfrac{|\Delta E_m|}{L} \approx \dfrac{${dec(-dEm, 0)}}{${L}} \approx ${dec(f, 1)}\text{ N}$.`
  };
}];

/* 12. Ondes mécaniques, lentilles et photons */
E['pc-ondes-optique'] = [
() => {
  const v = pick([340, 1500]);
  const milieu = v === 340 ? 'dans l\'air' : 'dans l\'eau';
  const f = pick([200, 400, 500, 1000]);
  const Tper = 1 / f;
  const lambda = v / f;
  return {
    titre: 'Onde sonore périodique',
    enonce: T`Un haut-parleur émet un son de fréquence $f = ${f}\text{ Hz}$ qui se propage ${milieu} à la célérité $v = ${v}\text{ m}\cdot\text{s}^{-1}$.
1. Calcule la période temporelle $T$ de cette onde sonore.
2. Calcule sa longueur d'onde $\lambda$.`,
    indice: T`Utilise $T = \dfrac{1}{f}$ et $\lambda = v \times T = \dfrac{v}{f}$.`,
    correction: T`1. $T = \dfrac{1}{f} = \dfrac{1}{${f}} = ${sci(Tper, 2)}\text{ s}$.
2. $\lambda = \dfrac{v}{f} = \dfrac{${v}}{${f}} = ${dec(lambda, 2)}\text{ m}$.`
  };
},
() => {
  const cas = pick([
    { f: 10, OA: -15, OAp: 30, AB: 2.0 },
    { f: 12, OA: -24, OAp: 24, AB: 3.0 },
    { f: 15, OA: -60, OAp: 20, AB: 4.0 },
    { f: 10, OA: -30, OAp: 15, AB: 3.0 },
    { f: 20, OA: -30, OAp: 60, AB: 2.5 }
  ]);
  const gamma = cas.OAp / cas.OA;
  const ApBp = gamma * cas.AB;
  return {
    titre: 'Lentille mince convergente : relation de conjugaison',
    enonce: T`Un objet réel $AB$ de hauteur $AB = ${dec(cas.AB, 1)}\text{ cm}$ est placé à $${Math.abs(cas.OA)}\text{ cm}$ devant une lentille mince convergente de distance focale $f' = +${cas.f}\text{ cm}$ (soit $\overline{OA} = ${cas.OA}\text{ cm}$).
1. Calcule la position algébrique $\overline{OA'}$ de l'image $A'B'$.
2. Calcule le grandissement $\gamma$ et la taille $\overline{A'B'}$. L'image est-elle droite ou renversée ?`,
    indice: T`Relation de conjugaison : $\dfrac{1}{\overline{OA'}} - \dfrac{1}{\overline{OA}} = \dfrac{1}{f'}$. N'oublie pas que $\overline{OA}$ est négatif !`,
    correction: T`1. $\dfrac{1}{\overline{OA'}} = \dfrac{1}{f'} + \dfrac{1}{\overline{OA}} = \dfrac{1}{${cas.f}} + \dfrac{1}{${cas.OA}} = \dfrac{1}{${cas.OAp}}$.
Donc $\overline{OA'} = +${cas.OAp}\text{ cm}$ (image réelle formée $${cas.OAp}\text{ cm}$ après la lentille).
2. $\gamma = \dfrac{\overline{OA'}}{\overline{OA}} = \dfrac{${cas.OAp}}{${cas.OA}} = ${dec(gamma, 2)}$.
Comme $\gamma < 0$, l'image est **renversée**, et $\overline{A'B'} = \gamma \times \overline{AB} = ${dec(ApBp, 2)}\text{ cm}$.`
  };
},
() => {
  const E1 = pick([-3.40, -13.6]);
  const E2 = pick([-1.51, -0.85]);
  const dEeV = E2 - E1;
  const dEJ = dEeV * 1.60e-19;
  const h = 6.63e-34, c = 3.00e8;
  const lambdaM = (h * c) / dEJ;
  const lambdaNm = lambdaM * 1e9;
  const domaine = lambdaNm < 400 ? 'ultraviolet (UV)' : lambdaNm <= 800 ? 'visible' : 'infrarouge (IR)';
  return {
    titre: 'Transition atomique et photon émis',
    enonce: T`Un atome d'hydrogène passe d'un niveau d'énergie excité $E_{\text{haut}} = ${dec(E2, 2)}\text{ eV}$ vers un niveau inférieur $E_{\text{bas}} = ${dec(E1, 2)}\text{ eV}$.
On donne $h = 6{,}63 \times 10^{-34}\text{ J}\cdot\text{s}$, $c = 3{,}00 \times 10^8\text{ m}\cdot\text{s}^{-1}$ et $1\text{ eV} = 1{,}60 \times 10^{-19}\text{ J}$.
1. Calcule l'énergie $\Delta E$ du photon émis en $\text{eV}$, puis en joules ($\text{J}$).
2. Calcule la longueur d'onde $\lambda$ de ce photon en nanomètres ($\text{nm}$) et indique le domaine spectral (UV, visible ou IR).`,
    indice: T`Convertis $\Delta E = E_{\text{haut}} - E_{\text{bas}}$ en joules avant d'utiliser $\lambda = \dfrac{h \times c}{\Delta E}$.`,
    correction: T`1. $\Delta E = ${dec(E2, 2)} - (${dec(E1, 2)}) = ${dec(dEeV, 2)}\text{ eV}$.
En joules : $\Delta E = ${dec(dEeV, 2)} \times 1{,}60 \times 10^{-19} \approx ${sci(dEJ, 2)}\text{ J}$.
2. $\lambda = \dfrac{h \times c}{\Delta E} = \dfrac{6{,}63 \times 10^{-34} \times 3{,}00 \times 10^8}{${sci(dEJ, 2)}} \approx ${sci(lambdaM, 2)}\text{ m} \approx ${dec(lambdaNm, 0)}\text{ nm}$.
Comme $400\text{ nm} \leq \lambda \leq 800\text{ nm}$ correspond au visible, cette radiation se situe dans le domaine **${domaine}**.`
  };
}];

window.EXERCICES_PC = E;
})();
