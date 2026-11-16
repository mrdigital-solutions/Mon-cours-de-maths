/* Base d'exercices : pour chaque chapitre, trois modèles (facile, moyen, difficile).
   Les nombres sont tirés au hasard et la correction est calculée à partir de ces nombres,
   donc chaque clic donne un nouvel exercice avec une correction juste. */
(() => {
const T = String.raw;
const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const nz = (a, b) => { let n = 0; while (!n) n = R(a, b); return n; };
const pick = (t) => t[R(0, t.length - 1)];
const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
/* fraction simplifiée en LaTeX */
const fr = (n, d) => {
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d) || 1; n /= g; d /= g;
  if (d === 1) return String(n);
  return (n < 0 ? '-' : '') + T`\dfrac{${Math.abs(n)}}{${d}}`;
};
/* nombre décimal arrondi, avec une virgule */
const dec = (x, k = 2) => String(Math.round(x * 10 ** k) / 10 ** k).replace('.', '{,}');
const par = (n) => (n < 0 ? '(' + n + ')' : String(n));
/* polynôme : liste de [coefficient, lettre] */
const poly = (termes) => {
  let s = '';
  for (const [c, v] of termes) {
    if (!c) continue;
    const a = Math.abs(c), corps = (a === 1 && v) ? v : a + v;
    s += s ? (c < 0 ? ' - ' : ' + ') + corps : (c < 0 ? '-' : '') + corps;
  }
  return s || '0';
};
const tri = (a, b, c) => poly([[a, 'x^2'], [b, 'x'], [c, '']]);
const lin = (a, b, v = 'x') => poly([[a, v], [b, '']]);
/* (x - a)^2 */
const carre = (v, a) => (a === 0 ? v + '^2' : '(' + v + (a < 0 ? ' + ' : ' - ') + Math.abs(a) + ')^2');
const expo = (n) => (n === 0 ? '1' : n === 1 ? 'e' : 'e^{' + n + '}');
const racine = (n) => { const r = Math.round(Math.sqrt(n)); return r * r === n ? String(r) : T`\sqrt{${n}}`; };
/* angle p*pi/q en LaTeX */
const ang = (p, q) => {
  const a = Math.abs(p), s = p < 0 ? '-' : '';
  if (q === 1) return s + (a === 1 ? '' : a) + T`\pi`;
  return s + T`\dfrac{${a === 1 ? '' : a}\pi}{${q}}`;
};
const TRIGO = { 6: [T`\dfrac{\sqrt{3}}{2}`, T`\dfrac{1}{2}`], 4: [T`\dfrac{\sqrt{2}}{2}`, T`\dfrac{\sqrt{2}}{2}`], 3: [T`\dfrac{1}{2}`, T`\dfrac{\sqrt{3}}{2}`] };
const ANGLES = [];
for (const q of [6, 4, 3]) {
  const ps = q === 6 ? [1, 5] : q === 4 ? [1, 3] : [1, 2];
  for (const p of ps) for (const s of [1, -1]) {
    const cosNeg = p / q > 0.5, sinNeg = s < 0;
    ANGLES.push({ p: s * p, q, cos: (cosNeg ? '-' : '') + TRIGO[q][0], sin: (sinNeg ? '-' : '') + TRIGO[q][1], cosNeg, sinNeg });
  }
}
const quadrant = (a) => 'Le point image est ' + (a.sinNeg ? 'en bas' : 'en haut') + ' ' + (a.cosNeg ? 'à gauche' : 'à droite') +
  ' du cercle : le cosinus est ' + (a.cosNeg ? 'négatif' : 'positif') + ' et le sinus est ' + (a.sinNeg ? 'négatif' : 'positif') + '.';

const E = {};

/* ---------------- Suites ---------------- */
E.suites = [
() => {
  const u0 = R(-5, 8), r = nz(-6, 7), n = R(10, 25);
  return {
    titre: 'Suite arithmétique',
    enonce: T`La suite $(u_n)$ est arithmétique, de premier terme $u_0 = ${u0}$ et de raison $r = ${r}$.
1. Calcule $u_1$, $u_2$ et $u_3$.
2. Exprime $u_n$ en fonction de $n$.
3. Calcule $u_{${n}}$.`,
    indice: T`Dans une suite arithmétique, on passe d'un terme au suivant en ajoutant la raison. Formule : $u_n = u_0 + n \times r$.`,
    correction: T`1. On ajoute la raison $${r}$ à chaque étape : $u_1 = ${u0} + ${par(r)} = ${u0 + r}$, puis $u_2 = ${u0 + 2 * r}$ et $u_3 = ${u0 + 3 * r}$.
2. Pour une suite arithmétique, $u_n = u_0 + n \times r$, donc $u_n = ${poly([[u0, ''], [r, 'n']])}$.
3. On remplace $n$ par $${n}$ : $u_{${n}} = ${u0} + ${n} \times ${par(r)} = ${u0 + n * r}$.`
  };
},
() => {
  const C = pick([800, 1000, 1500, 2000, 5000]), t = pick([2, 3, 4, 5]), n = R(3, 8), q = 1 + t / 100;
  return {
    titre: 'Placement à taux fixe',
    enonce: T`On place $${C}$ € sur un compte qui rapporte $${t}\,\%$ par an (intérêts composés). On note $u_n$ la somme disponible après $n$ années, avec $u_0 = ${C}$.
1. Calcule $u_1$.
2. Quelle est la nature de la suite $(u_n)$ ? Donne sa raison.
3. Exprime $u_n$ en fonction de $n$.
4. Quelle somme a-t-on après $${n}$ ans ? Arrondis au centime.`,
    indice: T`Augmenter de $${t}\,\%$, c'est multiplier par $1 + \dfrac{${t}}{100} = ${dec(q)}$.`,
    correction: T`1. Augmenter de $${t}\,\%$ revient à multiplier par $${dec(q)}$ : $u_1 = ${C} \times ${dec(q)} = ${dec(C * q)}$.
2. Chaque année on multiplie par le même nombre : $u_{n+1} = ${dec(q)} \times u_n$. La suite est géométrique de raison $q = ${dec(q)}$.
3. Pour une suite géométrique, $u_n = u_0 \times q^n$, donc $u_n = ${C} \times ${dec(q)}^n$.
4. $u_{${n}} = ${C} \times ${dec(q)}^{${n}} \approx ${dec(C * q ** n)}$. Après $${n}$ ans, on dispose d'environ $${dec(C * q ** n)}$ €.`
  };
},
() => {
  const u0 = R(1, 9), r = R(2, 7), n = R(10, 30), un = u0 + n * r, S = (n + 1) * (u0 + un) / 2;
  return {
    titre: 'Somme de termes',
    enonce: T`La suite $(u_n)$ est arithmétique, de premier terme $u_0 = ${u0}$ et de raison $r = ${r}$.
1. Exprime $u_n$ en fonction de $n$, puis calcule $u_{${n}}$.
2. Quel est le sens de variation de la suite ?
3. Calcule la somme $S = u_0 + u_1 + \dots + u_{${n}}$.`,
    indice: T`De $u_0$ à $u_{${n}}$ il y a $${n + 1}$ termes. Somme = nombre de termes $\times \dfrac{\text{premier} + \text{dernier}}{2}$.`,
    correction: T`1. $u_n = u_0 + n \times r = ${poly([[u0, ''], [r, 'n']])}$, donc $u_{${n}} = ${u0} + ${n} \times ${r} = ${un}$.
2. $u_{n+1} - u_n = ${r}$, qui est positif : la suite est croissante.
3. De $u_0$ à $u_{${n}}$ il y a $${n + 1}$ termes. Pour une suite arithmétique :
$$S = ${n + 1} \times \dfrac{u_0 + u_{${n}}}{2} = ${n + 1} \times \dfrac{${u0} + ${un}}{2} = ${S}$$`
  };
}];

/* ---------------- Second degré ---------------- */
E['second-degre'] = [
() => {
  let r1 = nz(-6, 6), r2 = nz(-6, 6); while (r2 === r1) r2 = nz(-6, 6);
  const b = -(r1 + r2), c = r1 * r2, D = b * b - 4 * c, s = Math.abs(r1 - r2), x1 = Math.min(r1, r2), x2 = Math.max(r1, r2);
  return {
    titre: 'Résoudre une équation',
    enonce: T`Résous l'équation $${tri(1, b, c)} = 0$.`,
    indice: T`Repère $a$, $b$ et $c$, puis calcule $\Delta = b^2 - 4ac$.`,
    correction: T`1. On a $a = 1$, $b = ${b}$ et $c = ${c}$.
2. $\Delta = b^2 - 4ac = ${par(b)}^2 - 4 \times 1 \times ${par(c)} = ${b * b} ${-4 * c < 0 ? '-' : '+'} ${Math.abs(4 * c)} = ${D}$.
3. $\Delta > 0$, donc il y a deux solutions, et $\sqrt{\Delta} = ${s}$.
4. $x_1 = \dfrac{-b - \sqrt{\Delta}}{2a} = \dfrac{${-b} - ${s}}{2} = ${x1}$ et $x_2 = \dfrac{-b + \sqrt{\Delta}}{2a} = \dfrac{${-b} + ${s}}{2} = ${x2}$.
Les solutions sont $${x1}$ et $${x2}$.
Vérification rapide : leur somme vaut $${x1 + x2}$, c'est bien $-b$, et leur produit vaut $${c}$, c'est bien $c$.`
  };
},
() => {
  const a = pick([-2, -1, 1, 2, 3]); let r1 = R(-5, 5), r2 = R(-5, 6); while (r2 === r1) r2 = R(-5, 6);
  const x1 = Math.min(r1, r2), x2 = Math.max(r1, r2), b = -a * (x1 + x2), c = a * x1 * x2, D = b * b - 4 * a * c, s = Math.abs(a) * (x2 - x1);
  const sup = pick([true, false]), ext = (a > 0) === sup;
  return {
    titre: 'Résoudre une inéquation',
    enonce: T`Résous l'inéquation $${tri(a, b, c)} ${sup ? '>' : '<'} 0$.`,
    indice: T`Cherche d'abord les racines avec $\Delta$. Ensuite, le trinôme est du signe de $a$ à l'extérieur des racines.`,
    correction: T`1. On a $a = ${a}$, $b = ${b}$ et $c = ${c}$.
2. $\Delta = b^2 - 4ac = ${par(b)}^2 - 4 \times ${par(a)} \times ${par(c)} = ${D}$, donc $\sqrt{\Delta} = ${s}$.
3. Racines : $\dfrac{${-b} - ${s}}{${2 * a}} = ${fr(-b - s, 2 * a)}$ et $\dfrac{${-b} + ${s}}{${2 * a}} = ${fr(-b + s, 2 * a)}$. Les racines sont donc $${x1}$ et $${x2}$.
4. $a = ${a}$ est ${a > 0 ? 'positif' : 'négatif'}. Le trinôme est du signe de $a$, donc ${a > 0 ? 'positif' : 'négatif'}, à l'extérieur des racines, et ${a > 0 ? 'négatif' : 'positif'} entre les racines.
5. On veut que le trinôme soit strictement ${sup ? 'positif' : 'négatif'} : c'est le cas ${ext ? "à l'extérieur des racines" : 'entre les racines'}.
$$S = ${ext ? T`\,]-\infty\,; ${x1}[\, \cup \,]${x2}\,; +\infty[` : T`\,]${x1}\,; ${x2}[`}$$`
  };
},
() => {
  const p = nz(-5, 5), k = nz(-6, 6), c = p * p + k;
  const sol = k > 0
    ? T`Comme $${carre('x', -p)} \geq 0$, on a $f(x) \geq ${k} > 0$ : l'équation $f(x) = 0$ n'a aucune solution.`
    : T`$f(x) = 0$ revient à $${carre('x', -p)} = ${-k}$, donc $x ${p > 0 ? '+' : '-'} ${Math.abs(p)} = ${racine(-k)}$ ou $x ${p > 0 ? '+' : '-'} ${Math.abs(p)} = -${racine(-k)}$. Les solutions sont $${-p} - ${racine(-k)}$ et $${-p} + ${racine(-k)}$${Number.isInteger(Math.sqrt(-k)) ? T`, c'est-à-dire $${-p - Math.sqrt(-k)}$ et $${-p + Math.sqrt(-k)}$` : ''}.`;
  return {
    titre: 'Forme canonique',
    enonce: T`Soit $f(x) = ${tri(1, 2 * p, c)}$.
1. Écris $f(x)$ sous forme canonique en complétant le carré.
2. Quel est le minimum de $f$ ? Pour quelle valeur de $x$ est-il atteint ?
3. Résous l'équation $f(x) = 0$.`,
    indice: T`Utilise $x^2 + 2px = (x + p)^2 - p^2$, avec ici $2p = ${2 * p}$.`,
    correction: T`1. $${poly([[1, 'x^2'], [2 * p, 'x']])} = ${carre('x', -p)} - ${p * p}$. Donc $f(x) = ${carre('x', -p)} - ${p * p} ${c < 0 ? '-' : '+'} ${Math.abs(c)} = ${carre('x', -p)} ${k < 0 ? '-' : '+'} ${Math.abs(k)}$.
2. Un carré est toujours positif ou nul, donc $f(x) \geq ${k}$. Le minimum de $f$ vaut $${k}$, atteint quand $${carre('x', -p)} = 0$, c'est-à-dire pour $x = ${-p}$.
3. ${sol}`
  };
}];

/* ---------------- Dérivation ---------------- */
E.derivation = [
() => {
  const a = nz(-4, 4), b = nz(-5, 5), c = nz(-9, 9), d = R(-9, 9);
  return {
    titre: 'Dériver un polynôme',
    enonce: T`Calcule la dérivée de la fonction $f$ définie sur $\mathbb{R}$ par $f(x) = ${poly([[a, 'x^3'], [b, 'x^2'], [c, 'x'], [d, '']])}$.`,
    indice: T`On dérive terme par terme. La dérivée de $x^3$ est $3x^2$, celle de $x^2$ est $2x$, celle de $x$ est $1$, et celle d'une constante est $0$.`,
    correction: T`On dérive chaque terme :
- $${poly([[a, 'x^3']])}$ donne $${a} \times 3x^2 = ${poly([[3 * a, 'x^2']])}$ ;
- $${poly([[b, 'x^2']])}$ donne $${b} \times 2x = ${poly([[2 * b, 'x']])}$ ;
- $${poly([[c, 'x']])}$ donne $${c}$ ;
- la constante $${d}$ donne $0$.
$$f'(x) = ${poly([[3 * a, 'x^2'], [2 * b, 'x'], [c, '']])}$$`
  };
},
() => {
  const a = nz(-3, 3), b = R(-5, 5), c = R(-5, 5), x0 = nz(-3, 3), f0 = a * x0 * x0 + b * x0 + c, m = 2 * a * x0 + b, p = f0 - m * x0;
  return {
    titre: 'Équation de tangente',
    enonce: T`Soit $f(x) = ${tri(a, b, c)}$. Détermine l'équation de la tangente à la courbe de $f$ au point d'abscisse $${x0}$.`,
    indice: T`Formule : $y = f'(a)(x - a) + f(a)$, avec ici $a = ${x0}$. Il faut donc calculer $f(${x0})$ et $f'(${x0})$.`,
    correction: T`1. Dérivée : $f'(x) = ${lin(2 * a, b)}$.
2. Pente de la tangente : $f'(${x0}) = ${2 * a} \times ${par(x0)} ${b < 0 ? '-' : '+'} ${Math.abs(b)} = ${m}$.
3. Ordonnée du point : $f(${x0}) = ${a} \times ${par(x0)}^2 ${b < 0 ? '-' : '+'} ${Math.abs(b)} \times ${par(x0)} ${c < 0 ? '-' : '+'} ${Math.abs(c)} = ${f0}$.
4. Formule : $y = f'(${x0})(x - ${par(x0)}) + f(${x0}) = ${m}(x ${x0 < 0 ? '+' : '-'} ${Math.abs(x0)}) ${f0 < 0 ? '-' : '+'} ${Math.abs(f0)}$.
5. On développe :
$$y = ${lin(m, p)}$$`
  };
},
() => {
  let a, b, c, d; do { a = nz(-4, 4); b = nz(-5, 5); c = R(1, 3); d = nz(-5, 5); } while (a * d - b * c === 0);
  const k = a * d - b * c;
  return {
    titre: 'Dériver un quotient',
    enonce: T`Soit $f(x) = \dfrac{${lin(a, b)}}{${lin(c, d)}}$, définie pour $x \neq ${fr(-d, c)}$.
1. Calcule $f'(x)$.
2. Quel est le signe de $f'(x)$ ? Qu'en déduis-tu pour les variations de $f$ ?`,
    indice: T`Pose $u(x) = ${lin(a, b)}$ et $v(x) = ${lin(c, d)}$, puis utilise $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$.`,
    correction: T`1. On pose $u(x) = ${lin(a, b)}$, donc $u'(x) = ${a}$, et $v(x) = ${lin(c, d)}$, donc $v'(x) = ${c}$.
$$f'(x) = \dfrac{u'v - uv'}{v^2} = \dfrac{${a}(${lin(c, d)}) - ${c}(${lin(a, b)})}{(${lin(c, d)})^2}$$
Au numérateur : $${lin(a * c, a * d)} - (${lin(a * c, b * c)}) = ${k}$. Les termes en $x$ s'annulent.
$$f'(x) = \dfrac{${k}}{(${lin(c, d)})^2}$$
2. Le dénominateur est un carré, donc strictement positif. $f'(x)$ est du signe de $${k}$ : il est toujours ${k > 0 ? 'positif' : 'négatif'}. La fonction $f$ est donc ${k > 0 ? 'croissante' : 'décroissante'} sur chacun des intervalles $\left]-\infty\,; ${fr(-d, c)}\right[$ et $\left]${fr(-d, c)}\,; +\infty\right[$.`
  };
}];

/* ---------------- Variations ---------------- */
E.variations = [
() => {
  const a = pick([-3, -2, -1, 1, 2, 3]), k = R(-4, 4), c = R(-6, 6), b = -2 * a * k, ext = a * k * k + b * k + c;
  return {
    titre: 'Variations d\'un trinôme',
    enonce: T`Soit $f(x) = ${tri(a, b, c)}$, définie sur $\mathbb{R}$.
1. Calcule $f'(x)$.
2. Étudie le signe de $f'(x)$.
3. Donne les variations de $f$ et son extremum.`,
    indice: T`$f'(x)$ est une expression du premier degré : cherche la valeur où elle s'annule, puis son signe avant et après.`,
    correction: T`1. $f'(x) = ${lin(2 * a, b)}$.
2. $f'(x) = 0$ quand $${poly([[2 * a, 'x']])} = ${-b}$, c'est-à-dire $x = ${k}$. Le coefficient de $x$ est $${2 * a}$, qui est ${a > 0 ? 'positif' : 'négatif'} : $f'(x)$ est donc ${a > 0 ? 'négatif' : 'positif'} pour $x < ${k}$ et ${a > 0 ? 'positif' : 'négatif'} pour $x > ${k}$.
3. $f$ est ${a > 0 ? 'décroissante' : 'croissante'} sur $]-\infty\,; ${k}]$ puis ${a > 0 ? 'croissante' : 'décroissante'} sur $[${k}\,; +\infty[$. Elle admet un ${a > 0 ? 'minimum' : 'maximum'} en $x = ${k}$, qui vaut $f(${k}) = ${ext}$.`
  };
},
() => {
  const k = R(1, 3), c = R(-5, 5), M = 2 * k ** 3 + c, m = -2 * k ** 3 + c;
  return {
    titre: 'Étude d\'une fonction du troisième degré',
    enonce: T`Soit $f(x) = ${poly([[1, 'x^3'], [-3 * k * k, 'x'], [c, '']])}$, définie sur $\mathbb{R}$.
1. Calcule $f'(x)$ et factorise-la.
2. Étudie le signe de $f'(x)$.
3. Dresse le tableau de variations de $f$ (en précisant les valeurs aux extremums).`,
    indice: T`$f'(x) = 3x^2 - ${3 * k * k} = 3(x^2 - ${k * k})$, et $x^2 - ${k * k}$ est une identité remarquable.`,
    correction: T`1. $f'(x) = 3x^2 - ${3 * k * k} = 3(x^2 - ${k * k}) = 3(x - ${k})(x + ${k})$.
2. $f'(x)$ est un trinôme de racines $${-k}$ et $${k}$, avec un coefficient de $x^2$ positif. Il est donc positif à l'extérieur des racines et négatif entre les racines.
3. Variations :
- $f$ est croissante sur $]-\infty\,; ${-k}]$ ;
- $f$ est décroissante sur $[${-k}\,; ${k}]$ ;
- $f$ est croissante sur $[${k}\,; +\infty[$.
Valeurs : $f(${-k}) = ${par(-k)}^3 - ${3 * k * k} \times ${par(-k)} ${c < 0 ? '-' : '+'} ${Math.abs(c)} = ${M}$ (maximum local) et $f(${k}) = ${k}^3 - ${3 * k * k} \times ${k} ${c < 0 ? '-' : '+'} ${Math.abs(c)} = ${m}$ (minimum local).`
  };
},
() => {
  const L = 4 * R(5, 15), x0 = L / 4, A = L * L / 8;
  return {
    titre: 'Problème d\'optimisation',
    enonce: T`On veut construire un enclos rectangulaire contre un mur, avec $${L}$ m de grillage. Le mur sert de quatrième côté, donc le grillage ne fait que trois côtés. On note $x$ la longueur, en mètres, de chacun des deux côtés perpendiculaires au mur.
1. Exprime la longueur du côté parallèle au mur en fonction de $x$.
2. Montre que l'aire de l'enclos est $A(x) = ${poly([[-2, 'x^2'], [L, 'x']])}$.
3. Pour quelle valeur de $x$ l'aire est-elle maximale ? Que vaut alors cette aire ?`,
    indice: T`Les trois côtés grillagés mesurent $x$, $x$ et le côté parallèle au mur : leur somme vaut $${L}$. Ensuite, étudie le signe de $A'(x)$.`,
    correction: T`1. Les trois côtés mesurent $x + x + \text{(côté parallèle)} = ${L}$, donc le côté parallèle au mur mesure $${L} - 2x$. Il faut $0 < x < ${L / 2}$.
2. Aire = largeur $\times$ longueur : $A(x) = x(${L} - 2x) = ${poly([[-2, 'x^2'], [L, 'x']])}$.
3. $A'(x) = ${lin(-4, L)}$. $A'(x) = 0$ quand $x = ${x0}$. Comme le coefficient de $x$ est négatif, $A'(x)$ est positif avant $${x0}$ et négatif après : $A$ est croissante puis décroissante.
L'aire est maximale pour $x = ${x0}$ m. Le côté parallèle au mur mesure alors $${L} - 2 \times ${x0} = ${L - 2 * x0}$ m, et l'aire vaut $${x0} \times ${L - 2 * x0} = ${A}$ m².`
  };
}];

/* ---------------- Exponentielle ---------------- */
E.exponentielle = [
() => {
  const a = R(2, 7), b = pick([-5, -4, -3, -2, 2, 3, 4, 5]), c = R(2, 6), k = R(2, 4), d = R(2, 9);
  return {
    titre: 'Simplifier des expressions',
    enonce: T`Écris chaque expression sous la forme $e^n$, avec $n$ entier.
1. $A = \dfrac{e^{${a}} \times e^{${b}}}{e^{${c}}}$
2. $B = \left(e^{${a}}\right)^{${k}} \times e^{-${d}}$`,
    indice: T`Ce sont les règles des puissances : on additionne les exposants pour un produit, on les soustrait pour un quotient, on les multiplie pour une puissance de puissance.`,
    correction: T`1. Au numérateur, $e^{${a}} \times e^{${b}} = e^{${a} + ${par(b)}} = ${expo(a + b)}$. Puis on divise : $A = e^{${a + b} - ${c}} = ${expo(a + b - c)}$.
2. $\left(e^{${a}}\right)^{${k}} = e^{${a} \times ${k}} = e^{${a * k}}$. Puis $B = e^{${a * k}} \times e^{-${d}} = e^{${a * k} - ${d}} = ${expo(a * k - d)}$.`
  };
},
() => {
  const a = R(1, 4), b = nz(-6, 6), s = a + b;
  return {
    titre: 'Dériver un produit avec exponentielle',
    enonce: T`Soit $f(x) = (${lin(a, b)})\,e^x$, définie sur $\mathbb{R}$.
1. Calcule $f'(x)$ et factorise par $e^x$.
2. Étudie le signe de $f'(x)$.
3. Donne les variations de $f$.`,
    indice: T`C'est un produit $u \times v$ avec $u(x) = ${lin(a, b)}$ et $v(x) = e^x$. Souviens-toi que $e^x$ est toujours strictement positif.`,
    correction: T`1. $u(x) = ${lin(a, b)}$, $u'(x) = ${a}$ ; $v(x) = e^x$, $v'(x) = e^x$.
$$f'(x) = u'v + uv' = ${a}e^x + (${lin(a, b)})e^x = (${lin(a, s)})\,e^x$$
2. Pour tout $x$, $e^x > 0$. Donc $f'(x)$ est du signe de $${lin(a, s)}$, qui s'annule en $x = ${fr(-s, a)}$ et qui est négatif avant, positif après (le coefficient de $x$ est positif).
3. $f$ est décroissante sur $\left]-\infty\,; ${fr(-s, a)}\right]$ et croissante sur $\left[${fr(-s, a)}\,; +\infty\right[$. Elle admet un minimum en $x = ${fr(-s, a)}$.`
  };
},
() => {
  const a = R(2, 5), b = nz(-6, 6), c = R(-3, 1), d = nz(-6, 6), n = d - b, m = a - c;
  return {
    titre: 'Équation et inéquation',
    enonce: T`1. Résous l'équation $e^{${lin(a, b)}} = e^{${lin(c, d)}}$.
2. Résous l'inéquation $e^{${lin(a, b)}} > e^{${lin(c, d)}}$.`,
    indice: T`La fonction exponentielle est strictement croissante : $e^a = e^b$ revient à $a = b$, et $e^a > e^b$ revient à $a > b$.`,
    correction: T`1. $e^a = e^b$ équivaut à $a = b$. On résout donc $${lin(a, b)} = ${lin(c, d)}$.
On regroupe : $${poly([[m, 'x']])} = ${n}$, donc $x = ${fr(n, m)}$.
2. L'exponentielle est strictement croissante, donc $e^a > e^b$ équivaut à $a > b$ : $${lin(a, b)} > ${lin(c, d)}$.
On regroupe : $${poly([[m, 'x']])} > ${n}$. On divise par $${m}$, qui est positif, donc le sens ne change pas : $x > ${fr(n, m)}$.
$$S = \left]${fr(n, m)}\,; +\infty\right[$$`
  };
}];

/* ---------------- Trigonométrie ---------------- */
const DEG = [[30, 1, 6], [45, 1, 4], [60, 1, 3], [90, 1, 2], [120, 2, 3], [135, 3, 4], [150, 5, 6], [180, 1, 1], [210, 7, 6], [270, 3, 2], [300, 5, 3]];
E.trigonometrie = [
() => {
  const t = DEG.slice().sort(() => Math.random() - 0.5), [d1, d2, d3] = t;
  return {
    titre: 'Degrés et radians',
    enonce: T`1. Convertis en radians : $${d1[0]}^\circ$ et $${d2[0]}^\circ$.
2. Convertis en degrés : $${ang(d3[1], d3[2])}$ rad.`,
    indice: T`$180^\circ = \pi$ rad. Pour passer des degrés aux radians, on multiplie par $\dfrac{\pi}{180}$ ; dans l'autre sens, par $\dfrac{180}{\pi}$.`,
    correction: T`1. $${d1[0]}^\circ = ${d1[0]} \times \dfrac{\pi}{180} = ${ang(d1[1], d1[2])}$ rad, en simplifiant la fraction $\dfrac{${d1[0]}}{180}$.
De même, $${d2[0]}^\circ = ${d2[0]} \times \dfrac{\pi}{180} = ${ang(d2[1], d2[2])}$ rad.
2. On remplace $\pi$ par $180^\circ$ : $${ang(d3[1], d3[2])} = \dfrac{${d3[1]} \times 180}{${d3[2]}} = ${d3[0]}^\circ$.`
  };
},
() => {
  const pool = ANGLES.filter((a) => a.cosNeg || a.sinNeg).sort(() => Math.random() - 0.5), [a1, a2] = pool;
  const ligne = (a) => T`$${ang(a.p, a.q)}$ : l'angle de référence est $${ang(1, a.q)}$, pour lequel $\cos = ${TRIGO[a.q][0]}$ et $\sin = ${TRIGO[a.q][1]}$. ${quadrant(a)} Donc $\cos\left(${ang(a.p, a.q)}\right) = ${a.cos}$ et $\sin\left(${ang(a.p, a.q)}\right) = ${a.sin}$.`;
  return {
    titre: 'Valeurs remarquables',
    enonce: T`À l'aide du cercle trigonométrique, donne les valeurs exactes du cosinus et du sinus de :
1. $${ang(a1.p, a1.q)}$
2. $${ang(a2.p, a2.q)}$`,
    indice: T`Place le point sur le cercle, repère dans quel quart il se trouve (pour les signes), puis utilise les valeurs de $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$ ou $\dfrac{\pi}{3}$.`,
    correction: T`1. ${ligne(a1)}
2. ${ligne(a2)}`
  };
},
() => {
  const a = pick(ANGLES), m = nz(-3, 3), P = a.p + 2 * m * a.q;
  return {
    titre: 'Retrouver le point image',
    enonce: T`On considère le réel $x = ${ang(P, a.q)}$.
1. Trouve le réel de l'intervalle $]-\pi\,; \pi]$ qui a le même point image que $x$ sur le cercle trigonométrique.
2. Déduis-en $\cos x$ et $\sin x$.`,
    indice: T`Ajouter ou retirer $2\pi$ (un tour complet) ne change pas le point image. Écris $2\pi = \dfrac{${2 * a.q}\pi}{${a.q}}$.`,
    correction: T`1. Un tour vaut $2\pi = \dfrac{${2 * a.q}\pi}{${a.q}}$. On ${m > 0 ? 'retire' : 'ajoute'} $${Math.abs(m)}$ tour${Math.abs(m) > 1 ? 's' : ''} :
$$${ang(P, a.q)} ${m > 0 ? '-' : '+'} ${Math.abs(m)} \times 2\pi = \dfrac{${P}\pi ${m > 0 ? '-' : '+'} ${Math.abs(2 * m * a.q)}\pi}{${a.q}} = ${ang(a.p, a.q)}$$
Ce réel est bien dans $]-\pi\,; \pi]$ : $x$ a le même point image que $${ang(a.p, a.q)}$.
2. L'angle de référence est $${ang(1, a.q)}$. ${quadrant(a)}
$$\cos x = ${a.cos} \qquad \sin x = ${a.sin}$$`
  };
}];

/* ---------------- Produit scalaire ---------------- */
E['produit-scalaire'] = [
() => {
  const a = nz(-6, 6), b = nz(-6, 6); let c, d;
  if (Math.random() < 0.4) { const k = pick([-2, -1, 1, 2]); c = -b * k; d = a * k; } else { c = nz(-6, 6); d = nz(-6, 6); }
  const ps = a * c + b * d;
  return {
    titre: 'Produit scalaire avec des coordonnées',
    enonce: T`Dans un repère orthonormé, on donne $\vec{u}(${a}\,; ${b})$ et $\vec{v}(${c}\,; ${d})$.
1. Calcule $\vec{u} \cdot \vec{v}$.
2. Les vecteurs $\vec{u}$ et $\vec{v}$ sont-ils orthogonaux ?`,
    indice: T`Formule : $\vec{u} \cdot \vec{v} = xx' + yy'$. Deux vecteurs sont orthogonaux quand leur produit scalaire vaut 0.`,
    correction: T`1. $\vec{u} \cdot \vec{v} = ${a} \times ${par(c)} + ${par(b)} \times ${par(d)} = ${a * c} + ${par(b * d)} = ${ps}$.
2. Le produit scalaire ${ps === 0 ? 'est nul, donc les vecteurs sont orthogonaux' : "n'est pas nul, donc les vecteurs ne sont pas orthogonaux"}.`
  };
},
() => {
  const AB = R(2, 8), AC = R(2, 8), aigu = pick([true, false]), deg = aigu ? 60 : 120, ps2 = (aigu ? 1 : -1) * AB * AC, BC2 = AB * AB + AC * AC - ps2;
  return {
    titre: 'Angle et formule d\'Al-Kashi',
    enonce: T`Dans un triangle $ABC$, on a $AB = ${AB}$, $AC = ${AC}$ et $\widehat{BAC} = ${deg}^\circ$.
1. Calcule $\overrightarrow{AB} \cdot \overrightarrow{AC}$.
2. Calcule la longueur $BC$ (valeur exacte, puis arrondie au dixième).`,
    indice: T`$\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AC \times \cos\widehat{BAC}$, et $\cos ${deg}^\circ = ${aigu ? '' : '-'}\dfrac{1}{2}$. Ensuite, utilise Al-Kashi.`,
    correction: T`1. $\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AC \times \cos ${deg}^\circ = ${AB} \times ${AC} \times ${aigu ? '' : T`\left(-`}\dfrac{1}{2}${aigu ? '' : T`\right)`} = ${fr(ps2, 2)}$.
2. Formule d'Al-Kashi : $BC^2 = AB^2 + AC^2 - 2 \times AB \times AC \times \cos\widehat{A}$.
Or $AB \times AC \times \cos\widehat{A}$ est justement le produit scalaire de la question 1.
$$BC^2 = ${AB}^2 + ${AC}^2 - 2 \times ${ps2 < 0 ? T`\left(${fr(ps2, 2)}\right)` : fr(ps2, 2)} = ${AB * AB} + ${AC * AC} ${ps2 < 0 ? '+' : '-'} ${Math.abs(ps2)} = ${BC2}$$
Donc $BC = ${racine(BC2)}${Number.isInteger(Math.sqrt(BC2)) ? '' : T` \approx ${dec(Math.sqrt(BC2), 1)}`}$.`
  };
},
() => {
  let A, B, C, u, v;
  do {
    A = [R(-4, 4), R(-4, 4)]; B = [R(-5, 5), R(-5, 5)]; C = [R(-5, 5), R(-5, 5)];
    u = [B[0] - A[0], B[1] - A[1]]; v = [C[0] - A[0], C[1] - A[1]];
  } while (u[0] * v[1] - u[1] * v[0] === 0);
  const ps = u[0] * v[0] + u[1] * v[1], n1 = u[0] ** 2 + u[1] ** 2, n2 = v[0] ** 2 + v[1] ** 2, cos = ps / Math.sqrt(n1 * n2);
  return {
    titre: 'Angle dans un repère',
    enonce: T`Dans un repère orthonormé, on donne $A(${A[0]}\,; ${A[1]})$, $B(${B[0]}\,; ${B[1]})$ et $C(${C[0]}\,; ${C[1]})$.
1. Calcule les coordonnées de $\overrightarrow{AB}$ et $\overrightarrow{AC}$, puis $\overrightarrow{AB} \cdot \overrightarrow{AC}$.
2. Calcule les longueurs $AB$ et $AC$.
3. Déduis-en une mesure de l'angle $\widehat{BAC}$, arrondie au degré.`,
    indice: T`On a deux formules pour le même produit scalaire : $xx' + yy'$ et $AB \times AC \times \cos\widehat{BAC}$. On en tire $\cos\widehat{BAC}$.`,
    correction: T`1. $\overrightarrow{AB}(${B[0]} - ${par(A[0])}\,; ${B[1]} - ${par(A[1])})$, soit $\overrightarrow{AB}(${u[0]}\,; ${u[1]})$. De même $\overrightarrow{AC}(${v[0]}\,; ${v[1]})$.
$\overrightarrow{AB} \cdot \overrightarrow{AC} = ${u[0]} \times ${par(v[0])} + ${par(u[1])} \times ${par(v[1])} = ${ps}$.
2. $AB = \sqrt{${par(u[0])}^2 + ${par(u[1])}^2} = ${racine(n1)}$ et $AC = \sqrt{${par(v[0])}^2 + ${par(v[1])}^2} = ${racine(n2)}$.
3. $\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AC \times \cos\widehat{BAC}$, donc
$$\cos\widehat{BAC} = \dfrac{${ps}}{${racine(n1)} \times ${racine(n2)}} \approx ${dec(cos, 3)}$$
${ps === 0 ? T`Le produit scalaire est nul : l'angle $\widehat{BAC}$ est droit, il mesure $90^\circ$.` : T`Avec la calculatrice (en mode degrés), $\widehat{BAC} \approx ${dec(Math.acos(cos) * 180 / Math.PI, 0)}^\circ$.`}`
  };
}];

/* ---------------- Géométrie repérée ---------------- */
E['geometrie-reperee'] = [
() => {
  const xa = R(-5, 5), ya = R(-5, 5), a = nz(-5, 5), b = nz(-5, 5), c = -(a * xa + b * ya);
  return {
    titre: 'Droite et vecteur normal',
    enonce: T`Dans un repère orthonormé, détermine une équation cartésienne de la droite $d$ qui passe par $A(${xa}\,; ${ya})$ et qui admet $\vec{n}(${a}\,; ${b})$ comme vecteur normal.`,
    indice: T`Une droite de vecteur normal $\vec{n}(a\,; b)$ a une équation de la forme $ax + by + c = 0$. Il reste à trouver $c$ avec le point $A$.`,
    correction: T`1. Comme $\vec{n}(${a}\,; ${b})$ est normal à $d$, la droite a une équation de la forme $${poly([[a, 'x'], [b, 'y']])} + c = 0$.
2. Le point $A(${xa}\,; ${ya})$ est sur $d$, donc ses coordonnées vérifient l'équation : $${a} \times ${par(xa)} + ${par(b)} \times ${par(ya)} + c = 0$, soit $${a * xa + b * ya} + c = 0$, donc $c = ${c}$.
3. Une équation de $d$ est :
$$${poly([[a, 'x'], [b, 'y'], [c, '']])} = 0$$`
  };
},
() => {
  const a = R(-4, 4), b = R(-4, 4), o = pick([[3, 4], [4, 3], [-3, 4], [4, -3], [-4, -3], [5, 0], [0, -5]]), sur = pick([true, false]);
  const px = a + o[0] + (sur ? 0 : 1), py = b + o[1], d2 = (px - a) ** 2 + (py - b) ** 2;
  return {
    titre: 'Équation d\'un cercle',
    enonce: T`Dans un repère orthonormé, $\mathcal{C}$ est le cercle de centre $\Omega(${a}\,; ${b})$ et de rayon $5$.
1. Écris une équation du cercle $\mathcal{C}$.
2. Le point $P(${px}\,; ${py})$ appartient-il à ce cercle ?`,
    indice: T`Équation d'un cercle : $(x - a)^2 + (y - b)^2 = r^2$. Pour la question 2, remplace $x$ et $y$ par les coordonnées de $P$.`,
    correction: T`1. Avec le centre $(${a}\,; ${b})$ et le rayon $5$ :
$$${carre('x', a)} + ${carre('y', b)} = 25$$
2. On remplace par les coordonnées de $P$ : $(${px} - ${par(a)})^2 + (${py} - ${par(b)})^2 = ${par(px - a)}^2 + ${par(py - b)}^2 = ${(px - a) ** 2} + ${(py - b) ** 2} = ${d2}$.
${d2 === 25 ? T`On trouve bien $25$ : le point $P$ appartient au cercle.` : T`On trouve $${d2}$, qui est différent de $25$ : le point $P$ n'appartient pas au cercle.`}`
  };
},
() => {
  const a = nz(-5, 5), b = nz(-5, 5), r = R(2, 6), c = a * a + b * b - r * r;
  return {
    titre: 'Reconnaître un cercle',
    enonce: T`Dans un repère orthonormé, on considère l'ensemble des points $M(x\,; y)$ tels que :
$$${poly([[1, 'x^2'], [1, 'y^2'], [-2 * a, 'x'], [-2 * b, 'y'], [c, '']])} = 0$$
Montre que c'est un cercle, et donne son centre et son rayon.`,
    indice: T`Complète les carrés : $x^2 ${a > 0 ? '-' : '+'} ${Math.abs(2 * a)}x = ${carre('x', a)} - ${a * a}$, et fais de même avec $y$.`,
    correction: T`1. On complète le carré en $x$ : $${poly([[1, 'x^2'], [-2 * a, 'x']])} = ${carre('x', a)} - ${a * a}$.
2. On complète le carré en $y$ : $${poly([[1, 'y^2'], [-2 * b, 'y']])} = ${carre('y', b)} - ${b * b}$.
3. L'équation devient $${carre('x', a)} - ${a * a} + ${carre('y', b)} - ${b * b} ${c < 0 ? '-' : '+'} ${Math.abs(c)} = 0$, c'est-à-dire :
$$${carre('x', a)} + ${carre('y', b)} = ${r * r}$$
4. On reconnaît l'équation du cercle de centre $\Omega(${a}\,; ${b})$ et de rayon $\sqrt{${r * r}} = ${r}$.`
  };
}];

/* ---------------- Probabilités conditionnelles ---------------- */
E['probas-conditionnelles'] = [
() => {
  const a = R(20, 60), b = R(20, 60), c = R(20, 60), d = R(20, 60), N = a + b + c + d;
  return {
    titre: 'Tableau croisé',
    enonce: T`Dans un club de sport, on a compté :
- $${a}$ filles qui pratiquent la natation et $${b}$ filles qui ne la pratiquent pas ;
- $${c}$ garçons qui pratiquent la natation et $${d}$ garçons qui ne la pratiquent pas.
On choisit un membre au hasard. On note $F$ : « c'est une fille » et $N$ : « il ou elle pratique la natation ».
1. Calcule $P(F)$ et $P(F \cap N)$.
2. Calcule $P_F(N)$.
3. Calcule $P_N(F)$.`,
    indice: T`Commence par calculer l'effectif total, le nombre de filles et le nombre de nageurs. Pour $P_F(N)$, on ne regarde que les filles.`,
    correction: T`Effectif total : $${a} + ${b} + ${c} + ${d} = ${N}$. Il y a $${a + b}$ filles et $${a + c}$ personnes qui pratiquent la natation.
1. $P(F) = \dfrac{${a + b}}{${N}}${fr(a + b, N) === T`\dfrac{${a + b}}{${N}}` ? '' : ' = ' + fr(a + b, N)}$ et $P(F \cap N) = \dfrac{${a}}{${N}}${fr(a, N) === T`\dfrac{${a}}{${N}}` ? '' : ' = ' + fr(a, N)}$.
2. On se place parmi les $${a + b}$ filles : $${a}$ pratiquent la natation. Donc $P_F(N) = \dfrac{${a}}{${a + b}}${fr(a, a + b) === T`\dfrac{${a}}{${a + b}}` ? '' : ' = ' + fr(a, a + b)} \approx ${dec(a / (a + b))}$.
3. On se place parmi les $${a + c}$ nageurs : $${a}$ sont des filles. Donc $P_N(F) = \dfrac{${a}}{${a + c}}${fr(a, a + c) === T`\dfrac{${a}}{${a + c}}` ? '' : ' = ' + fr(a, a + c)} \approx ${dec(a / (a + c))}$.
Remarque : $P_F(N)$ et $P_N(F)$ ne sont pas égales, car on ne regarde pas le même groupe.`
  };
},
() => {
  const pA = pick([30, 40, 60, 70]), dA = pick([2, 3, 5]), dB = pick([1, 4, 6, 8]), n1 = pA * dA, n2 = (100 - pA) * dB;
  return {
    titre: 'Arbre et probabilités totales',
    enonce: T`Une usine fabrique des pièces avec deux machines. La machine A produit $${pA}\,\%$ des pièces et la machine B le reste. $${dA}\,\%$ des pièces de la machine A ont un défaut, contre $${dB}\,\%$ pour la machine B. On choisit une pièce au hasard. On note $A$ : « la pièce vient de la machine A » et $D$ : « la pièce a un défaut ».
1. Représente la situation par un arbre pondéré (au brouillon) et donne $P(A)$, $P_A(D)$ et $P_{\overline{A}}(D)$.
2. Calcule $P(D)$.
3. La pièce a un défaut. Quelle est la probabilité qu'elle vienne de la machine A ? Arrondis au millième.`,
    indice: T`Pour $P(D)$, additionne les deux chemins qui mènent à $D$. Pour la question 3, on cherche $P_D(A) = \dfrac{P(A \cap D)}{P(D)}$.`,
    correction: T`1. $P(A) = ${dec(pA / 100)}$, donc $P(\overline{A}) = ${dec(1 - pA / 100)}$. $P_A(D) = ${dec(dA / 100)}$ et $P_{\overline{A}}(D) = ${dec(dB / 100)}$.
2. Formule des probabilités totales :
$$P(D) = P(A) \times P_A(D) + P(\overline{A}) \times P_{\overline{A}}(D) = ${dec(pA / 100)} \times ${dec(dA / 100)} + ${dec(1 - pA / 100)} \times ${dec(dB / 100)}$$
$P(D) = ${dec(n1 / 10000, 4)} + ${dec(n2 / 10000, 4)} = ${dec((n1 + n2) / 10000, 4)}$.
3. $P_D(A) = \dfrac{P(A \cap D)}{P(D)} = \dfrac{${dec(n1 / 10000, 4)}}{${dec((n1 + n2) / 10000, 4)}} \approx ${dec(n1 / (n1 + n2), 3)}$.`
  };
},
() => {
  const p = pick([1, 2, 5]), s = pick([90, 95, 98]), f = pick([2, 5, 10]), n1 = p * s, n2 = (100 - p) * f, res = n1 / (n1 + n2);
  return {
    titre: 'Test de dépistage',
    enonce: T`Une maladie touche $${p}\,\%$ d'une population. Un test de dépistage est positif pour $${s}\,\%$ des personnes malades, mais aussi pour $${f}\,\%$ des personnes non malades (faux positifs). On choisit une personne au hasard. On note $M$ : « la personne est malade » et $T$ : « le test est positif ».
1. Traduis les données avec les notations $P(M)$, $P_M(T)$ et $P_{\overline{M}}(T)$.
2. Calcule $P(T)$.
3. Le test d'une personne est positif. Quelle est la probabilité qu'elle soit vraiment malade ? Arrondis au millième et commente.`,
    indice: T`Fais un arbre : d'abord malade ou non, ensuite test positif ou non. La question 3 demande $P_T(M)$, pas $P_M(T)$.`,
    correction: T`1. $P(M) = ${dec(p / 100)}$, $P_M(T) = ${dec(s / 100)}$ et $P_{\overline{M}}(T) = ${dec(f / 100)}$. On a aussi $P(\overline{M}) = ${dec(1 - p / 100)}$.
2. Par la formule des probabilités totales :
$$P(T) = ${dec(p / 100)} \times ${dec(s / 100)} + ${dec(1 - p / 100)} \times ${dec(f / 100)} = ${dec(n1 / 10000, 4)} + ${dec(n2 / 10000, 4)} = ${dec((n1 + n2) / 10000, 4)}$$
3. $P_T(M) = \dfrac{P(M \cap T)}{P(T)} = \dfrac{${dec(n1 / 10000, 4)}}{${dec((n1 + n2) / 10000, 4)}} \approx ${dec(res, 3)}$.
Une personne dont le test est positif a donc environ $${dec(res * 100, 1)}\,\%$ de chances d'être malade. ${res < 0.5 ? "C'est moins d'une chance sur deux : comme la maladie est rare, les faux positifs sont plus nombreux que les vrais malades." : "Ce n'est pas une certitude, à cause des faux positifs."} Il ne faut pas confondre $P_M(T) = ${dec(s / 100)}$ et $P_T(M) \approx ${dec(res, 3)}$.`
  };
}];

/* ---------------- Variables aléatoires ---------------- */
const tirerLoi = (nb) => {
  const vals = [-2, -1, 0, 1, 2, 3, 4, 5, 10].sort(() => Math.random() - 0.5).slice(0, nb).sort((x, y) => x - y);
  const w = []; let reste = 10;
  for (let i = 0; i < nb - 1; i++) { const m = Math.min(4, reste - (nb - 1 - i)); const k = R(1, m); w.push(k); reste -= k; }
  w.push(reste);
  return { vals, w };
};
const listeLoi = (l) => l.vals.map((x, i) => T`- $P(X = ${x}) = ${dec(l.w[i] / 10)}$`).join('\n');
E['variables-aleatoires'] = [
() => {
  const l = tirerLoi(4), E1 = l.vals.reduce((s, x, i) => s + x * l.w[i], 0) / 10;
  return {
    titre: 'Calculer une espérance',
    enonce: T`La loi de probabilité d'une variable aléatoire $X$ est donnée par :
${listeLoi(l)}
1. Vérifie que c'est bien une loi de probabilité.
2. Calcule l'espérance $E(X)$.`,
    indice: T`La somme des probabilités doit valoir 1. Pour l'espérance, multiplie chaque valeur par sa probabilité, puis additionne.`,
    correction: T`1. $${l.w.map((k) => dec(k / 10)).join(' + ')} = 1$ : la somme des probabilités vaut bien 1.
2. $E(X) = ${l.vals.map((x, i) => dec(l.w[i] / 10) + T` \times ` + par(x)).join(' + ')} = ${dec(E1)}$.
En moyenne, sur un grand nombre de répétitions, $X$ vaut $${dec(E1)}$.`
  };
},
() => {
  const l = tirerLoi(3), E1 = l.vals.reduce((s, x, i) => s + x * l.w[i], 0) / 10, E2 = l.vals.reduce((s, x, i) => s + x * x * l.w[i], 0) / 10, V = E2 - E1 * E1;
  return {
    titre: 'Espérance, variance, écart type',
    enonce: T`La loi de probabilité d'une variable aléatoire $X$ est donnée par :
${listeLoi(l)}
1. Calcule l'espérance $E(X)$.
2. Calcule la variance $V(X)$.
3. Calcule l'écart type $\sigma(X)$, arrondi au centième.`,
    indice: T`Pour la variance, le plus rapide est la formule de König-Huygens : $V(X) = E(X^2) - \big(E(X)\big)^2$.`,
    correction: T`1. $E(X) = ${l.vals.map((x, i) => dec(l.w[i] / 10) + T` \times ` + par(x)).join(' + ')} = ${dec(E1)}$.
2. On calcule d'abord $E(X^2)$ en mettant les valeurs au carré : $E(X^2) = ${l.vals.map((x, i) => dec(l.w[i] / 10) + T` \times ` + par(x) + '^2').join(' + ')} = ${dec(E2)}$.
Formule de König-Huygens : $V(X) = E(X^2) - \big(E(X)\big)^2 = ${dec(E2)} - (${dec(E1)})^2 = ${dec(V, 4)}$.
3. $\sigma(X) = \sqrt{V(X)} = \sqrt{${dec(V, 4)}} \approx ${dec(Math.sqrt(V))}$.`
  };
},
() => {
  const m = R(2, 5), g1 = R(8, 18), g2 = R(3, 6), num = g1 + 2 * g2 - 6 * m;
  return {
    titre: 'Un jeu est-il équitable ?',
    enonce: T`Pour jouer, on mise $${m}$ €, puis on lance un dé équilibré à 6 faces. Si on obtient 6, on reçoit $${g1}$ €. Si on obtient 4 ou 5, on reçoit $${g2}$ €. Sinon, on ne reçoit rien. On note $X$ le gain du joueur, mise déduite.
1. Quelles valeurs peut prendre $X$ ? Donne sa loi de probabilité.
2. Calcule $E(X)$. Le jeu est-il favorable au joueur ?
3. Quelle devrait être la mise pour que le jeu soit équitable ?`,
    indice: T`Le gain est ce qu'on reçoit moins la mise : par exemple, si on obtient 6, $X = ${g1} - ${m}$. Un jeu est équitable quand $E(X) = 0$.`,
    correction: T`1. Les valeurs possibles et leurs probabilités :
- on obtient 6 (une face sur six) : $X = ${g1} - ${m} = ${g1 - m}$, avec $P(X = ${g1 - m}) = \dfrac{1}{6}$ ;
- on obtient 4 ou 5 (deux faces) : $X = ${g2} - ${m} = ${g2 - m}$, avec $P(X = ${g2 - m}) = \dfrac{2}{6} = \dfrac{1}{3}$ ;
- on obtient 1, 2 ou 3 (trois faces) : $X = -${m}$, avec $P(X = -${m}) = \dfrac{3}{6} = \dfrac{1}{2}$.
2. $E(X) = \dfrac{1}{6} \times ${par(g1 - m)} + \dfrac{2}{6} \times ${par(g2 - m)} + \dfrac{3}{6} \times (-${m}) = \dfrac{${g1 - m} + ${par(2 * (g2 - m))} - ${3 * m}}{6} = ${fr(num, 6)}${num % 6 === 0 ? '' : T` \approx ${dec(num / 6)}`}$.
${num > 0 ? "L'espérance est positive : le jeu est favorable au joueur." : num < 0 ? "L'espérance est négative : le jeu est défavorable au joueur, qui perd de l'argent en moyenne." : "L'espérance est nulle : le jeu est équitable."}
3. En moyenne, on reçoit $\dfrac{1}{6} \times ${g1} + \dfrac{2}{6} \times ${g2} = ${fr(g1 + 2 * g2, 6)}$ € par partie. Le jeu est équitable quand la mise est égale à cette somme, soit $${fr(g1 + 2 * g2, 6)}$ €${(g1 + 2 * g2) % 6 === 0 ? '' : T` (environ $${dec((g1 + 2 * g2) / 6)}$ €)`}.`
  };
}];

window.EXERCICES = E;
})();
