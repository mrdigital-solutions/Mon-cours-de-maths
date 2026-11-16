/* Base de cours : programme de spécialité physique-chimie de première générale.
   Chaque chapitre a une fiche de cours ("cours") et une explication en mots simples ("simple").
   Mise en forme : "## " titre, "- " liste, "1. " étapes, **gras**, formules en LaTeX entre $...$. */
(() => {
const T = String.raw;
window.COURS_PC = [
{
id: 'pc-mole-concentration', titre: 'Mole, concentration et Beer-Lambert',
cours: T`
La **mole** (symbole mol) est l'unité qui permet de compter les entités microscopiques (atomes, molécules, ions) par paquets.
## Quantité de matière et grandeurs molaires
- Une mole contient $N_A = 6{,}02 \times 10^{23}\text{ mol}^{-1}$ entités (constante d'Avogadro).
- À partir de la masse $m$ (en g) et de la masse molaire $M$ (en $\text{g}\cdot\text{mol}^{-1}$) :
$$n = \dfrac{m}{M}$$
- Avec la masse volumique $\rho = \dfrac{m}{V}$, pour un liquide ou un solide pur : $m = \rho \times V$, donc $n = \dfrac{\rho \times V}{M}$.
- Pour un gaz, avec le volume molaire $V_m$ (environ $24{,}0\text{ L}\cdot\text{mol}^{-1}$ à $20\,^\circ\text{C}$ et $1\text{ bar}$) :
$$n = \dfrac{V_{\text{gaz}}}{V_m}$$
## Solutions et concentrations
- **Concentration en quantité de matière** (en $\text{mol}\cdot\text{L}^{-1}$) : $C = \dfrac{n}{V_{\text{sol}}}$.
- **Concentration en masse** (en $\text{g}\cdot\text{L}^{-1}$) : $C_m = \dfrac{m_{\text{soluté}}}{V_{\text{sol}}} = C \times M$.
- **Dilution** : la quantité de matière de soluté se conserve entre la solution mère et la solution fille :
$$C_{\text{mère}} \times V_{\text{mère}} = C_{\text{fille}} \times V_{\text{fille}}$$
Le facteur de dilution vaut $F = \dfrac{C_{\text{mère}}}{C_{\text{fille}}} = \dfrac{V_{\text{fille}}}{V_{\text{mère}}} > 1$.
## Spectrophotométrie et loi de Beer-Lambert
- Une espèce colorée absorbe les radiations complémentaires de la couleur qu'elle laisse apparaître.
- **Loi de Beer-Lambert** (valable pour une solution diluée, en lumière monochromatique, à la longueur d'onde d'absorption maximale $\lambda_{\max}$) : l'absorbance $A$ (sans unité) est proportionnelle à la concentration $C$ :
$$A = \varepsilon \times \ell \times C = k \times C$$
- **Dosage par étalonnage** : on trace la droite d'étalonnage $A = f(C)$ avec des solutions de concentrations connues, puis on reporte l'absorbance mesurée de la solution inconnue pour lire sa concentration.
## L'essentiel à retenir
- Toujours convertir les masses en $\text{g}$ et les volumes de solution en $\text{L}$.
- En dilution, le volume prélevé est $V_{\text{mère}} = \dfrac{V_{\text{fille}}}{F}$.
- Absorbance $A$ proportionnelle à $C$ : $A = k \times C$ donne une droite passant par l'origine.
`,
simple: T`
## L'idée en une phrase
Comme les molécules sont minuscules, on les compte par paquets géants appelés **moles**, et quand la solution est colorée on peut même compter ces paquets avec de la lumière.
## Ce qu'il faut comprendre
- Imagine que tu achètes des vis au poids : une vis pèse presque rien, mais un paquet de 1000 vis a une masse facile à peser. La **mole**, c'est exactement ce paquet géant, et $M$ est la masse d'un seul paquet. Donc $n = \dfrac{m}{M}$ te dit combien de paquets tu as.
- La **concentration** $C = \dfrac{n}{V}$, c'est le nombre de paquets par litre d'eau (comme la quantité de sirop dans un verre).
- Quand tu **dilues**, tu ajoutes juste de l'eau : tu ne rajoutes ni n'enlèves de sirop. Donc le nombre de moles de sirop reste exactement le même avant et après : $C_1 V_1 = C_2 V_2$.
- Avec la **loi de Beer-Lambert** ($A = k \times C$), plus il y a de colorant, plus la lumière est bloquée. Si tu doubles la concentration, l'absorbance double aussi.
## Un exemple détaillé
On veut préparer $V_2 = 100\text{ mL}$ d'une solution de concentration $C_2 = 0{,}050\text{ mol}\cdot\text{L}^{-1}$ à partir d'une solution mère à $C_1 = 0{,}25\text{ mol}\cdot\text{L}^{-1}$.
1. On écrit la conservation de la quantité de matière : $C_1 \times V_1 = C_2 \times V_2$.
2. On isole $V_1$ : $V_1 = \dfrac{C_2 \times V_2}{C_1} = \dfrac{0{,}050 \times 100}{0{,}25} = 20\text{ mL}$.
3. On prélève $20\text{ mL}$ avec une pipette jaugée et on complète jusqu'à $100\text{ mL}$ dans une fiole jaugée.
## Les pièges à éviter
- Laisser $m$ en kilogrammes ou $V$ en millilitres dans $C = \dfrac{n}{V}$ : $1\text{ mL} = 10^{-3}\text{ L}$.
- Confondre $C$ (en $\text{mol}\cdot\text{L}^{-1}$) et $C_m$ (en $\text{g}\cdot\text{L}^{-1}$).
- Oublier que le facteur de dilution $F$ est toujours supérieur à $1$.
## À retenir
- $n = \dfrac{m}{M} = C \times V = \dfrac{V_g}{V_m}$.
- Dilution : $C_{\text{mère}} V_{\text{mère}} = C_{\text{fille}} V_{\text{fille}}$.
- Beer-Lambert : $A = k \times C$.
`
},
{
id: 'pc-avancement-titrage', titre: 'Tableau d\'avancement et titrage',
cours: T`
Pour suivre l'évolution des quantités de matière lors d'une transformation chimique, on utilise l'**avancement** $x$ (en mol).
## Tableau d'avancement
Pour une équation ajustée $a\,A + b\,B \longrightarrow c\,C + d\,D$ :
- **État initial** ($x = 0$) : $n_i(A)$, $n_i(B)$, $n_i(C) = 0$, $n_i(D) = 0$.
- **En cours de transformation** ($x$) : $n(A) = n_i(A) - a\,x$, $n(B) = n_i(B) - b\,x$, $n(C) = c\,x$, $n(D) = d\,x$.
- **État final** ($x = x_{\max}$ pour une transformation totale) : l'avancement maximal $x_{\max}$ est le plus petit avancement qui annule la quantité d'un des réactifs.
- Le réactif entièrement consommé en premier est le **réactif limitant**.
- **Mélange stœchiométrique** : tous les réactifs sont consommés ensemble à la fin, ce qui correspond à :
$$\dfrac{n_i(A)}{a} = \dfrac{n_i(B)}{b}$$
## Suivi par titrage avec repérage colorimétrique
- Un **titrage** permet de déterminer la concentration inconnue $C_A$ d'une espèce titrée $A$ (volume $V_A$) grâce à une espèce titrante $B$ de concentration connue $C_B$.
- La réaction support de titrage doit être **rapide** et **totale** (et unique).
- L'**équivalence** est atteinte lorsque le réactif titré et le réactif titrant ont été introduits dans les proportions stœchiométriques (changement de couleur persistant pour un titrage colorimétrique).
- À l'équivalence (volume versé $V_E$) :
$$\dfrac{n_A}{a} = \dfrac{n_{B,\text{versé}}}{b} \iff \dfrac{C_A \times V_A}{a} = \dfrac{C_B \times V_E}{b}$$
## L'essentiel à retenir
- Diviser toujours la quantité initiale par le coefficient stœchiométrique pour trouver le réactif limitant.
- Avant l'équivalence, le réactif limitant est le réactif titrant (versé à la burette). Après l'équivalence, c'est le réactif titré (dans le bécher).
- À l'équivalence exactement, les deux réactifs sont limitants.
`,
simple: T`
## L'idée en une phrase
L'avancement $x$ compte le nombre de fois que la réaction a tourné, et le titrage s'arrête pile au moment où les deux réactifs se sont finis ensemble.
## Ce qu'il faut comprendre
- Imagine une recette : pour faire 1 gâteau, il faut $2$ œufs et $100\text{ g}$ de farine. Si tu as $6$ œufs (de quoi faire $3$ recettes) et $500\text{ g}$ de farine (de quoi faire $5$ recettes), tu ne pourras faire que **$3$ gâteaux** : ce sont les œufs qui bloquent. En chimie, $x_{\max} = 3$, et les œufs sont le **réactif limitant**.
- Le tableau d'avancement écrit juste combien il reste de chaque ingrédient après $x$ tours de recette : $n_i - \text{coef} \times x$.
- Un **titrage**, c'est verser goutte à goutte le réactif connu depuis une burette jusqu'à l'**équivalence** : c'est l'instant exact où la dernière goutte consomme la dernière molécule cachée dans le bécher (changement de couleur).
## Un exemple détaillé
Pour la réaction $2\,\text{H}_2 + \text{O}_2 \longrightarrow 2\,\text{H}_2\text{O}$, on part de $n_i(\text{H}_2) = 5{,}0\text{ mol}$ et $n_i(\text{O}_2) = 3{,}0\text{ mol}$.
1. Si $\text{H}_2$ disparaît : $5{,}0 - 2x = 0 \implies x = 2{,}5\text{ mol}$.
2. Si $\text{O}_2$ disparaît : $3{,}0 - 1x = 0 \implies x = 3{,}0\text{ mol}$.
3. On prend le plus petit : $x_{\max} = 2{,}5\text{ mol}$, et le réactif limitant est $\text{H}_2$.
4. À la fin : $n_f(\text{O}_2) = 3{,}0 - 2{,}5 = 0{,}5\text{ mol}$ et $n_f(\text{H}_2\text{O}) = 2 \times 2{,}5 = 5{,}0\text{ mol}$.
## Les pièges à éviter
- Choisir la plus petite quantité initiale $n_i$ sans la diviser par son coefficient stœchiométrique !
- Oublier de diviser par $a$ et $b$ dans la relation d'équivalence $\dfrac{C_A V_A}{a} = \dfrac{C_B V_E}{b}$ quand les coefficients ne valent pas $1$.
- Oublier que dans l'état final d'un titrage à l'équivalence, le volume total est $V_A + V_E$.
## À retenir
- Réactif limitant = plus petit rapport $\dfrac{n_i}{\text{coefficient}}$.
- À l'équivalence : $\dfrac{C_A V_A}{a} = \dfrac{C_B V_E}{b}$.
`
},
{
id: 'pc-oxydoreduction', titre: 'Oxydoréduction',
cours: T`
Une réaction d'**oxydoréduction** est un transfert d'électrons entre un réducteur et un oxydant.
## Oxydant, réducteur et couple
- Un **oxydant** ($\text{Ox}$) est une espèce chimique capable de **gagner** un ou plusieurs électrons.
- Un **réducteur** ($\text{Réd}$) est une espèce chimique capable de **céder** un ou plusieurs électrons.
- Dans un couple $\text{Ox}/\text{Réd}$, l'oxydant s'écrit toujours en premier, et ils sont reliés par la demi-équation électronique :
$$\text{Ox} + n\,\text{e}^- \rightleftharpoons \text{Réd}$$
## Équilibrer une demi-équation en milieu acide
1. Ajuster tous les atomes autres que $\text{H}$ et $\text{O}$.
2. Ajuster l'élément oxygène $\text{O}$ en ajoutant des molécules d'eau $\text{H}_2\text{O}$.
3. Ajuster l'élément hydrogène $\text{H}$ en ajoutant des ions $\text{H}^+$ (ou $\text{H}_3\text{O}^+$).
4. Ajuster les charges électriques en ajoutant des électrons $\text{e}^-$ du côté de l'oxydant.
Exemple avec $\text{MnO}_4^-/\text{Mn}^{2+}$ :
$$\text{MnO}_4^- + 8\,\text{H}^+ + 5\,\text{e}^- \rightleftharpoons \text{Mn}^{2+} + 4\,\text{H}_2\text{O}$$
## Équation d'oxydoréduction
- Une réaction d'oxydoréduction fait réagir l'**oxydant d'un couple** avec le **réducteur d'un autre couple**.
- Les électrons ne doivent jamais apparaître dans l'équation bilan : on multiplie chaque demi-équation par un entier pour avoir le même nombre d'électrons échangés, puis on additionne.
- Exemple entre $\text{Fe}^{2+}/\text{Fe}$ et $\text{Cu}^{2+}/\text{Cu}$ : $\text{Cu}^{2+} + \text{Fe} \longrightarrow \text{Cu} + \text{Fe}^{2+}$.
## L'essentiel à retenir
- **Oxydation** = perte d'électrons (le réducteur devient oxydant). **Réduction** = gain d'électrons (l'oxydant devient réducteur).
- Moyen mnémotechnique : l'**ox**ydant **gagne** les électrons (il est du même côté que les $\text{e}^-$).
- Vérifier à la fin la conservation des éléments **et** de la charge totale.
`,
simple: T`
## L'idée en une phrase
L'oxydoréduction est un échange d'électrons : un réducteur donne des électrons et un oxydant les attrape.
## Ce qu'il faut comprendre
- Dans un couple écrit $\text{Ox}/\text{Réd}$, c'est toujours l'oxydant à gauche et le réducteur à droite.
- L'oxydant a toujours les électrons dans son camp : $\text{Ox} + n\,\text{e}^- = \text{Réd}$. Si ça peut t'aider, retiens « **O**xydant = **O**btient des électrons ».
- Une vraie réaction chimique ne laisse jamais d'électrons libres flotter dans l'eau. Si une espèce donne $2$ électrons et que l'autre en prend $5$, il faut trouver un multiple commun ($10$) en multipliant la première demi-équation par $5$ et la deuxième par $2$.
- Pour équilibrer les atomes d'oxygène et d'hydrogène dans l'eau acide, on suit toujours la même recette dans l'ordre : autres atomes $\rightarrow$ $\text{H}_2\text{O}$ pour l'oxygène $\rightarrow$ $\text{H}^+$ pour l'hydrogène $\rightarrow$ $\text{e}^-$ pour la charge.
## Un exemple détaillé
Équilibrer la réaction entre les ions fer(II) $\text{Fe}^{2+}$ (du couple $\text{Fe}^{3+}/\text{Fe}^{2+}$) et le dichlore $\text{Cl}_2$ (du couple $\text{Cl}_2/\text{Cl}^-$).
1. $\text{Fe}^{2+}$ est réducteur : $\text{Fe}^{2+} \rightleftharpoons \text{Fe}^{3+} + \text{e}^-$ ($1$ électron cédé).
2. $\text{Cl}_2$ est oxydant : $\text{Cl}_2 + 2\,\text{e}^- \rightleftharpoons 2\,\text{Cl}^-$ ($2$ électrons captés).
3. On multiplie la première par $2$ pour échanger $2$ électrons, puis on additionne :
$$2\,\text{Fe}^{2+} + \text{Cl}_2 \longrightarrow 2\,\text{Fe}^{3+} + 2\,\text{Cl}^-$$
4. Vérification des charges : à gauche $+4$, à droite $2\times(+3) + 2\times(-1) = +4$. C'est équilibré !
## Les pièges à éviter
- Mettre les électrons du côté du réducteur dans $\text{Ox} + n\,\text{e}^- \rightleftharpoons \text{Réd}$ : les électrons sont **toujours** avec $\text{Ox}$.
- Oublier de compter les charges négatives des ions ou de vérifier la charge totale à la fin.
- Laisser des $\text{e}^-$ dans l'équation bilan finale.
## À retenir
- $\text{Ox} + n\,\text{e}^- \rightleftharpoons \text{Réd}$.
- Ordre d'équilibrage : atomes principaux $\rightarrow$ $\text{H}_2\text{O}$ $\rightarrow$ $\text{H}^+$ $\rightarrow$ $\text{e}^-$.
- Même nombre d'électrons cédés et captés avant d'additionner.
`
},
{
id: 'pc-lewis-polarite', titre: 'Schéma de Lewis, géométrie et polarité',
cours: T`
La forme en 3D d'une molécule et la répartition de ses charges électriques expliquent sa solubilité et ses propriétés physiques.
## Schéma de Lewis et règle de l'octet / du duet
- Un atome cherche à acquérir la configuration stable du gaz noble le plus proche : **$2$** électrons externes pour $\text{H}$ (duet), **$8$** électrons externes pour $\text{C}, \text{N}, \text{O}, \text{F}, \text{Cl}$ (octet).
- Le nombre total d'électrons de valence de la molécule (somme des électrons externes de chaque atome, ajustée pour les ions) se répartit en **doublets liants** (liaisons covalentes) et **doublets non liants**.
- Valence usuelle : $\text{H}$ ($1$ liaison, $0$ DNL), $\text{C}$ ($4$ liaisons, $0$ DNL), $\text{N}$ ($3$ liaisons, $1$ DNL), $\text{O}$ ($2$ liaisons, $2$ DNL), halogènes $\text{F}, \text{Cl}$ ($1$ liaison, $3$ DNL).
## Géométrie des molécules (répulsion des doublets)
Les doublets autour de l'atome central se repoussent au maximum dans l'espace :
- $4$ voisins (ex : $\text{CH}_4$) : géométrie **tétraédrique** (angles $\approx 109{,}5^\circ$).
- $3$ voisins + $1$ DNL (ex : $\text{NH}_3$) : géométrie **pyramidale**.
- $2$ voisins + $2$ DNL (ex : $\text{H}_2\text{O}$) : géométrie **coudée**.
- $2$ groupes autour de l'atome central (ex : $\text{CO}_2$) : géométrie **linéaire** ($180^\circ$).
- $3$ groupes sans DNL (ex : méthanal $\text{CH}_2\text{O}$) : géométrie **trigonale plane** ($120^\circ$).
## Électronégativité et polarité
- L'**électronégativité** $\chi$ mesure l'aptitude d'un atome à attirer les électrons d'une liaison. Elle augmente de gauche à droite et de bas en haut dans le tableau périodique ($\text{F} > \text{O} > \text{N}, \text{Cl} > \text{C} > \text{H}$).
- Si $\Delta\chi \geq 0{,}4$, la liaison est **polarisée** (charges partielles $\delta^+$ et $\delta^-$).
- Une molécule est **polaire** si les barycentres des charges partielles positives ($G^+$) et négatives ($G^-$) **ne sont pas confondus** (ex : $\text{H}_2\text{O}$, $\text{NH}_3$, $\text{HCl}$). Si la géométrie symétrique compense les polarisations, la molécule est **apolaire** (ex : $\text{CO}_2$, $\text{CCl}_4$, $\text{CH}_4$).
## Solubilité, extraction et savons
- **Qui se ressemble s'assemble** : un soluté polaire (ou ionique) est soluble dans un solvant polaire (comme l'eau) ; un soluté apolaire est soluble dans un solvant apolaire (comme le cyclohexane).
- **Extraction liquide-liquide** (ampoule à décanter) : on choisit un solvant extracteur **non miscible** à l'eau dans lequel l'espèce à extraire est beaucoup plus soluble. La phase la moins dense est au-dessus.
- Les **tensioactifs** (savons) ont une tête hydrophile (polaire/ionique) et une queue lipophile (apolaire), ce qui permet de former des micelles et d'emprisonner les graisses dans l'eau.
## L'essentiel à retenir
- Liaison $\text{C}-\text{H}$ peu polarisée ; liaisons $\text{O}-\text{H}$, $\text{N}-\text{H}$, $\text{C}=\text{O}$, $\text{H}-\text{Cl}$ fortement polarisées.
- Symétrie + liaisons polarisées peuvent donner une molécule apolaire ($\text{CO}_2$).
- Solvant polaire dissout polaire/ionique ; solvant apolaire dissout apolaire.
`,
simple: T`
## L'idée en une phrase
Les doublets d'électrons se repoussent comme des aimants pour donner sa forme à la molécule, et selon que les atomes tirent plus ou moins fort la couverture vers eux, la molécule devient polaire ou non.
## Ce qu'il faut comprendre
- Autour d'un atome central, tous les paquets d'électrons (liaisons ou doublets non liants) veulent être le plus loin possible les uns des autres : avec $4$ voisins ça fait une pyramide à base triangulaire (tétraèdre), et si l'un des voisins est remplacé par un doublet non liant invisible, la forme visible paraît pyramidale ($\text{NH}_3$) ou coudée ($\text{H}_2\text{O}$).
- L'**électronégativité**, c'est la force au tir à la corde : $\text{O}$, $\text{N}$, $\text{Cl}$ et $\text{F}$ tirent très fort les électrons vers eux ($\delta^-$), laissant leur voisin légèrement positif ($\delta^+$).
- Imagine $\text{CO}_2$ : l'oxygène de gauche tire à gauche et l'oxygène de droite tire exactement pareil à droite. Résultat, rien ne bouge : la molécule est **apolaire** ! Dans l'eau $\text{H}_2\text{O}$, comme la molécule est **coudée**, les deux côtés ne s'annulent pas : l'eau est très **polaire**.
## Un exemple détaillé
Comparer $\text{H}_2\text{O}$ et $\text{CO}_2$ :
1. $\text{H}_2\text{O}$ : liaisons $\text{O}-\text{H}$ polarisées ($\chi(\text{O}) > \chi(\text{H})$), géométrie coudée $\implies$ $G^+$ est entre les deux $\text{H}$, $G^-$ sur $\text{O}$ $\implies$ molécule **polaire**.
2. $\text{CO}_2$ : liaisons $\text{C}=\text{O}$ polarisées, géométrie linéaire symétrique $\implies$ $G^+$ et $G^-$ sont tous les deux sur le carbone $\implies$ molécule **apolaire**.
## Les pièges à éviter
- Dire que $\text{CO}_2$ est apolaire parce que ses liaisons ne sont pas polarisées (faux : ses liaisons sont très polarisées, mais s'annulent par symétrie).
- Dessiner $\text{H}_2\text{O}$ en ligne droite et conclure qu'elle est apolaire : n'oublie jamais les $2$ doublets non liants sur l'oxygène !
- Confondre miscibilité et solubilité.
## À retenir
- $\text{H}_2\text{O}$ coudée $\rightarrow$ polaire ; $\text{CO}_2$ linéaire $\rightarrow$ apolaire.
- Polaire dissout polaire ; apolaire dissout apolaire.
`
},
{
id: 'pc-chimie-organique', titre: 'Chimie organique : squelettes, IR et synthèse',
cours: T`
La chimie organique étudie les molécules carbonées : leur nom, leur structure, leur analyse spectroscopique et leur synthèse au laboratoire.
## Familles fonctionnelles et nomenclature
On repère la **chaîne carbonée la plus longue** portant le groupe caractéristique (numérotée pour donner le plus petit indice au groupe) :
- **Alcane** ($\text{C}-\text{C}$) : suffixe **-ane** ($1$ méth-, $2$ éth-, $3$ prop-, $4$ but-, $5$ pent-, $6$ hex-).
- **Alcool** ($-\text{OH}$) : suffixe **-ol** (ex : propan-2-ol).
- **Aldéhyde** ($-\text{CH}=\text{O}$ en bout de chaîne) : suffixe **-al**.
- **Cétone** ($-\text{CO}-$ entre deux carbones) : suffixe **-one**.
- **Acide carboxylique** ($-\text{COOH}$) : **acide ...-oïque**.
- **Ester** ($-\text{COO}-$) : nom en **-oate de -yle**.
## Spectroscopie infrarouge (IR)
Un spectre IR mesure la **transmittance** (en \%) en fonction du nombre d'onde $\sigma$ (en $\text{cm}^{-1}$). Les bandes d'absorption pointent vers le bas :
- Liaison $\text{O}-\text{H}$ liée (alcool) : **bande large et forte** entre $3200$ et $3600\text{ cm}^{-1}$.
- Liaison $\text{O}-\text{H}$ d'un acide carboxylique : bande très large de $2500$ à $3300\text{ cm}^{-1}$.
- Liaison $\text{C}=\text{O}$ (aldéhyde, cétone, acide, ester) : **bande fine et forte** vers $1700 - 1750\text{ cm}^{-1}$.
- Liaison $\text{C}-\text{H}$ : vers $2850 - 3000\text{ cm}^{-1}$.
## Étapes d'une synthèse organique et rendement
1. **Transformation** : souvent réalisée avec un **montage à chauffage à reflux** (accélère la réaction sans perte de matière grâce au réfrigérant à eau qui condense les vapeurs).
2. **Isolement** : filtration sous vide (Büchner) pour un solide, ou décantation/extraction liquide-liquide pour un liquide.
3. **Purification** : lavage, recristallisation, séchage sur solide anhydre.
4. **Analyse / Contrôle** : mesure de température de fusion (banc Köfler) ou **chromatographie sur couche mince (CCM)** pour vérifier la pureté par comparaison avec des témoins (même rapport frontal $R_f = \dfrac{h_{\text{tache}}}{h_{\text{éluant}}}$).
- **Rendement** d'une synthèse :
$$\eta = \dfrac{n_{\text{exp}}}{n_{\max}} = \dfrac{m_{\text{exp}}}{m_{\max}}$$
avec $0 \leq \eta \leq 1$ (souvent exprimé en $\%$).
## L'essentiel à retenir
- Dans une synthèse, $n_{\max}$ se calcule à partir du **réactif limitant**.
- Un alcool se repère par la grosse patate large vers $3300\text{ cm}^{-1}$ en IR ; un $\text{C}=\text{O}$ par un pic très fin et profond vers $1720\text{ cm}^{-1}$.
- Le chauffage à reflux chauffe sans laisser s'échapper les vapeurs.
`,
simple: T`
## L'idée en une phrase
En chimie organique, la terminaison du nom dit quelle famille est accrochée au squelette de carbone, le spectre IR donne sa carte d'identité, et le rendement vérifie combien on a vraiment réussi à fabriquer.
## Ce qu'il faut comprendre
- Pour nommer une molécule : compte les carbones de la plus longue route ($1$ méth, $2$ éth, $3$ prop, $4$ but, $5$ pent, $6$ hex), mets les petits morceaux branchés devant (méthyl-, éthyl-) et la famille à la fin (**-ol** pour alcool, **-al** pour aldéhyde, **-one** pour cétone, **acide ...-oïque**).
- Le **spectre infrarouge** est comme une radio des liaisons : chaque liaison vibre à une fréquence précise. Quand il y a un pic vers $1720\text{ cm}^{-1}$, c'est presque toujours un $\text{C}=\text{O}$. Une grosse bosse arrondie vers $3300\text{ cm}^{-1}$, c'est un $-\text{OH}$ d'alcool.
- En synthèse, on chauffe **à reflux** : un tuyau refroidi par de l'eau transforme les vapeurs en gouttes qui retombent dans le ballon, sinon tout s'évaporerait !
- À la fin, le **rendement** $\eta$ compare la masse vraiment récupérée sur la balance à la masse idéale prévue par le tableau d'avancement.
## Un exemple détaillé
On synthétise un ester : la théorie prévoit $n_{\max} = 0{,}20\text{ mol}$ pour une masse molaire $M = 130\text{ g}\cdot\text{mol}^{-1}$, mais on pèse $m_{\text{exp}} = 19{,}5\text{ g}$.
1. Masse théorique maximale : $m_{\max} = n_{\max} \times M = 0{,}20 \times 130 = 26{,}0\text{ g}$.
2. Rendement : $\eta = \dfrac{19{,}5}{26{,}0} = 0{,}75$, soit $75\,\%$.
## Les pièges à éviter
- Numéroter la chaîne principale à l'envers : le groupe caractéristique doit avoir le **plus petit** numéro possible.
- Oublier de compter le carbone du groupe $-\text{COOH}$ ou $-\text{CH}=\text{O}$ dans la chaîne la plus longue.
- Trouver un rendement supérieur à $100\,\%$ : si ça arrive en TP, c'est que le produit est encore humide ou impur !
## À retenir
- $1\text{ méth}$, $2\text{ éth}$, $3\text{ prop}$, $4\text{ but}$, $5\text{ pent}$, $6\text{ hex}$.
- Rendement $\eta = \dfrac{n_{\text{exp}}}{n_{\max}} = \dfrac{m_{\text{exp}}}{m_{\max}}$.
`
},
{
id: 'pc-combustion', titre: 'Combustions et énergie chimique',
cours: T`
Une **combustion** est une oxydoréduction rapide entre un **combustible** (alcane ou alcool) et un **comburant** (généralement le dioxygène $\text{O}_2$), qui libère de l'énergie thermique.
## Équation d'une combustion complète
- Lors d'une combustion **complète** d'un alcane $\text{C}_n\text{H}_{2n+2}$ ou d'un alcool $\text{C}_n\text{H}_{2n+2}\text{O}$, les seuls produits formés sont le dioxyde de carbone $\text{CO}_2$ et l'eau $\text{H}_2\text{O}$.
- Méthode d'équilibrage dans l'ordre : **$\text{C}$** $\rightarrow$ **$\text{H}$** $\rightarrow$ **$\text{O}$** (en dernier).
- Exemple (éthanol) : $\text{C}_2\text{H}_6\text{O} + 3\,\text{O}_2 \longrightarrow 2\,\text{CO}_2 + 3\,\text{H}_2\text{O}$.
- Si le dioxygène manque, la combustion est **incomplète** et produit du monoxyde de carbone $\text{CO}$ (gaz toxique) et du carbone $\text{C}$ (suie).
## Énergie molaire de réaction et énergies de liaison
- La rupture de liaisons dans les réactifs **consomme** de l'énergie ($+D_{\text{liaison}}$), tandis que la formation de liaisons dans les produits en **libère** ($-D_{\text{liaison}}$).
- **Énergie molaire de réaction** (en $\text{kJ}\cdot\text{mol}^{-1}$) :
$$\Delta_r E = \sum D(\text{liaisons rompues}) - \sum D(\text{liaisons formées})$$
- Une combustion est **exothermique** : $\Delta_r E < 0$ (elle libère de l'énergie vers l'extérieur). L'énergie libérée pour une quantité $n$ de combustible consommée vaut $|Q| = n \times |\Delta_r E|$.
## Pouvoir calorifique et enjeux
- Le **pouvoir calorifique** $PC$ (en $\text{J}\cdot\text{kg}^{-1}$ ou $\text{kJ}\cdot\text{g}^{-1}$) est l'énergie libérée par la combustion complète d'un kilogramme (ou d'un gramme) de combustible :
$$|Q| = m \times PC$$
- Enjeux sociétaux : les combustions fossiles émettent du $\text{CO}_2$ (gaz à effet de serre), d'où le recours aux agrocarburants ou à des alternatives sans combustion.
## L'essentiel à retenir
- Équilibrer toujours dans l'ordre : Carbone, Hydrogène, puis Oxygène.
- $\Delta_r E = \text{Énergie pour casser les réactifs} - \text{Énergie rendue en fabriquant les produits}$.
- Comme une combustion libère de la chaleur, $\Delta_r E$ est négatif.
`,
simple: T`
## L'idée en une phrase
Brûler un carburant casse d'anciennes liaisons (ça coûte un peu d'énergie) et fabrique du $\text{CO}_2$ et de l'eau très solides (ça en rend beaucoup plus), et la différence sort sous forme de chaleur.
## Ce qu'il faut comprendre
- Pour équilibrer n'importe quelle combustion complète avec $\text{O}_2$ : compte d'abord les carbones pour mettre le chiffre devant $\text{CO}_2$, puis divise les hydrogènes par $2$ pour mettre le chiffre devant $\text{H}_2\text{O}$, et finis par compter tous les oxygènes à droite pour ajuster $\text{O}_2$.
- Pour calculer l'énergie : imagine deux colonnes. À gauche, additionne toutes les liaisons qu'il faut **casser** dans les réactifs. À droite, additionne toutes les liaisons qu'on **fabrique** dans les produits. Fais **Cassées $-$ Fabriquées**. Si le résultat est négatif, c'est que la réaction libère du rab d'énergie : elle chauffe !
- Le **pouvoir calorifique** $PC$ donne directement combien de kilojoules libère $1\text{ kg}$ (ou $1\text{ g}$) de carburant.
## Un exemple détaillé
Combustion du méthane : $\text{CH}_4 + 2\,\text{O}_2 \longrightarrow \text{CO}_2 + 2\,\text{H}_2\text{O}$.
On donne $D(\text{C}-\text{H}) = 415$, $D(\text{O}=\text{O}) = 498$, $D(\text{C}=\text{O}) = 804$, $D(\text{O}-\text{H}) = 463\text{ kJ}\cdot\text{mol}^{-1}$.
1. Liaisons rompues : $4 \times (\text{C}-\text{H}) + 2 \times (\text{O}=\text{O}) = 4\times 415 + 2\times 498 = 2656\text{ kJ}$.
2. Liaisons formées : $2 \times (\text{C}=\text{O}) + 4 \times (\text{O}-\text{H}) = 2\times 804 + 4\times 463 = 3460\text{ kJ}$.
3. $\Delta_r E = 2656 - 3460 = -804\text{ kJ}\cdot\text{mol}^{-1}$.
## Les pièges à éviter
- Oublier qu'une molécule de $\text{CO}_2$ contient **$2$** doubles liaisons $\text{C}=\text{O}$ et qu'une molécule d'eau $\text{H}_2\text{O}$ contient **$2$** liaisons $\text{O}-\text{H}$ !
- Oublier l'atome d'oxygène déjà présent dans la formule d'un alcool quand on équilibre $\text{O}_2$.
- Faire Fabriquées $-$ Cassées (ce qui donnerait le signe opposé).
## À retenir
- Ordre d'équilibrage : $\text{C} \rightarrow \text{H} \rightarrow \text{O}$.
- $\Delta_r E = \sum D(\text{rompues}) - \sum D(\text{formées}) < 0$.
- Énergie libérée : $|Q| = m \times PC = n \times |\Delta_r E|$.
`
},
{
id: 'pc-interactions-champs', titre: 'Interactions fondamentales et champs',
cours: T`
Les corps agissent à distance les uns sur les autres grâce à l'interaction gravitationnelle (liée à la masse) et à l'interaction électrostatique (liée à la charge électrique).
## Loi de gravitation et loi de Coulomb
- **Interaction gravitationnelle** entre deux masses $m_A$ et $m_B$ (en $\text{kg}$) séparées d'une distance $d$ (en $\text{m}$), toujours **attractive**, avec $G = 6{,}67 \times 10^{-11}\text{ N}\cdot\text{m}^2\cdot\text{kg}^{-2}$ :
$$F_{A/B} = G \times \dfrac{m_A \times m_B}{d^2}$$
- **Interaction électrostatique (loi de Coulomb)** entre deux charges ponctuelles $q_A$ et $q_B$ (en $\text{C}$) séparées de $d$ (en $\text{m}$), avec $k = 8{,}99 \times 10^9\text{ N}\cdot\text{m}^2\cdot\text{C}^{-2}$ :
$$F_{A/B} = k \times \dfrac{|q_A \times q_B|}{d^2}$$
Elle est **répulsive** si $q_A$ et $q_B$ sont de même signe, **attractive** si elles sont de signes opposés.
## Notion de champ vectoriel
Un corps source crée en tout point de l'espace un champ qui décrit la force qu'il exercerait sur un corps test placé à cet endroit :
- **Champ de gravitation** $\vec{\mathcal{G}}$ (en $\text{N}\cdot\text{kg}^{-1}$) : $\vec{F} = m\,\vec{\mathcal{G}}$. Au voisinage de la Terre, il est assimilé au **champ de pesanteur** $\vec{g}$ (uniforme, vertical, vers le bas, $g \approx 9{,}81\text{ N}\cdot\text{kg}^{-1}$), d'où le poids $\vec{P} = m\,\vec{g}$.
- **Champ électrostatique** $\vec{E}$ (en $\text{N}\cdot\text{C}^{-1}$ ou $\text{V}\cdot\text{m}^{-1}$) :
$$\vec{F}_e = q\,\vec{E}$$
Si $q > 0$, $\vec{F}_e$ est dans le **même sens** que $\vec{E}$. Si $q < 0$, $\vec{F}_e$ est en **sens opposé** à $\vec{E}$.
- Entre deux plaques parallèles distantes de $d$ soumises à une tension $U$, le champ $\vec{E}$ est uniforme, dirigé de la plaque $+$ vers la plaque $-$, de valeur $E = \dfrac{U}{d}$.
## L'essentiel à retenir
- Dans les deux lois, si la distance $d$ est multipliée par $2$, la force est divisée par $2^2 = 4$.
- L'interaction gravitationnelle est toujours attractive ; l'interaction électrique peut attirer ou repousser.
- Une charge négative (comme un électron) subit une force $\vec{F}_e$ de sens contraire à $\vec{E}$.
`,
simple: T`
## L'idée en une phrase
Un objet crée autour de lui une « zone d'influence » appelée **champ** ($\vec{g}$ pour les masses, $\vec{E}$ pour les charges), et tout objet qui entre dedans reçoit une force proportionnelle à ce champ.
## Ce qu'il faut comprendre
- La gravité et l'électricité se ressemblent énormément : toutes les deux diminuent comme $\dfrac{1}{d^2}$. Plus tu es loin, plus la force chute vite (à distance double, force $4$ fois plus faible).
- La grande différence : la masse est toujours positive, donc la gravité attire toujours. La charge électrique peut être $+$ ou $-$ : deux charges pareilles se repoussent, deux contraires s'attirent.
- Le **champ** évite de récrire toute la formule à chaque fois : la Terre crée un champ $\vec{g} \approx 9{,}81\text{ N}\cdot\text{kg}^{-1}$, et ton poids vaut juste $P = m \times g$. De la même façon, un condensateur crée un champ $\vec{E}$, et la force sur une charge $q$ vaut juste $\vec{F} = q\vec{E}$.
## Un exemple détaillé
Entre deux plaques distantes de $d = 4{,}0\text{ cm}$ avec une tension $U = 200\text{ V}$, on place un proton ($q = +1{,}6 \times 10^{-19}\text{ C}$).
1. On convertit $d = 0{,}040\text{ m}$.
2. Valeur du champ uniforme : $E = \dfrac{U}{d} = \dfrac{200}{0{,}040} = 5{,}0 \times 10^3\text{ V}\cdot\text{m}^{-1}$.
3. Force électrique : $F = |q| \times E = 1{,}6 \times 10^{-19} \times 5{,}0 \times 10^3 = 8{,}0 \times 10^{-16}\text{ N}$, dans le sens de $\vec{E}$ car $q > 0$.
## Les pièges à éviter
- Oublier de mettre $d$ en **mètres** et au **carré** ($d^2$) dans les lois de Newton et de Coulomb.
- Oublier que sur un électron ($q < 0$), la force est dirigée vers la plaque $+$, donc à l'opposé de $\vec{E}$.
- Oublier les valeurs absolues $|q_A q_B|$ quand on calcule l'intensité positive d'une force.
## À retenir
- $F_{\text{grav}} = G\dfrac{m_A m_B}{d^2}$ et $F_{\text{élec}} = k\dfrac{|q_A q_B|}{d^2}$.
- $\vec{P} = m\vec{g}$ et $\vec{F}_e = q\vec{E}$ (avec $E = \dfrac{U}{d}$ entre deux plaques).
`
},
{
id: 'pc-fluides', titre: 'Statique des fluides et pression',
cours: T`
À l'échelle microscopique, la pression d'un fluide résulte des chocs incessants de ses molécules sur les parois.
## Pression et force pressante
- Une force pressante $\vec{F}$ exercée perpendiculairement sur une surface d'aire $S$ (en $\text{m}^2$) crée une pression $P$ (en pascal, $\text{Pa}$) :
$$P = \dfrac{F}{S} \iff F = P \times S$$
- Conversions utiles : $1\text{ hPa} = 100\text{ Pa}$ ; $1\text{ bar} = 10^5\text{ Pa}$ ; pression atmosphérique normale $P_{\text{atm}} \approx 1{,}013 \times 10^5\text{ Pa}$.
## Loi de Boyle-Mariotte (gaz)
Pour une quantité donnée de gaz à **température constante**, le produit de sa pression par son volume reste constant :
$$P \times V = \text{constante} \implies P_1 \times V_1 = P_2 \times V_2$$
Quand le volume diminue, la pression augmente (les chocs contre les parois sont plus fréquents).
## Loi fondamentale de la statique des fluides
Dans un fluide incompressible (comme un liquide de masse volumique $\rho$ en $\text{kg}\cdot\text{m}^{-3}$) au repos, la pression augmente avec la profondeur. Entre deux points $A$ et $B$ d'altitudes $z_A$ et $z_B$ (axe $Oz$ orienté vers le haut) :
$$P_B - P_A = \rho \times g \times (z_A - z_B)$$
Si la profondeur augmente de $h = z_A - z_B > 0$ sous la surface (où $P_A = P_{\text{atm}}$) :
$$P(h) = P_{\text{atm}} + \rho \times g \times h$$
Dans l'eau ($\rho \approx 1000\text{ kg}\cdot\text{m}^{-3}$), la pression augmente d'environ $1\text{ bar}$ ($10^5\text{ Pa}$) tous les $10\text{ m}$ de profondeur.
## L'essentiel à retenir
- Toujours convertir les surfaces en $\text{m}^2$ ($1\text{ cm}^2 = 10^{-4}\text{ m}^2$) et les pressions en $\text{Pa}$.
- Dans un liquide au repos, deux points à la même profondeur ont exactement la même pression.
- $P \times V = \text{cste}$ s'applique uniquement à un **gaz** à **température constante** (et quantité fixe).
`,
simple: T`
## L'idée en une phrase
La pression, c'est la force des molécules qui appuient sur une surface : plus on écrase un gaz ou plus on descend profond sous l'eau, plus cette pression monte.
## Ce qu'il faut comprendre
- Si tu appuies avec la même force sur un ski (grande surface) ou sur un talon aiguille (toute petite surface), le talon s'enfonce dans la neige parce que $P = \dfrac{F}{S}$ est énorme.
- Dans une seringue bouchée (**Boyle-Mariotte**), les molécules de gaz tapent sur les murs : si tu réduis le volume de moitié, elles ont deux fois moins de place, donc elles tapent deux fois plus souvent et la pression double ($P_1 V_1 = P_2 V_2$).
- En plongée, la pression que tu ressens vient du poids de l'air au-dessus de la mer **plus** le poids de toute la colonne d'eau au-dessus de toi : $P = P_{\text{atm}} + \rho g h$. Tous les $10\text{ m}$ d'eau, tu ajoutes environ $1\text{ bar}$.
## Un exemple détaillé
Un plongeur descend à $h = 25\text{ m}$ sous la mer ($\rho = 1025\text{ kg}\cdot\text{m}^{-3}$, $g = 9{,}81\text{ N}\cdot\text{kg}^{-1}$, $P_{\text{atm}} = 1{,}013 \times 10^5\text{ Pa}$).
1. Pression due à l'eau : $\rho g h = 1025 \times 9{,}81 \times 25 \approx 2{,}51 \times 10^5\text{ Pa}$.
2. Pression totale : $P = 1{,}013 \times 10^5 + 2{,}51 \times 10^5 \approx 3{,}53 \times 10^5\text{ Pa}$ (soit environ $3{,}5\text{ bar}$).
## Les pièges à éviter
- Oublier d'ajouter $P_{\text{atm}}$ quand on cherche la pression totale sous l'eau.
- Se tromper dans les conversions d'aire : $1\text{ cm}^2 = 10^{-4}\text{ m}^2$ (et pas $10^{-2}$).
- Mettre $\rho$ en $\text{g}\cdot\text{L}^{-1}$ au lieu de $\text{kg}\cdot\text{m}^{-3}$ ($1\text{ kg}\cdot\text{L}^{-1} = 1000\text{ kg}\cdot\text{m}^{-3}$).
## À retenir
- $P = \dfrac{F}{S}$ (en Pa, N, $\text{m}^2$).
- Gaz à $T$ constante : $P_1 V_1 = P_2 V_2$.
- Liquide au repos : $P_B - P_A = \rho g (z_A - z_B)$.
`
},
{
id: 'pc-mouvement-newton', titre: 'Mouvement, vecteur vitesse et loi de Newton',
cours: T`
La mécanique relie les mouvements d'un système (décrits par ses vecteurs position et vitesse) aux forces qui s'exercent sur lui.
## Vecteur vitesse et variation du vecteur vitesse
Pour une chronophotographie prise à intervalles réguliers $\Delta t$ entre des positions $M_{i-1}, M_i, M_{i+1}$ :
- **Vecteur vitesse approché** au point $M_i$ (en $\text{m}\cdot\text{s}^{-1}$) :
$$\vec{v}_i \approx \dfrac{\overrightarrow{M_i M_{i+1}}}{\Delta t} \quad \text{ou} \quad \vec{v}_i \approx \dfrac{\overrightarrow{M_{i-1} M_{i+1}}}{2\,\Delta t}$$
Sa direction est tangente à la trajectoire, son sens est celui du mouvement.
- **Variation du vecteur vitesse** : $\Delta\vec{v}_i = \vec{v}_{i+1} - \vec{v}_i$ (ou $\vec{v}_{i+1} - \vec{v}_{i-1}$ sur $2\Delta t$). C'est une différence **vectorielle** (on place $-\vec{v}_i$ au bout de $\vec{v}_{i+1}$).
## Deuxième loi de Newton (forme approchée)
Dans un référentiel galiléen, pour un système de masse $m$ constante, la somme vectorielle des forces extérieures est colinéaire et de même sens que la variation du vecteur vitesse $\Delta\vec{v}$ :
$$\sum \vec{F}_{\text{ext}} \approx m \times \dfrac{\Delta\vec{v}}{\Delta t}$$
- Si $\sum \vec{F}_{\text{ext}} = \vec{0}$ (forces compensées), alors $\Delta\vec{v} = \vec{0}$ : le vecteur vitesse reste constant, le mouvement est **rectiligne uniforme** (ou le système reste immobile). C'est le **principe d'inertie**.
- Dans une trajectoire courbe (ex : mouvement circulaire uniforme), même si la norme $v$ est constante, le vecteur $\vec{v}$ change de direction, donc $\Delta\vec{v} \neq \vec{0}$ et pointe vers l'intérieur de la courbe.
## L'essentiel à retenir
- $\sum\vec{F}$ et $\Delta\vec{v}$ ont toujours exactement la même direction et le même sens.
- On ne confond jamais la vitesse $v$ (norme) et le vecteur vitesse $\vec{v}$ (direction + sens + norme).
- Attention à l'échelle de tracé (une échelle pour les longueurs en m, une échelle pour les vitesses en $\text{m}\cdot\text{s}^{-1}$ et une pour les forces en N).
`,
simple: T`
## L'idée en une phrase
Les forces ne disent pas où va l'objet tout de suite : elles disent comment sa **flèche vitesse** va tourner, grandir ou rétrécir entre deux images !
## Ce qu'il faut comprendre
- Le vecteur vitesse $\vec{v}$ à l'instant $i$, c'est simplement le petit saut jusqu'au point suivant divisé par le temps $\Delta t$ entre deux photos. Plus les points sont espacés, plus la flèche $\vec{v}$ est longue.
- La clé du chapitre, c'est $\Delta\vec{v} = \vec{v}_{\text{après}} - \vec{v}_{\text{avant}}$ : pour la dessiner, trace la nouvelle flèche vitesse, puis accroche à son bout l'ancienne flèche **à l'envers**. La flèche qui ferme le chemin, c'est $\Delta\vec{v}$.
- La **2ᵉ loi de Newton** dit que la somme des forces $\sum\vec{F}$ pousse **exactement dans la même direction** que $\Delta\vec{v}$, et vaut $m \times \dfrac{\Delta\vec{v}}{\Delta t}$.
- Si une voiture tourne dans un rond-point à vitesse constante ($50\text{ km/h}$), $\Delta\vec{v}$ n'est pas nul parce que la flèche a tourné : il pointe vers le centre du rond-point !
## Un exemple détaillé
Une balle de masse $m = 0{,}20\text{ kg}$ tombe à la verticale. À l'instant $t_1$, $v_1 = 2{,}0\text{ m}\cdot\text{s}^{-1}$ vers le bas ; $\Delta t = 0{,}10\text{ s}$ plus tard, $v_2 = 3{,}0\text{ m}\cdot\text{s}^{-1}$ vers le bas.
1. Comme les vecteurs sont alignés vers le bas : $\Delta v = 3{,}0 - 2{,}0 = 1{,}0\text{ m}\cdot\text{s}^{-1}$ vers le bas.
2. Loi de Newton approchée : $\sum F = m \times \dfrac{\Delta v}{\Delta t} = 0{,}20 \times \dfrac{1{,}0}{0{,}10} = 2{,}0\text{ N}$ vers le bas.
3. On retrouve bien le poids $P = m g \approx 0{,}20 \times 9{,}81 \approx 2{,}0\text{ N}$ !
## Les pièges à éviter
- Soustraire les longueurs $v_2 - v_1$ alors que les deux vecteurs ne sont pas dans la même direction (il faut faire un dessin vectoriel si la trajectoire est courbe).
- Oublier de diviser par $\Delta t$ dans $\dfrac{\Delta\vec{v}}{\Delta t}$ (ou par $2\Delta t$ si on calcule $\Delta\vec{v} = \vec{v}_{i+1} - \vec{v}_{i-1}$).
- Confondre $\Delta t$ en millisecondes avec des secondes.
## À retenir
- $v_i = \dfrac{M_i M_{i+1}}{\Delta t}$ (ou $\dfrac{M_{i-1} M_{i+1}}{2\Delta t}$).
- $\sum\vec{F} \approx m\dfrac{\Delta\vec{v}}{\Delta t}$ : même sens et même direction que $\Delta\vec{v}$.
`
},
{
id: 'pc-electricite', titre: 'Énergie et puissance électrique',
cours: T`
Dans un circuit électrique, les charges déplacées par le générateur transfèrent de l'énergie aux récepteurs.
## Intensité, lois des circuits et générateur réel
- L'**intensité** $I$ (en ampères, $\text{A}$) est le débit de charge électrique : $I = \dfrac{Q}{\Delta t}$ (avec $Q$ en coulombs, $\text{C}$, et $\Delta t$ en $\text{s}$).
- **Loi des nœuds** : la somme des intensités qui entrent dans un nœud égale la somme des intensités qui en sortent.
- **Loi des mailles** : la somme algébrique des tensions le long d'une maille fermée est nulle.
- **Modèle d'un générateur réel** (pile, batterie) de force électromotrice $E$ et de résistance interne $r$ :
$$U = E - r \times I$$
À vide ($I = 0$), on mesure $U = E$. En fonctionnement, la tension baisse quand le courant $I$ augmente.
## Puissance, énergie et effet Joule
- **Puissance électrique** reçue ou fournie par un dipôle sous tension $U$ parcouru par $I$ (en watts, $\text{W}$) :
$$P = U \times I$$
- **Énergie électrique** transférée pendant une durée $\Delta t$ (en joules, $\text{J}$, si $\Delta t$ en $\text{s}$ ; ou en $\text{Wh}$ si $P$ en $\text{W}$ et $\Delta t$ en $\text{h}$, avec $1\text{ Wh} = 3600\text{ J}$) :
$$E_{\text{élec}} = P \times \Delta t = U \times I \times \Delta t$$
- **Effet Joule** : dans un conducteur ohmique de résistance $R$ ($U = R \times I$), toute l'énergie électrique est dissipée en énergie thermique :
$$P_J = R \times I^2$$
- **Rendement** d'un convertisseur ou d'un générateur : $\eta = \dfrac{P_{\text{utile}}}{P_{\text{reçue}}} = \dfrac{E_{\text{utile}}}{E_{\text{reçue}}} \leq 1$.
Pour une pile ($U = E - rI$) : $P_{\text{utile}} = U I$, $P_{\text{totale}} = E I$ et $P_{\text{perdue}} = r I^2$.
## L'essentiel à retenir
- $P = U \times I$ (en $\text{W}$) et $E = P \times \Delta t$ (en $\text{J}$).
- $1\text{ kWh} = 1000\text{ W} \times 3600\text{ s} = 3{,}6 \times 10^6\text{ J}$.
- Plus le courant $I$ est grand, plus les pertes par effet Joule $rI^2$ grimpent vite (au carré de $I$).
`,
simple: T`
## L'idée en une phrase
La puissance $P = U \times I$ mesure la vitesse à laquelle l'électricité travaille chaque seconde, et une partie se perd toujours en chaleur ($rI^2$) dans les fils et les piles.
## Ce qu'il faut comprendre
- L'intensité $I$ est le débit d'électrons qui passe dans le fil, la tension $U$ est la poussée qui les fait avancer. Le produit $P = U \times I$ donne la puissance en watts.
- La **puissance**, c'est de l'énergie par seconde ($1\text{ W} = 1\text{ J/s}$). Pour avoir l'énergie totale consommée, il suffit de multiplier par le temps : $E = P \times \Delta t$.
- Une vraie pile chauffe un peu quand elle débite beaucoup de courant à cause de sa résistance interne $r$. Du coup, la tension disponible aux bornes baisse un peu : $U = E - rI$. Plus $I$ augmente, plus la perte $rI^2$ grossit vite (si on double $I$, les pertes sont multipliées par $4$ !).
## Un exemple détaillé
Une batterie de tension à vide $E = 12{,}0\text{ V}$ et résistance interne $r = 0{,}50\text{ }\Omega$ fournit un courant $I = 4{,}0\text{ A}$.
1. Tension aux bornes : $U = E - rI = 12{,}0 - 0{,}50 \times 4{,}0 = 10{,}0\text{ V}$.
2. Puissance utile fournie au circuit : $P_{\text{utile}} = U \times I = 10{,}0 \times 4{,}0 = 40\text{ W}$.
3. Puissance perdue en chaleur dans la batterie : $P_J = r \times I^2 = 0{,}50 \times 4{,}0^2 = 8{,}0\text{ W}$.
4. Rendement : $\eta = \dfrac{P_{\text{utile}}}{E \times I} = \dfrac{40}{48} \approx 0{,}83$ (soit $83\,\%$).
## Les pièges à éviter
- Mélanger watts/heures et joules : pour des joules, $\Delta t$ doit être en **secondes** (pas en minutes ni en heures).
- Écrire $P_J = R \times I$ en oubliant le carré sur $I^2$.
- Confondre la lettre $E$ pour l'énergie (en joules) et la lettre $E$ pour la force électromotrice d'une pile (en volts).
## À retenir
- $U = E - rI$ et $P = U I$.
- Effet Joule : $P_J = R I^2$.
- $E_{\text{élec}} = P \times \Delta t$, et $\eta = \dfrac{P_{\text{utile}}}{P_{\text{totale}}}$.
`
},
{
id: 'pc-energie-mecanique', titre: 'Travail d\'une force et énergie mécanique',
cours: T`
L'étude énergétique permet de calculer des vitesses ou des hauteurs sans avoir besoin de connaître toute la trajectoire en fonction du temps.
## Énergie cinétique et travail d'une force
- **Énergie cinétique** d'un solide de masse $m$ à la vitesse $v$ (en joules, $\text{J}$) :
$$E_c = \dfrac{1}{2} m v^2$$
- **Travail d'une force constante** $\vec{F}$ lors d'un déplacement rectiligne $\overrightarrow{AB}$ (avec $\alpha = (\vec{F}\,;\overrightarrow{AB})$) :
$$W_{AB}(\vec{F}) = \vec{F} \cdot \overrightarrow{AB} = F \times AB \times \cos(\alpha)$$
- Si $W > 0$ ($\alpha < 90^\circ$) : travail **moteur**. Si $W < 0$ ($\alpha > 90^\circ$) : travail **résistant**. Si $W = 0$ ($\alpha = 90^\circ$) : travail **nul**.
- **Travail du poids** entre deux altitudes $z_A$ et $z_B$ (axe $Oz$ vers le haut), quel que soit le chemin suivi :
$$W_{AB}(\vec{P}) = m g (z_A - z_B)$$
## Théorème de l'énergie cinétique (TEC)
Entre deux positions $A$ et $B$, la variation d'énergie cinétique est égale à la somme des travaux de toutes les forces extérieures :
$$\Delta E_c = E_c(B) - E_c(A) = \sum W_{AB}(\vec{F}_{\text{ext}})$$
## Énergie potentielle et énergie mécanique
- **Énergie potentielle de pesanteur** : $E_{pp} = m g z$ (avec $z$ l'altitude par rapport à une référence choisie $E_{pp}=0$).
- **Énergie mécanique** : $E_m = E_c + E_{pp}$.
- Si seules des forces conservatives agissent (comme le poids, pas de frottements), **$E_m$ se conserve** : $E_m(B) = E_m(A)$.
- En présence de forces non conservatives (frottements $\vec{f}$), la variation d'énergie mécanique vaut :
$$\Delta E_m = E_m(B) - E_m(A) = W_{AB}(\vec{f})$$
Le travail des frottements étant négatif ($W_{AB}(\vec{f}) = -f \times AB$), $E_m$ diminue et se transforme en chaleur.
## L'essentiel à retenir
- Une force toujours perpendiculaire au mouvement (comme la réaction normale $\vec{R}_N$ sans frottements) ne travaille jamais ($W = 0$).
- Le travail du poids ne dépend que de la différence de hauteur $z_A - z_B$, jamais de la forme de la piste.
- Si l'objet perd de la vitesse sur un toboggan avec frottements, l'énergie manquante vient de $W(\vec{f}) = E_m(B) - E_m(A)$.
`,
simple: T`
## L'idée en une phrase
L'objet possède deux tirelires d'énergie — la vitesse ($E_c$) et la hauteur ($E_{pp}$) — et quand une force pousse dans le sens du mouvement elle remplit la tirelire, tandis que les frottements la vident.
## Ce qu'il faut comprendre
- Le **travail** d'une force mesure si cette force aide ou freine le mouvement : si tu pousses vers l'avant ($W > 0$), ça donne de l'énergie ; si les frottements freinent vers l'arrière ($\alpha = 180^\circ$, $\cos 180^\circ = -1$), $W < 0$ et ça retire de l'énergie ; si une force appuie sur le côté à $90^\circ$ ($\cos 90^\circ = 0$), elle ne fait rien du tout.
- Sans frottement, tu peux faire des montagnes russes : quand tu descends, $E_{pp} = mgz$ baisse et se transforme intégralement en $E_c = \frac{1}{2}mv^2$ (tu vas plus vite). La somme $E_m = E_c + E_{pp}$ reste constante !
- S'il y a des frottements $\vec{f}$, $E_m$ diminue pile de la valeur du travail des frottements : $\Delta E_m = W(\vec{f})$.
## Un exemple détaillé
Une bille de masse $m = 0{,}50\text{ kg}$ part sans vitesse initiale ($v_A = 0$) d'une hauteur $z_A = 3{,}2\text{ m}$ sans frottements ($g = 9{,}81\text{ N}\cdot\text{kg}^{-1}$). Quelle est sa vitesse $v_B$ au sol ($z_B = 0$) ?
1. Conservation de $E_m$ : $E_c(A) + E_{pp}(A) = E_c(B) + E_{pp}(B)$.
2. $0 + m g z_A = \dfrac{1}{2} m v_B^2 + 0$. Les masses $m$ se simplifient !
3. $v_B = \sqrt{2 g z_A} = \sqrt{2 \times 9{,}81 \times 3{,}2} \approx 7{,}9\text{ m}\cdot\text{s}^{-1}$.
## Les pièges à éviter
- Mettre la vitesse en $\text{km/h}$ dans $\frac{1}{2} m v^2$ (il faut diviser par $3{,}6$ pour passer en $\text{m}\cdot\text{s}^{-1}$).
- Oublier le signe $-$ dans $W(\vec{f}) = -f \times d$ pour des frottements opposés au déplacement.
- Confondre $\Delta E_c = E_c(B) - E_c(A)$ avec $E_c(A) - E_c(B)$.
## À retenir
- $E_c = \dfrac{1}{2}mv^2$, $E_{pp} = mgz$, $E_m = E_c + E_{pp}$.
- $W_{AB}(\vec{F}) = F \cdot AB \cdot \cos\alpha$, $W_{AB}(\vec{P}) = mg(z_A - z_B)$.
- Sans frottements : $E_m = \text{cste}$. Avec frottements : $\Delta E_m = W(\vec{f})$.
`
},
{
id: 'pc-ondes-optique', titre: 'Ondes mécaniques, lentilles et photons',
cours: T`
Ce chapitre rassemble les ondes qui se propagent dans la matière, la formation d'images par une lentille mince convergente et l'aspect corpusculaire de la lumière.
## Ondes mécaniques progressives et périodiques
- Une **onde mécanique** propage une perturbation (de l'énergie) dans un milieu matériel **sans transport global de matière**.
- **Célérité** (vitesse de propagation, en $\text{m}\cdot\text{s}^{-1}$) pour une distance $d$ parcourue pendant le retard $\tau$ :
$$v = \dfrac{d}{\tau}$$
- **Onde périodique** : caractérisée par sa **période temporelle** $T$ (en $\text{s}$), sa **fréquence** $f = \dfrac{1}{T}$ (en $\text{Hz}$) et sa **longueur d'onde** $\lambda$ (période spatiale, en $\text{m}$, distance parcourue pendant une période $T$) :
$$\lambda = v \times T = \dfrac{v}{f}$$
## Lentilles minces convergentes
- Un objet réel $AB$ perpendiculaire à l'axe optique donne une image $A'B'$ à travers une lentille de centre optique $O$ et de distance focale $f' = \overline{OF'} > 0$.
- **Trois rayons particuliers** : passant par $O$ (non dévié) ; parallèle à l'axe (émerge par $F'$) ; passant par $F$ (émerge parallèle à l'axe).
- **Relation de conjugaison** (avec valeurs algébriques : $\overline{OA} < 0$ pour un objet réel devant la lentille) :
$$\dfrac{1}{\overline{OA'}} - \dfrac{1}{\overline{OA}} = \dfrac{1}{f'}$$
- **Grandissement** : $\gamma = \dfrac{\overline{A'B'}}{\overline{AB}} = \dfrac{\overline{OA'}}{\overline{OA}}$. Si $\gamma < 0$, l'image est **renversée** ; si $|\gamma| > 1$, elle est agrandie.
## Lumière : couleur et photons
- Une radiation de fréquence $\nu$ (ou longueur d'onde dans le vide $\lambda$) transporte l'énergie par paquets appelés **photons** ($h = 6{,}63 \times 10^{-34}\text{ J}\cdot\text{s}$, $c = 3{,}00 \times 10^8\text{ m}\cdot\text{s}^{-1}$) :
$$E = h \times \nu = \dfrac{h \times c}{\lambda}$$
- Lorsqu'un atome passe d'un niveau d'énergie $E_{\text{haut}}$ à $E_{\text{bas}}$, il émet un photon d'énergie $\Delta E = E_{\text{haut}} - E_{\text{bas}} = \dfrac{h c}{\lambda}$.
- Conversion d'énergie : $1\text{ eV} = 1{,}60 \times 10^{-19}\text{ J}$.
## L'essentiel à retenir
- $\lambda = v T = \dfrac{v}{f}$ (ne pas confondre $T$ sur un graphique en temps et $\lambda$ sur un graphique en distance).
- Pour la lentille : ne jamais oublier le signe $-$ sur $\overline{OA}$ quand l'objet est à gauche de la lentille !
- Pour un photon, plus $\lambda$ est petite (violet/UV), plus l'énergie $E = \dfrac{hc}{\lambda}$ est grande.
`,
simple: T`
## L'idée en une phrase
Une onde transporte une secousse à la vitesse $v$, une lentille plie les rayons pour projeter une image nette, et la lumière voyage par petits grains d'énergie appelés **photons**.
## Ce qu'il faut comprendre
- Pense à une ola dans un stade : les gens restent sur leur siège (pas de transport de matière), seule la vague avance à la vitesse $v$. La **période $T$** est le temps entre deux vagues pour une même personne ; la **longueur d'onde $\lambda$** est la distance entre deux sommets sur une photo prise à un instant donné. La formule $\lambda = v \times T$ dit juste : distance $=$ vitesse $\times$ temps !
- Pour une **lentille convergente**, on mesure toutes les distances à partir du centre $O$, avec une règle algébrique (positif vers la droite, négatif vers la gauche). Comme l'objet est placé à gauche de la lentille, $\overline{OA}$ est toujours **négatif** !
- Les électrons d'un atome vivent sur les barreaux d'une échelle d'énergie. Quand un électron saute d'un barreau haut à un barreau bas, il crache un grain de lumière (un **photon**) dont la couleur dépend pile de la hauteur du saut : $\Delta E = \dfrac{hc}{\lambda}$.
## Un exemple détaillé
Un objet $AB$ est placé à $30\text{ cm}$ devant une lentille de distance focale $f' = +10\text{ cm}$. Où se forme l'image ?
1. Données algébriques : $\overline{OA} = -30\text{ cm}$ (à gauche) et $f' = +10\text{ cm}$.
2. Relation de conjugaison : $\dfrac{1}{\overline{OA'}} = \dfrac{1}{f'} + \dfrac{1}{\overline{OA}} = \dfrac{1}{10} + \dfrac{1}{-30} = \dfrac{3 - 1}{30} = \dfrac{2}{30} = \dfrac{1}{15}$.
3. Donc $\overline{OA'} = +15\text{ cm}$ (image réelle, $15\text{ cm}$ après la lentille) et $\gamma = \dfrac{+15}{-30} = -0{,}50$ (image renversée et $2$ fois plus petite).
## Les pièges à éviter
- Oublier le signe $-$ de $\overline{OA}$ dans $\dfrac{1}{\overline{OA'}} - \dfrac{1}{\overline{OA}} = \dfrac{1}{f'}$.
- Laisser $\Delta E$ en électronvolts ($\text{eV}$) au lieu de le convertir en joules ($\times 1{,}60 \times 10^{-19}$) pour trouver $\lambda = \dfrac{hc}{\Delta E}$ en mètres !
- Confondre $\lambda$ (en $\text{nm} = 10^{-9}\text{ m}$) sans convertir en mètres dans $E = \dfrac{hc}{\lambda}$.
## À retenir
- $\lambda = v T = \dfrac{v}{f}$.
- Lentille : $\dfrac{1}{\overline{OA'}} - \dfrac{1}{\overline{OA}} = \dfrac{1}{f'}$ et $\gamma = \dfrac{\overline{OA'}}{\overline{OA}}$.
- Photon : $\Delta E = \dfrac{hc}{\lambda}$ (avec $1\text{ eV} = 1{,}60 \times 10^{-19}\text{ J}$).
`
}
];
})();
