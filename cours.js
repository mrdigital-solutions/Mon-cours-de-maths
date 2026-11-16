/* Base de cours : programme de spécialité mathématiques de première générale (rentrée 2026).
   Chaque chapitre a une fiche de cours ("cours") et une explication en mots simples ("simple").
   Mise en forme : "## " titre, "- " liste, "1. " étapes, **gras**, maths en LaTeX entre $...$. */
(() => {
const T = String.raw;
window.COURS = [
{
id: 'suites', titre: 'Suites numériques',
cours: T`
Une suite est une liste de nombres numérotés : $u_0, u_1, u_2, \dots$ Elle sert à décrire une évolution étape par étape (un capital année après année, une population, etc.).
## Deux façons de définir une suite
- **Formule explicite** : $u_n$ se calcule directement avec $n$. Exemple : $u_n = 3n + 2$ donne $u_{10} = 32$.
- **Relation de récurrence** : on donne le premier terme et la façon de passer d'un terme au suivant. Exemple : $u_0 = 5$ et $u_{n+1} = 2u_n - 1$.
## Suite arithmétique
Définition : on passe d'un terme au suivant en **ajoutant** toujours le même nombre $r$, appelé raison.
$$u_{n+1} = u_n + r$$
Terme général :
$$u_n = u_0 + n \times r$$
Pour reconnaître une suite arithmétique, on vérifie que la différence $u_{n+1} - u_n$ est constante.
Exemple : $u_0 = 4$ et $r = 3$ donnent $u_n = 4 + 3n$, donc $u_{20} = 64$.
## Suite géométrique
Définition : on passe d'un terme au suivant en **multipliant** toujours par le même nombre $q$, appelé raison.
$$u_{n+1} = q \times u_n$$
Terme général :
$$u_n = u_0 \times q^n$$
Une évolution à taux constant est géométrique : augmenter de $t\,\%$ revient à multiplier par $1 + \dfrac{t}{100}$.
Exemple : un capital de 1000 € placé à 3 % par an vaut $u_n = 1000 \times 1{,}03^n$ après $n$ ans.
## Sommes à connaître
$$1 + 2 + \dots + n = \dfrac{n(n+1)}{2}$$
$$1 + q + q^2 + \dots + q^n = \dfrac{1 - q^{n+1}}{1 - q} \quad (q \neq 1)$$
Pour une suite arithmétique, la somme de termes consécutifs vaut : nombre de termes $\times \dfrac{\text{premier} + \text{dernier}}{2}$.
## Sens de variation
- La suite est croissante si $u_{n+1} - u_n \geq 0$ pour tout $n$, décroissante si $u_{n+1} - u_n \leq 0$.
- Suite arithmétique : croissante si $r > 0$, décroissante si $r < 0$.
- Suite géométrique de premier terme positif : croissante si $q > 1$, décroissante si $0 < q < 1$.
## Limite (idée intuitive)
En calculant des termes de plus en plus loin, on observe si $u_n$ se rapproche d'un nombre, devient de plus en plus grand, ou ne se stabilise pas. En première on se contente de **conjecturer** la limite.
## L'essentiel à retenir
- Arithmétique : on ajoute $r$, et $u_n = u_0 + nr$.
- Géométrique : on multiplie par $q$, et $u_n = u_0 \times q^n$.
- Un taux d'évolution constant donne une suite géométrique.
- Si la suite commence à $u_1$, les formules deviennent $u_n = u_1 + (n-1)r$ et $u_n = u_1 \times q^{n-1}$.
`,
simple: T`
## L'idée en une phrase
Une suite, c'est une liste de nombres rangés dans l'ordre, où $n$ est le numéro de la case et $u_n$ le nombre écrit dedans.
## Ce qu'il faut comprendre
- Imagine un escalier. Dans une suite **arithmétique**, toutes les marches ont la même hauteur $r$ : on monte (ou on descend) toujours de la même quantité.
- Pour arriver à la marche numéro $n$ en partant de $u_0$, tu as fait $n$ pas de hauteur $r$ : voilà pourquoi $u_n = u_0 + n \times r$.
- Dans une suite **géométrique**, on ne rajoute pas, on multiplie. C'est comme une photocopie agrandie plusieurs fois de suite : à chaque étape, tout est multiplié par $q$.
- Après $n$ multiplications par $q$, on a multiplié par $q^n$ : voilà pourquoi $u_n = u_0 \times q^n$.
## Un exemple détaillé
Tu as 200 € et tu mets 15 € de côté chaque mois. On note $u_n$ ta somme après $n$ mois.
1. Chaque mois on ajoute 15 : la suite est arithmétique de raison $r = 15$, avec $u_0 = 200$.
2. Formule : $u_n = 200 + 15n$.
3. Après 12 mois : $u_{12} = 200 + 15 \times 12 = 380$ €.
## Les pièges à éviter
- Confondre ajouter et multiplier : « + 5 % » n'est pas « + 5 », c'est « $\times 1{,}05$ ».
- Se tromper de numéro : de $u_0$ à $u_n$ il y a $n$ étapes, mais $n + 1$ termes.
- Écrire $u_n = u_0 + r^n$ ou $u_n = u_0 \times q \times n$ : relis les deux formules, elles ne se mélangent pas.
## À retenir
- On ajoute toujours pareil : arithmétique. On multiplie toujours pareil : géométrique.
- Pour savoir laquelle c'est, calcule $u_1 - u_0$ et $u_2 - u_1$, puis $\dfrac{u_1}{u_0}$ et $\dfrac{u_2}{u_1}$.
`
},
{
id: 'second-degre', titre: 'Second degré',
cours: T`
Une fonction polynôme du second degré s'écrit $f(x) = ax^2 + bx + c$ avec $a \neq 0$. Sa courbe est une parabole. Ce chapitre apprend à résoudre $f(x) = 0$ et à trouver le signe de $f(x)$.
## Les trois formes
- **Développée** : $f(x) = ax^2 + bx + c$.
- **Factorisée** (quand il y a des racines) : $f(x) = a(x - x_1)(x - x_2)$. Elle donne directement les racines et le signe.
- **Canonique** : $f(x) = a(x - \alpha)^2 + \beta$. Elle donne directement le sommet $S(\alpha\,;\beta)$.
Pour trouver la forme canonique dans un cas simple, on complète le carré : $x^2 + 2px = (x + p)^2 - p^2$.
Exemple : $x^2 + 6x + 1 = (x + 3)^2 - 9 + 1 = (x + 3)^2 - 8$.
## Résoudre $ax^2 + bx + c = 0$
On calcule le discriminant :
$$\Delta = b^2 - 4ac$$
- Si $\Delta > 0$ : deux solutions, $x_1 = \dfrac{-b - \sqrt{\Delta}}{2a}$ et $x_2 = \dfrac{-b + \sqrt{\Delta}}{2a}$.
- Si $\Delta = 0$ : une seule solution, $x_0 = -\dfrac{b}{2a}$.
- Si $\Delta < 0$ : aucune solution réelle.
Exemple : $x^2 - 5x + 6 = 0$. $\Delta = 25 - 24 = 1$, donc $x_1 = \dfrac{5 - 1}{2} = 2$ et $x_2 = \dfrac{5 + 1}{2} = 3$.
## Somme et produit des racines
Quand il y a deux racines :
$$x_1 + x_2 = -\dfrac{b}{a} \qquad x_1 \times x_2 = \dfrac{c}{a}$$
Cela permet de trouver des racines entières de tête : pour $x^2 - 5x + 6$, on cherche deux nombres de somme 5 et de produit 6, donc 2 et 3.
## Signe du trinôme
- Si $\Delta > 0$ : $f(x)$ est du signe de $a$ **à l'extérieur** des racines et du signe contraire **entre** les racines.
- Si $\Delta = 0$ : $f(x)$ est du signe de $a$ et s'annule en $x_0$.
- Si $\Delta < 0$ : $f(x)$ est toujours du signe de $a$.
## Parabole
- Si $a > 0$ la parabole est tournée vers le haut (minimum), si $a < 0$ vers le bas (maximum).
- Le sommet a pour abscisse $\alpha = -\dfrac{b}{2a}$ et la droite $x = \alpha$ est axe de symétrie.
## L'essentiel à retenir
- $\Delta = b^2 - 4ac$ décide du nombre de solutions.
- Signe de $a$ à l'extérieur des racines.
- Avant de calculer $\Delta$, regarde si on peut factoriser directement (facteur commun, identité remarquable, racine évidente).
`,
simple: T`
## L'idée en une phrase
Une fonction du second degré dessine une parabole, et tout le chapitre revient à savoir où cette parabole coupe l'axe des abscisses et de quel côté elle se trouve.
## Ce qu'il faut comprendre
- Résoudre $ax^2 + bx + c = 0$, c'est chercher les endroits où la parabole touche l'axe horizontal. Ces endroits s'appellent les **racines**.
- Une parabole peut couper l'axe deux fois, le toucher une seule fois, ou ne jamais le toucher. Le discriminant $\Delta$ est juste un nombre qui dit dans quel cas on est : positif (deux fois), nul (une fois), négatif (jamais).
- Pour le signe : une parabole tournée vers le haut ($a > 0$) est sous l'axe seulement **entre** ses deux racines. Partout ailleurs elle est au-dessus. C'est ce que dit la règle « signe de $a$ à l'extérieur des racines ».
## Un exemple détaillé
Résoudre $2x^2 - 4x - 6 > 0$.
1. On repère $a = 2$, $b = -4$, $c = -6$.
2. $\Delta = (-4)^2 - 4 \times 2 \times (-6) = 16 + 48 = 64$, donc $\sqrt{\Delta} = 8$.
3. Racines : $x_1 = \dfrac{4 - 8}{4} = -1$ et $x_2 = \dfrac{4 + 8}{4} = 3$.
4. $a = 2$ est positif, donc le trinôme est positif à l'extérieur des racines.
5. Solution : $x < -1$ ou $x > 3$, c'est-à-dire $S = \,]-\infty\,; -1[\, \cup \,]3\,; +\infty[$.
## Les pièges à éviter
- Oublier les parenthèses : $b^2$ avec $b = -4$ vaut $(-4)^2 = 16$, pas $-16$.
- Se tromper dans $-4ac$ quand $c$ est négatif : moins par moins donne plus.
- Oublier de diviser par $2a$ (et pas seulement par 2).
- Répondre à une inéquation en donnant seulement les racines : il faut donner un intervalle.
## À retenir
- $\Delta = b^2 - 4ac$, puis $x = \dfrac{-b \pm \sqrt{\Delta}}{2a}$.
- Dessine vite la parabole au brouillon : le signe se lit dessus.
`
},
{
id: 'derivation', titre: 'Dérivation',
cours: T`
La dérivée mesure la vitesse à laquelle une fonction varie. Elle donne la pente de la tangente à la courbe, et elle servira à étudier les variations.
## Taux de variation
Entre $a$ et $a + h$, le taux de variation de $f$ est :
$$\dfrac{f(a + h) - f(a)}{h}$$
C'est la pente de la droite (sécante) qui passe par les deux points de la courbe d'abscisses $a$ et $a + h$.
## Nombre dérivé
Quand $h$ se rapproche de 0, si ce taux se rapproche d'un nombre, ce nombre est le **nombre dérivé** de $f$ en $a$, noté $f'(a)$. C'est la pente de la tangente à la courbe au point d'abscisse $a$.
## Équation de la tangente
$$y = f'(a)(x - a) + f(a)$$
Près de $a$, la tangente remplace bien la courbe : $f(a + h) \approx f(a) + f'(a) \times h$.
## Dérivées à connaître
- $f(x) = k$ (constante) : $f'(x) = 0$
- $f(x) = x$ : $f'(x) = 1$
- $f(x) = x^2$ : $f'(x) = 2x$
- $f(x) = x^3$ : $f'(x) = 3x^2$
- $f(x) = x^n$ ($n$ entier) : $f'(x) = n\,x^{n-1}$
- $f(x) = \dfrac{1}{x}$ : $f'(x) = -\dfrac{1}{x^2}$
- $f(x) = \sqrt{x}$ : $f'(x) = \dfrac{1}{2\sqrt{x}}$ pour $x > 0$ (la racine carrée n'est pas dérivable en 0)
## Opérations
- Somme : $(u + v)' = u' + v'$
- Produit par un nombre : $(k\,u)' = k\,u'$
- Produit : $(u\,v)' = u'v + u\,v'$
- Inverse : $\left(\dfrac{1}{v}\right)' = -\dfrac{v'}{v^2}$
- Quotient : $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - u\,v'}{v^2}$
- Si $f(x) = g(ax + b)$, alors $f'(x) = a \times g'(ax + b)$
Exemple : $f(x) = 4x^3 - 5x^2 + 2x - 7$ donne $f'(x) = 12x^2 - 10x + 2$.
## Valeur absolue
La fonction $x \mapsto |x|$ a une courbe en forme de V : elle n'est pas dérivable en 0, car la pente vaut $-1$ à gauche et $1$ à droite.
## L'essentiel à retenir
- $f'(a)$ est la pente de la tangente au point d'abscisse $a$.
- On dérive terme par terme : l'exposant descend devant, puis il diminue de 1.
- La dérivée d'un produit n'est pas le produit des dérivées.
`,
simple: T`
## L'idée en une phrase
La dérivée dit à quelle vitesse une courbe monte ou descend à un endroit précis.
## Ce qu'il faut comprendre
- Pense à une route en montagne. La courbe, c'est le profil de la route. Le nombre dérivé $f'(a)$, c'est la **pente** de la route à l'endroit $a$ : positif si ça monte, négatif si ça descend, zéro si c'est plat.
- Pour mesurer cette pente, on prend deux points très proches sur la courbe et on calcule « montée divisée par avancée ». Plus les points sont proches, plus on obtient la pente exacte.
- La **tangente** est la droite qui frôle la courbe en ce point, avec exactement cette pente.
- La **fonction dérivée** $f'$ donne la pente partout d'un coup. On la calcule avec les formules, sans refaire le raisonnement à chaque fois.
## Un exemple détaillé
Soit $f(x) = x^2 - 3x$. Cherchons la tangente au point d'abscisse 2.
1. On dérive : $f'(x) = 2x - 3$.
2. La pente en 2 : $f'(2) = 2 \times 2 - 3 = 1$.
3. Le point de la courbe : $f(2) = 4 - 6 = -2$.
4. Formule : $y = f'(2)(x - 2) + f(2) = 1 \times (x - 2) - 2$.
5. Tangente : $y = x - 4$.
## Les pièges à éviter
- La dérivée d'une constante est 0 : dans $x^2 + 7$, le 7 disparaît.
- $(u\,v)'$ n'est pas $u' \times v'$ : il faut $u'v + u\,v'$.
- Pour un quotient, le signe au milieu est un **moins**, et on n'oublie pas le carré en bas.
- Confondre $f(a)$ (hauteur du point) et $f'(a)$ (pente en ce point).
## À retenir
- Dérivée de $x^n$ : $n\,x^{n-1}$.
- Tangente : $y = f'(a)(x - a) + f(a)$.
`
},
{
id: 'variations', titre: 'Variations des fonctions',
cours: T`
Le signe de la dérivée indique si la fonction monte ou descend. C'est l'outil pour dresser un tableau de variations et trouver un maximum ou un minimum.
## Lien entre dérivée et variations
Sur un intervalle $I$ :
- si $f'(x) \geq 0$ pour tout $x$ de $I$, alors $f$ est croissante sur $I$ ;
- si $f'(x) \leq 0$ pour tout $x$ de $I$, alors $f$ est décroissante sur $I$ ;
- si $f'(x) = 0$ pour tout $x$ de $I$, alors $f$ est constante sur $I$.
## Extremum
Si $f'$ s'annule en $a$ **en changeant de signe**, alors $f$ a un extremum en $a$ : un maximum si $f'$ passe de $+$ à $-$, un minimum si $f'$ passe de $-$ à $+$. En ce point la tangente est horizontale.
## Méthode pour étudier une fonction
1. Calculer $f'(x)$.
2. Étudier le signe de $f'(x)$ (résoudre $f'(x) = 0$, puis faire un tableau de signes).
3. En déduire les variations de $f$ et dresser le tableau de variations.
4. Calculer les valeurs de $f$ aux endroits où $f'$ s'annule.
Exemple : $f(x) = x^2 - 4x + 1$. $f'(x) = 2x - 4$, qui est négatif avant 2 et positif après. Donc $f$ est décroissante sur $]-\infty\,; 2]$, croissante sur $[2\,; +\infty[$, avec un minimum $f(2) = -3$.
## Second degré
Pour $f(x) = ax^2 + bx + c$, $f'(x) = 2ax + b$ s'annule en $-\dfrac{b}{2a}$ : c'est l'abscisse du sommet. Si $a > 0$ c'est un minimum, si $a < 0$ un maximum.
## Fonctions paires et impaires
- $f$ est **paire** si $f(-x) = f(x)$ : sa courbe est symétrique par rapport à l'axe des ordonnées (exemple : $x^2$).
- $f$ est **impaire** si $f(-x) = -f(x)$ : sa courbe est symétrique par rapport à l'origine (exemple : $x^3$).
## Applications
- **Optimisation** : pour trouver la plus grande aire, le plus petit coût, etc., on écrit la quantité comme une fonction, puis on cherche son extremum.
- **Position relative de deux courbes** : on étudie le signe de $f(x) - g(x)$.
## L'essentiel à retenir
- Dérivée positive : la fonction monte. Dérivée négative : elle descend.
- Un extremum se trouve là où la dérivée s'annule en changeant de signe.
- On étudie toujours le **signe** de $f'$, pas celui de $f$.
`,
simple: T`
## L'idée en une phrase
Pour savoir quand une fonction monte ou descend, on regarde si sa dérivée est positive ou négative.
## Ce qu'il faut comprendre
- La dérivée est la pente de la courbe. Pente positive : la courbe monte. Pente négative : elle descend.
- Au sommet d'une colline ou au fond d'une vallée, on est à plat un court instant : la pente vaut 0. C'est pour ça qu'on cherche les extremums en résolvant $f'(x) = 0$.
- Attention, il faut aussi que la pente **change de signe** : montée puis descente donne un maximum, descente puis montée donne un minimum.
## Un exemple détaillé
Étudions $f(x) = -x^2 + 6x - 5$.
1. Dérivée : $f'(x) = -2x + 6$.
2. $f'(x) = 0$ quand $-2x + 6 = 0$, donc $x = 3$.
3. Signe : pour $x < 3$, $f'(x) > 0$ ; pour $x > 3$, $f'(x) < 0$.
4. Donc $f$ monte jusqu'à 3 puis descend : il y a un maximum en $x = 3$.
5. Ce maximum vaut $f(3) = -9 + 18 - 5 = 4$.
## Les pièges à éviter
- Étudier le signe de $f$ au lieu du signe de $f'$.
- Se tromper de sens pour une expression comme $-2x + 6$ : quand le coefficient de $x$ est négatif, elle est positive **avant** sa racine.
- Oublier de calculer la valeur de l'extremum : on demande souvent $f(3)$, pas seulement $x = 3$.
- Dans un problème d'optimisation, oublier l'intervalle où $x$ a un sens (une longueur est positive).
## À retenir
- Méthode en trois temps : dériver, signe de la dérivée, tableau de variations.
- L'extremum est là où $f'$ s'annule en changeant de signe.
`
},
{
id: 'exponentielle', titre: 'Fonction exponentielle',
cours: T`
La fonction exponentielle décrit les évolutions où la vitesse de croissance est proportionnelle à la quantité elle-même : intérêts composés, populations, radioactivité.
## Définition
La fonction exponentielle, notée $\exp$, est l'unique fonction dérivable sur $\mathbb{R}$ qui vérifie :
$$f' = f \quad \text{et} \quad f(0) = 1$$
On note $\exp(x) = e^x$, où $e = \exp(1) \approx 2{,}718$.
## Propriétés algébriques
Pour tous réels $x$ et $y$, et tout entier $n$ :
- $e^0 = 1$ et $e^1 = e$
- $e^{x + y} = e^x \times e^y$
- $e^{-x} = \dfrac{1}{e^x}$
- $e^{x - y} = \dfrac{e^x}{e^y}$
- $(e^x)^n = e^{nx}$
Ce sont les mêmes règles que pour les puissances.
## Signe et variations
- Pour tout réel $x$, $e^x > 0$ : une exponentielle n'est jamais nulle ni négative.
- La fonction exponentielle est strictement croissante sur $\mathbb{R}$.
Conséquences très utiles :
$$e^a = e^b \iff a = b \qquad e^a < e^b \iff a < b$$
## Dérivées
- $(e^x)' = e^x$
- Pour $a$ réel, $(e^{at})' = a\,e^{at}$
Exemple : $f(x) = (2x + 1)e^x$ est un produit, donc $f'(x) = 2e^x + (2x + 1)e^x = (2x + 3)e^x$.
## Lien avec les suites géométriques
Pour tout réel $a$, la suite $(e^{na})$ est géométrique de raison $e^a$. L'exponentielle est la version « en continu » d'une suite géométrique : $t \mapsto e^{kt}$ croît si $k > 0$ et décroît si $k < 0$.
## L'essentiel à retenir
- $e^x$ est toujours strictement positif.
- L'exponentielle transforme les sommes en produits : $e^{x+y} = e^x e^y$.
- Sa dérivée est elle-même.
- Pour étudier le signe d'une expression avec $e^x$ en facteur, on ne s'occupe que de l'autre facteur.
`,
simple: T`
## L'idée en une phrase
L'exponentielle est la fonction qui grandit d'autant plus vite qu'elle est déjà grande.
## Ce qu'il faut comprendre
- Pense à une boule de neige qui roule : plus elle est grosse, plus elle ramasse de neige, donc plus elle grossit vite. C'est exactement ce que veut dire $f' = f$ : la vitesse de croissance est égale à la taille.
- Le nombre $e$ vaut environ 2,718. Écrire $e^x$, c'est écrire une puissance de ce nombre, donc toutes les règles des puissances marchent.
- Une puissance d'un nombre positif est toujours positive : $e^x$ ne vaut jamais 0 et n'est jamais négatif.
- Comme la fonction monte tout le temps, deux exponentielles sont égales seulement si leurs exposants sont égaux. Pour résoudre une équation, on peut donc « enlever les $e$ » des deux côtés.
## Un exemple détaillé
Résoudre $e^{3x - 1} = e^{x + 5}$.
1. Les deux membres sont des exponentielles, donc on compare les exposants : $3x - 1 = x + 5$.
2. $3x - x = 5 + 1$, donc $2x = 6$.
3. Solution : $x = 3$.
## Les pièges à éviter
- $e^{x + y}$ n'est pas $e^x + e^y$ : c'est $e^x \times e^y$.
- $e^0$ vaut 1, pas 0.
- Chercher à résoudre $e^x = 0$ ou $e^x = -2$ : c'est impossible.
- Pour dériver $e^{at}$, ne pas oublier le $a$ devant.
- Pour dériver $(2x + 1)e^x$, utiliser la formule du produit.
## À retenir
- $e^x > 0$ toujours, et la fonction est croissante.
- $e^a = e^b$ revient à $a = b$.
`
},
{
id: 'trigonometrie', titre: 'Trigonométrie',
cours: T`
On étend le cosinus et le sinus, connus dans le triangle rectangle, à tous les nombres réels grâce au cercle trigonométrique.
## Cercle trigonométrique et radian
Le cercle trigonométrique est le cercle de centre $O$ et de rayon 1, parcouru dans le sens inverse des aiguilles d'une montre.
Le **radian** mesure un angle par la longueur de l'arc qu'il découpe sur ce cercle. Un tour complet vaut $2\pi$ radians.
$$180^\circ = \pi \text{ rad}$$
Pour convertir des degrés en radians, on multiplie par $\dfrac{\pi}{180}$.
## Image d'un réel
On « enroule » la droite des réels autour du cercle : à chaque réel $x$ correspond un point $M$ du cercle. Deux réels qui diffèrent d'un multiple de $2\pi$ ont le même point image.
## Cosinus et sinus
Si $M$ est le point image de $x$, alors $\cos x$ est l'abscisse de $M$ et $\sin x$ son ordonnée.
- $-1 \leq \cos x \leq 1$ et $-1 \leq \sin x \leq 1$
- $\cos^2 x + \sin^2 x = 1$
## Valeurs remarquables
- $x = 0$ : $\cos x = 1$, $\sin x = 0$
- $x = \dfrac{\pi}{6}$ : $\cos x = \dfrac{\sqrt{3}}{2}$, $\sin x = \dfrac{1}{2}$
- $x = \dfrac{\pi}{4}$ : $\cos x = \dfrac{\sqrt{2}}{2}$, $\sin x = \dfrac{\sqrt{2}}{2}$
- $x = \dfrac{\pi}{3}$ : $\cos x = \dfrac{1}{2}$, $\sin x = \dfrac{\sqrt{3}}{2}$
- $x = \dfrac{\pi}{2}$ : $\cos x = 0$, $\sin x = 1$
- $x = \pi$ : $\cos x = -1$, $\sin x = 0$
## Angles associés (lus sur le cercle)
- $\cos(-x) = \cos x$ et $\sin(-x) = -\sin x$
- $\cos(\pi - x) = -\cos x$ et $\sin(\pi - x) = \sin x$
- $\cos(\pi + x) = -\cos x$ et $\sin(\pi + x) = -\sin x$
## Fonctions cosinus et sinus
- Elles sont **périodiques** de période $2\pi$ : $\cos(x + 2\pi) = \cos x$ et $\sin(x + 2\pi) = \sin x$. Leurs courbes se répètent.
- Cosinus est **paire** (courbe symétrique par rapport à l'axe des ordonnées), sinus est **impaire** (symétrique par rapport à l'origine).
## L'essentiel à retenir
- $\pi$ radians, c'est un demi-tour.
- Cosinus se lit sur l'axe horizontal, sinus sur l'axe vertical.
- Il suffit de connaître les valeurs pour $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$, $\dfrac{\pi}{3}$ : les autres se retrouvent par symétrie sur le cercle.
`,
simple: T`
## L'idée en une phrase
On se promène sur un cercle de rayon 1, et le cosinus et le sinus sont simplement les coordonnées de l'endroit où on se trouve.
## Ce qu'il faut comprendre
- Tu pars du point tout à droite du cercle et tu marches dans le sens inverse des aiguilles d'une montre. Le nombre $x$ est la **distance** parcourue sur le cercle.
- Un tour complet mesure $2\pi$ (le périmètre d'un cercle de rayon 1). Un demi-tour mesure donc $\pi$, un quart de tour $\dfrac{\pi}{2}$.
- Là où tu t'arrêtes, tu regardes tes coordonnées : l'abscisse est $\cos x$, l'ordonnée est $\sin x$.
- Si tu fais un tour de plus, tu reviens au même endroit : c'est pour ça que cosinus et sinus se répètent tous les $2\pi$.
## Un exemple détaillé
Trouver $\cos \dfrac{2\pi}{3}$ et $\sin \dfrac{2\pi}{3}$.
1. $\dfrac{2\pi}{3} = \pi - \dfrac{\pi}{3}$ : c'est le symétrique de $\dfrac{\pi}{3}$ par rapport à l'axe vertical.
2. Le point est donc en haut à gauche : abscisse négative, ordonnée positive.
3. On reprend les valeurs de $\dfrac{\pi}{3}$ en changeant le signe du cosinus.
4. Résultat : $\cos \dfrac{2\pi}{3} = -\dfrac{1}{2}$ et $\sin \dfrac{2\pi}{3} = \dfrac{\sqrt{3}}{2}$.
## Les pièges à éviter
- Laisser la calculatrice en degrés alors qu'on travaille en radians.
- Inverser les valeurs de $\dfrac{\pi}{6}$ et $\dfrac{\pi}{3}$ : pour le petit angle $\dfrac{\pi}{6}$, le point est presque à droite, donc c'est le cosinus qui est grand.
- Oublier le signe : il dépend du quart de cercle où se trouve le point.
## À retenir
- Cosinus : horizontal. Sinus : vertical.
- Fais toujours un petit dessin du cercle avant de répondre.
`
},
{
id: 'produit-scalaire', titre: 'Produit scalaire',
cours: T`
Le produit scalaire associe à deux vecteurs un **nombre**. Il sert à calculer des longueurs et des angles, et à prouver que deux droites sont perpendiculaires.
## Avec les normes et l'angle
$$\vec{u} \cdot \vec{v} = \|\vec{u}\| \times \|\vec{v}\| \times \cos(\vec{u}, \vec{v})$$
## Avec le projeté orthogonal
Si $H$ est le projeté orthogonal de $C$ sur la droite $(AB)$ :
$$\overrightarrow{AB} \cdot \overrightarrow{AC} = \overrightarrow{AB} \cdot \overrightarrow{AH}$$
Ce produit vaut $AB \times AH$ si $\overrightarrow{AB}$ et $\overrightarrow{AH}$ ont le même sens, et $-AB \times AH$ sinon.
## Avec les coordonnées
Dans un repère orthonormé, si $\vec{u}(x\,; y)$ et $\vec{v}(x'\,; y')$ :
$$\vec{u} \cdot \vec{v} = xx' + yy'$$
La norme vaut $\|\vec{u}\| = \sqrt{x^2 + y^2}$, et $\vec{u} \cdot \vec{u} = \|\vec{u}\|^2$.
## Orthogonalité
$$\vec{u} \perp \vec{v} \iff \vec{u} \cdot \vec{v} = 0$$
## Règles de calcul
- Symétrie : $\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}$
- Bilinéarité : $\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}$ et $(k\vec{u}) \cdot \vec{v} = k\,(\vec{u} \cdot \vec{v})$
- $\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + 2\,\vec{u} \cdot \vec{v} + \|\vec{v}\|^2$
- $\|\vec{u} - \vec{v}\|^2 = \|\vec{u}\|^2 - 2\,\vec{u} \cdot \vec{v} + \|\vec{v}\|^2$
## Formule d'Al-Kashi
Dans un triangle $ABC$ :
$$BC^2 = AB^2 + AC^2 - 2 \times AB \times AC \times \cos \widehat{A}$$
C'est le théorème de Pythagore généralisé à un triangle quelconque.
## Cercle de diamètre $[AB]$
L'ensemble des points $M$ tels que $\overrightarrow{MA} \cdot \overrightarrow{MB} = 0$ est le cercle de diamètre $[AB]$.
## L'essentiel à retenir
- Un produit scalaire est un nombre, pas un vecteur.
- Produit scalaire nul : vecteurs orthogonaux.
- On choisit la formule selon ce qu'on connaît : coordonnées, angle, ou projeté.
`,
simple: T`
## L'idée en une phrase
Le produit scalaire est un nombre qui dit à quel point deux vecteurs « vont dans la même direction ».
## Ce qu'il faut comprendre
- Si deux vecteurs pointent dans le même sens, leur produit scalaire est grand et positif.
- S'ils sont perpendiculaires, aucun n'avance dans la direction de l'autre : le produit scalaire vaut 0. C'est le test à connaître pour prouver un angle droit.
- S'ils pointent en sens opposés, le produit scalaire est négatif.
- Avec des coordonnées, le calcul est très simple : on multiplie les abscisses entre elles, les ordonnées entre elles, et on additionne.
## Un exemple détaillé
Les points sont $A(1\,; 2)$, $B(4\,; 3)$ et $C(0\,; 5)$. Le triangle $ABC$ est-il rectangle en $A$ ?
1. $\overrightarrow{AB}$ a pour coordonnées $(4 - 1\,; 3 - 2) = (3\,; 1)$.
2. $\overrightarrow{AC}$ a pour coordonnées $(0 - 1\,; 5 - 2) = (-1\,; 3)$.
3. $\overrightarrow{AB} \cdot \overrightarrow{AC} = 3 \times (-1) + 1 \times 3 = 0$.
4. Le produit scalaire est nul, donc les vecteurs sont orthogonaux : le triangle est rectangle en $A$.
## Les pièges à éviter
- Répondre par un vecteur : le résultat est toujours un nombre.
- Pour les coordonnées d'un vecteur, faire « arrivée moins départ », pas l'inverse.
- Dans Al-Kashi, oublier le signe moins ou le facteur 2.
- Utiliser $xx' + yy'$ dans un repère qui n'est pas orthonormé.
## À retenir
- $\vec{u} \cdot \vec{v} = xx' + yy'$.
- Nul veut dire perpendiculaire.
`
},
{
id: 'geometrie-reperee', titre: 'Géométrie repérée',
cours: T`
Dans un repère orthonormé, on décrit les droites et les cercles par des équations. Le produit scalaire permet de traiter la perpendicularité.
## Vecteur normal à une droite
Un vecteur **normal** à une droite est un vecteur non nul orthogonal à la direction de cette droite.
Propriété : la droite d'équation $ax + by + c = 0$ admet $\vec{n}(a\,; b)$ comme vecteur normal.
## Équation d'une droite avec un point et un vecteur normal
1. On écrit que $M(x\,; y)$ est sur la droite quand $\overrightarrow{AM} \cdot \vec{n} = 0$.
2. Avec $A(x_A\,; y_A)$ et $\vec{n}(a\,; b)$, cela donne $a(x - x_A) + b(y - y_A) = 0$.
3. On développe pour obtenir $ax + by + c = 0$.
Exemple : droite passant par $A(1\,; 2)$ de vecteur normal $\vec{n}(3\,; -1)$. $3(x - 1) - (y - 2) = 0$, soit $3x - y - 1 = 0$.
## Projeté orthogonal d'un point sur une droite
Le projeté orthogonal $H$ de $A$ sur une droite $d$ est le point de $d$ tel que $(AH)$ soit perpendiculaire à $d$. On le trouve comme intersection de $d$ et de la perpendiculaire à $d$ passant par $A$.
## Équation d'un cercle
Le cercle de centre $\Omega(a\,; b)$ et de rayon $r$ a pour équation :
$$(x - a)^2 + (y - b)^2 = r^2$$
Pour reconnaître un cercle dans une équation développée, on complète les carrés.
Exemple : $x^2 + y^2 - 4x + 6y - 3 = 0$ s'écrit $(x - 2)^2 - 4 + (y + 3)^2 - 9 - 3 = 0$, soit $(x - 2)^2 + (y + 3)^2 = 16$. C'est le cercle de centre $(2\,; -3)$ et de rayon 4.
## Parabole
La courbe d'équation $y = ax^2 + bx + c$ est une parabole.
- Axe de symétrie : la droite d'équation $x = -\dfrac{b}{2a}$.
- Sommet : le point d'abscisse $-\dfrac{b}{2a}$.
## L'essentiel à retenir
- Dans $ax + by + c = 0$, les nombres $a$ et $b$ donnent un vecteur normal.
- Cercle : $(x - a)^2 + (y - b)^2 = r^2$, et à droite c'est le **carré** du rayon.
- Un point est sur une courbe quand ses coordonnées vérifient l'équation.
`,
simple: T`
## L'idée en une phrase
Une équation de droite ou de cercle est un test : un point est sur la figure si ses coordonnées rendent l'égalité vraie.
## Ce qu'il faut comprendre
- Un **vecteur normal** est une flèche plantée perpendiculairement à la droite. Connaître cette flèche et un point de la droite suffit pour fixer la droite.
- Dans l'équation $ax + by + c = 0$, les deux premiers nombres sont justement les coordonnées de cette flèche. Il ne reste qu'à trouver $c$ en utilisant le point connu.
- Un **cercle**, ce sont tous les points à la même distance $r$ du centre. L'équation $(x - a)^2 + (y - b)^2 = r^2$ n'est rien d'autre que Pythagore : distance au carré égale rayon au carré.
## Un exemple détaillé
Le point $P(5\,; 2)$ est-il sur le cercle de centre $\Omega(2\,; -2)$ et de rayon 5 ?
1. Équation du cercle : $(x - 2)^2 + (y + 2)^2 = 25$.
2. On remplace par les coordonnées de $P$ : $(5 - 2)^2 + (2 + 2)^2 = 9 + 16 = 25$.
3. L'égalité est vraie, donc $P$ est sur le cercle.
## Les pièges à éviter
- Les signes dans l'équation du cercle : un centre d'abscisse $-2$ donne $(x + 2)^2$.
- Oublier de mettre le rayon au carré.
- Confondre vecteur normal (perpendiculaire à la droite) et vecteur directeur (le long de la droite).
- Pour trouver $c$, oublier de remplacer $x$ et $y$ par les coordonnées du point connu.
## À retenir
- Droite : $a$ et $b$ viennent du vecteur normal, $c$ vient du point.
- Cercle : centre et rayon se lisent sur l'équation.
`
},
{
id: 'probas-conditionnelles', titre: 'Probabilités conditionnelles',
cours: T`
Une probabilité conditionnelle est une probabilité calculée en sachant qu'un événement est déjà réalisé. Elle change la population sur laquelle on raisonne.
## Définition
Si $P(A) \neq 0$, la probabilité de $B$ sachant $A$ est :
$$P_A(B) = \dfrac{P(A \cap B)}{P(A)}$$
On en déduit la formule du produit :
$$P(A \cap B) = P(A) \times P_A(B)$$
## Arbre pondéré
- La somme des probabilités des branches issues d'un même nœud vaut 1.
- La probabilité d'un chemin est le **produit** des probabilités de ses branches.
- La probabilité d'un événement est la **somme** des probabilités des chemins qui y mènent.
Les branches du deuxième niveau portent des probabilités conditionnelles.
## Formule des probabilités totales
Si $A$ et $\overline{A}$ partagent l'univers :
$$P(B) = P(A \cap B) + P(\overline{A} \cap B) = P(A) \times P_A(B) + P(\overline{A}) \times P_{\overline{A}}(B)$$
## Tableau croisé d'effectifs
Quand on tire au hasard une personne dans une population, $P_A(B)$ se lit en ne regardant que la ligne (ou la colonne) de $A$ : on divise l'effectif de $A \cap B$ par l'effectif de $A$.
## Ne pas confondre $P_A(B)$ et $P_B(A)$
La probabilité d'avoir un test positif quand on est malade n'est pas la probabilité d'être malade quand le test est positif. On passe de l'une à l'autre par :
$$P_B(A) = \dfrac{P(A \cap B)}{P(B)}$$
## Indépendance
$A$ et $B$ sont indépendants lorsque :
$$P(A \cap B) = P(A) \times P(B)$$
Cela revient à $P_A(B) = P(B)$ : savoir que $A$ est réalisé ne change pas la probabilité de $B$.
## Épreuves répétées
Quand on répète la même épreuve à deux issues (succès de probabilité $p$, échec de probabilité $1 - p$) de façon indépendante, on représente la situation par un arbre et on multiplie le long des chemins. En première, on se limite à 4 répétitions au plus.
## L'essentiel à retenir
- « Sachant $A$ » : on se place uniquement dans $A$.
- Sur un arbre : on multiplie le long d'un chemin, on additionne les chemins.
- $P_A(B)$ et $P_B(A)$ sont deux nombres différents.
`,
simple: T`
## L'idée en une phrase
« Sachant que », ça veut dire qu'on ne regarde plus tout le monde, seulement un groupe.
## Ce qu'il faut comprendre
- Dans une classe, la probabilité de tirer une fille qui fait du sport n'est pas la même que la probabilité qu'une fille fasse du sport. Dans le second cas, on a déjà choisi de ne regarder **que les filles** : c'est une probabilité conditionnelle.
- Un arbre raconte l'histoire dans l'ordre. Premier embranchement : dans quel groupe on est. Deuxième embranchement : ce qui se passe une fois dans ce groupe.
- Pour suivre un chemin jusqu'au bout, on multiplie les probabilités rencontrées. Si plusieurs chemins mènent au même résultat, on additionne.
## Un exemple détaillé
Dans un lycée, 40 % des élèves sont en première. Parmi eux, 30 % font de l'espagnol. Parmi les autres, 50 % font de l'espagnol. Quelle est la probabilité qu'un élève tiré au hasard fasse de l'espagnol ?
1. On note $A$ : « être en première » et $E$ : « faire de l'espagnol ». $P(A) = 0{,}4$, donc $P(\overline{A}) = 0{,}6$.
2. $P_A(E) = 0{,}3$ et $P_{\overline{A}}(E) = 0{,}5$.
3. Chemin « première et espagnol » : $0{,}4 \times 0{,}3 = 0{,}12$.
4. Chemin « pas en première et espagnol » : $0{,}6 \times 0{,}5 = 0{,}30$.
5. Total : $P(E) = 0{,}12 + 0{,}30 = 0{,}42$.
## Les pièges à éviter
- Confondre $P(A \cap B)$ (les deux à la fois, dans toute la population) et $P_A(B)$ (dans le groupe $A$ seulement).
- Inverser $P_A(B)$ et $P_B(A)$ : relis la phrase pour voir quel groupe est déjà connu.
- Oublier une branche : les branches partant d'un même point doivent faire 1 au total.
- Additionner le long d'un chemin au lieu de multiplier.
## À retenir
- Le mot « parmi » ou « sachant » signale une probabilité conditionnelle.
- Fais toujours l'arbre avant de calculer.
`
},
{
id: 'variables-aleatoires', titre: 'Variables aléatoires',
cours: T`
Une variable aléatoire associe un nombre à chaque résultat d'une expérience aléatoire, par exemple le gain à un jeu. On étudie quelles valeurs elle prend, avec quelles probabilités, et ce qu'on obtient en moyenne.
## Définition
Une variable aléatoire $X$ est une fonction qui, à chaque issue de l'univers, associe un nombre réel.
- $\{X = a\}$ est l'événement « $X$ prend la valeur $a$ ».
- $P(X = a)$ est sa probabilité, $P(X \leq a)$ la probabilité que $X$ soit inférieure ou égale à $a$.
## Loi de probabilité
Donner la loi de $X$, c'est donner chaque valeur possible $x_i$ avec sa probabilité $p_i = P(X = x_i)$. On la présente dans un tableau. La somme des probabilités vaut 1.
## Espérance
$$E(X) = p_1 x_1 + p_2 x_2 + \dots + p_n x_n$$
C'est la valeur moyenne de $X$ quand on répète l'expérience un très grand nombre de fois.
Pour un jeu où $X$ est le gain : le jeu est **équitable** si $E(X) = 0$, favorable au joueur si $E(X) > 0$, défavorable si $E(X) < 0$.
## Variance et écart type
$$V(X) = p_1 (x_1 - E(X))^2 + \dots + p_n (x_n - E(X))^2$$
$$\sigma(X) = \sqrt{V(X)}$$
Ils mesurent la dispersion des valeurs autour de l'espérance : plus l'écart type est grand, plus les valeurs sont étalées.
## Formule de König-Huygens
Elle donne la variance plus rapidement :
$$V(X) = E(X^2) - \big(E(X)\big)^2$$
où $E(X^2) = p_1 x_1^2 + \dots + p_n x_n^2$.
## Linéarité de l'espérance
Pour tous réels $a$ et $b$ :
$$E(aX + b) = a\,E(X) + b$$
Et pour deux variables aléatoires, $E(X + Y) = E(X) + E(Y)$.
## L'essentiel à retenir
- Loi de probabilité : les valeurs et leurs probabilités, dont la somme fait 1.
- Espérance : la moyenne à long terme, chaque valeur étant pondérée par sa probabilité.
- Écart type : la dispersion autour de cette moyenne.
`,
simple: T`
## L'idée en une phrase
Une variable aléatoire, c'est un nombre qui dépend du hasard, comme l'argent gagné ou perdu à un jeu.
## Ce qu'il faut comprendre
- On lance un dé, on gagne ou on perd de l'argent selon le résultat. Le gain est un nombre que l'on ne connaît pas à l'avance : c'est une variable aléatoire, notée $X$.
- La **loi** de $X$ est simplement la liste des gains possibles avec leurs chances.
- L'**espérance** répond à la question : « si je jouais des milliers de fois, combien gagnerais-je en moyenne par partie ? ». On la calcule en multipliant chaque gain par sa probabilité, puis en additionnant.
- L'**écart type** dit si les résultats sont plutôt regroupés ou très différents d'une partie à l'autre.
## Un exemple détaillé
On mise 2 €. On lance un dé : si on obtient 6 on reçoit 8 €, sinon rien. $X$ est le gain (ce qu'on reçoit moins la mise).
1. Si le 6 sort : $X = 8 - 2 = 6$, avec la probabilité $\dfrac{1}{6}$.
2. Sinon : $X = -2$, avec la probabilité $\dfrac{5}{6}$.
3. Espérance : $E(X) = \dfrac{1}{6} \times 6 + \dfrac{5}{6} \times (-2) = 1 - \dfrac{10}{6} = -\dfrac{2}{3}$.
4. L'espérance est négative : en moyenne on perd environ 0,67 € par partie. Le jeu est défavorable au joueur.
## Les pièges à éviter
- Oublier de retirer la mise : le gain est ce qu'on reçoit **moins** ce qu'on a payé.
- Vérifier que la somme des probabilités fait bien 1.
- Dans la variance, oublier le carré, ou oublier de retirer $\big(E(X)\big)^2$ avec König-Huygens.
- Croire que l'espérance est une valeur qu'on obtient vraiment : c'est une moyenne.
## À retenir
- $E(X)$ : somme des « valeur $\times$ probabilité ».
- Jeu équitable : espérance nulle.
`
}
];
})();
