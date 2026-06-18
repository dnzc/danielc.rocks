+++
title = "Linear Analysis"
description = "Normed and Banach spaces, Baire category theorem & applications, spaces of continuous functions, Hilbert spaces, spectral theory."

[extra]
part = "Part II"
term = "Mich"
year = "2025"
lecturer = "Dr András Zsák"
color = "#e4564922"
image = "notes/linear-analysis/thumbnail.svg"
unfinished = true
+++

## Normed Spaces

### Definitions and examples

{% definition() %}
Let $X$ be a (real or complex) vector space. A **norm** on $X$ is a function $\lVert \cdot \rVert : X \to \mathbb{R}$ such that

1. $\lVert x \rVert \geq 0 \quad \forall x \in X$, with equality iff $x = 0$ &nbsp;(positivity);
2. $\lVert \lambda x \rVert = |\lambda|\ \lVert x \rVert \quad \forall x \in X$ and scalars $\lambda$ &nbsp;(homogeneity);
3. $\lVert x + y \rVert \leq \lVert x \rVert + \lVert y \rVert \quad \forall x, y \in X$ &nbsp;(triangle inequality).

$\lVert x \rVert$ is called the **norm** or **length** of $x$.

A **normed space** is a pair $(X, \lVert \cdot \rVert)$ where $X$ is a vector space and $\lVert \cdot \rVert$ is a norm on $X$.
{% end %}

#### Examples

{% examples() %}

1. $\ell_2^n = (\mathbb{R}^n, \lVert \cdot \rVert_2)$ (or $(\mathbb{C}^n, \lVert \cdot \rVert_2)$), where
    $$\lVert x \rVert_2 = \left(\sum_{i=1}^n |x_i|^2 \right)^{1/2}$$
    for $x = (x_1, \dots, x_n) \in \mathbb{R}^n$ (the **$\ell_2$-norm** or **Euclidean norm**).

    Check the three properties: (i), (ii) are easy; (iii) follows from Cauchy–Schwarz.

2. $\ell_1^n = (\mathbb{R}^n, \lVert \cdot \rVert_1)$, where $\lVert x \rVert_1 = \sum_{i=1}^n |x_i|$ (the **$\ell_1$-norm**).

    (i), (ii) easy; (iii): $|x_i + y_i| \leq |x_i| + |y_i|$, sum over $i$.

3. $\ell_{\infty}^n = (\mathbb{R}^n, \lVert \cdot \rVert_{\infty})$, where $\lVert x \rVert_{\infty} = \max_{1 \leq i \leq n} |x_i|$ (the **$\ell_{\infty}$-norm** or **sup-norm**).

    (i), (ii), (iii) easy.

{% end %}

Given a normed space $X$, its norm $\lVert \cdot \rVert$ induces a metric $d$ on $X$:
$$d(x,y) = \lVert x-y \rVert$$

{% tangent(summary="Exercise: check this is a metric.") %}

$d(x,y) \geq 0, =0 \iff x-y = 0 \iff x=y \quad \checkmark$

$d(y,x) = \lVert y-x \rVert = \lVert (-1)(x-y) \rVert = \lVert x-y \rVert = d(x,y) \quad \checkmark$

$d(x,z) = \lVert x-z \rVert = \lVert (x-y)-(y-z) \rVert \leq \lVert x-y \rVert + \lVert y-z \rVert = d(x,y) + d(y,z) \quad\checkmark$

{% end %}

Then $d$ induces a topology on $X$ called the **norm topology** of $X$. We can now talk about continuity e.g. the algebraic operations are (sequentially) continuous:

- If $x_n \to x, y_n \to y$ in $X$ then $x_n + y_n \to x+y$
- If $x_n \to x, \lambda_n \to \lambda$ in scalar field, then $\lambda_n x_n \to \lambda x$.

Also the norm $\lVert \cdot \rVert : X \to \mathbb{R}$ is continuous since $\Big| \lVert x \rVert - \lVert y \rVert \Big| \leq \lVert x-y \rVert$ by reverse triangle inequality, so $\lVert \cdot \rVert$ is even 1-Lipschitz.

{% definition() %}
A **Banach space** is a complete normed space, i.e. a normed space that is complete in its norm topology.
{% end %}

For example, $\ell_2^n, \ell_1^n, \ell_\infty^n$ are complete, because we can look coordinate-wise: $x^{(k)} \to x$ in one of these spaces $\iff x_i^{(k)} \to x_i \\;\forall\\; 1 \leq i \leq n$, and $(x^{(k)})\_{k=1}^\infty$ is Cauchy iff $(x_i^{(k)})\_{k=1}^\infty$ is Cauchy for each $i = 1, \dots, n$.

In a normed space $X$, a useful object is the **unit ball** $B_X = \\{ x \in X \mid \lVert x \rVert \leq 1\\}$.

<div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 3rem; margin: 1.5rem 0;">
  <img src="unitball_l2.svg" alt="l_2 unit ball" style="flex: 1 1 10rem; max-width: 8rem; height: auto;">
  <img src="unitball_l1.svg" alt="l_1 unit ball" style="flex: 1 1 10rem; max-width: 8rem; height: auto;">
  <img src="unitball_linf.svg" alt="l_inf unit ball" style="flex: 1 1 10rem; max-width: 8rem; height: auto;">
</div>

{% tangent(summary="Sidenote: did I accidentally create an optical illusion?") %}
It might just be me, but the axes seem all wonky...
{% end %}

#### Remarks

- $B_X$ determines the norm: $\lVert x \rVert = \inf\\{ t \geq 0 \mid x \in t B_X\\}$.
- $B_X$ is symmetric, convex, and closed: $x \in B_X \iff -x \in B_X$, and if $x,y \in B_X, t \in [0,1]$, then $(1-t)x + ty \in B_X$, since $\lVert (1-t)x + ty\rVert \leq (1-t)\lVert x \rVert + t \lVert y \rVert \leq 1$.
- If $B \subset \mathbb{R}^n$ is a closed, convex, symmetric, bounded neighbourhood of 0, then $B$ is the unit ball of $(\mathbb{R}^n, \lVert \cdot \rVert)$ for some norm $\lVert \cdot \rVert$.

#### More Examples

{% examples() %}
4. $\ell_p^n = (\mathbb{R}^n, \lVert \cdot \rVert_p)$, where $1 \leq p < \infty$, $\lVert x \rVert_p = \left(\sum_{i=1}^n |x_i|^p\right)^{1/p}$ (the **$\ell_p$-norm**).

    (i), (ii) easy, (iii) not obvious (done later; see {{ref(label="minkowski")}}).

5. Let $S$ denote the set of all scalar sequences. This is a vector space in the coordinate-wise operations: $(x_n) + (y_n) = (x_n + y_n), \lambda \cdot (x_n) = (\lambda x_n)$.

    $\ell_1 = \Big\\{(x_n) \in S \\;\Big|\\; \sum_{n=1}^{\infty} |x_n| < \infty\Big\\},\\; \lVert (x_n) \rVert_1 = \sum_{n=1}^\infty |x_n|$ (the **$\ell_1$-norm**).

    (i), (ii) easy. (iii): given $x = (x_n), y = (y_n) \in \ell_1$,

    - $|x_n + y_n| \leq |x_n| + |y_n| \\;\forall\\; n \in \mathbb{N}$.
    - Sum over $n \in \mathbb{N}$ to get that $x + y \in \mathbb{\ell_1}$ and $\lVert x + y \rVert_1 \leq \lVert x \rVert_1 + \lVert y \rVert_1$.

    So $\ell_1$ is a subspace of $S$ and $\lVert \cdot \rVert_1$ is a norm on $\ell_1$.

6. $\ell_2 = \Big\\{(x_n) \in S \\;\Big|\\; \sum_{n=1}^{\infty} |x_n|^2 < \infty\Big\\},\\; \lVert (x_n) \rVert_2 = \left(\sum_{n=1}^\infty |x_n|^2 \right)^{1/2}$ (the **$\ell_2$-norm**).

    (i), (ii) easy. (iii): given $x = (x_n), y = (y_n) \in \ell_2$,

    - $\left(\sum_{k=1}^n |x_k+y_k|^2\right)^{1/2} \leq \left(\sum_{k=1}^n |x_k|^2\right)^{1/2} + \left(\sum_{k=1}^n |y_k|^2\right)^{1/2}$ by triangle inequality in $\ell_2^n$.
    - Let $n \to \infty$: get that $x + y \in \mathbb{\ell_2}$ and $\lVert x + y \rVert_2 \leq \lVert x \rVert_2 + \lVert y \rVert_2$.

    So $\ell_2$ is a subspace of $S$ and $\lVert \cdot \rVert_2$ is a norm on $\ell_2$.

    More generally, for $1 \leq p < \infty$, $\ell_p = \Big\\{(x_n) \in S \mid \sum_{n=1}^\infty |x_n|^p < \infty \Big\\}$ is a subspace of $S$ and $\lVert (x_n) \rVert_p = \left(\sum_{n=1}^\infty |x_n|^p \right)^{1/p}$ is a norm (the **$\ell_p$-norm**) on $\ell_p$ (once we have the triangle inequality in $\ell_p^n$, which we will do soon).

7. $\ell_\infty = \Big\\{(x_n) \in S \\;\Big|\\; \exists M \geq 0 \quad \forall n \quad |x_n| \leq M \Big\\},\\; \lVert (x_n) \rVert_\infty = \sup_{n \in \mathbb{N}} |x_n|$ (the **$\ell_\infty$-norm** or **sup-norm**).

    (i), (ii) easy. (iii): given $x = (x_n), y = (y_n) \in \ell_\infty$,

    - $|x_n + y_n| \leq |x_n| + |y_n| \leq \lVert x \rVert_\infty + \lVert y \rVert_\infty \\;\forall\\; n \in \mathbb{N}$.
    - So $x+y \in \ell_\infty$ and $\lVert x+y \rVert_\infty \leq \lVert x \rVert_\infty + \lVert y \rVert_\infty$.

8. $c_0 = \Big\\{(x_n) \in S \\;\Big|\\; x_n \to 0 \text{ as } n \to \infty \Big\\}$

    $c = \Big\\{(x_n) \in S \\;\Big|\\; \lim_{n \to \infty} x_n \text{ exists} \Big\\}$

    These are subspaces of $\ell_\infty$ and hence normed spaces in $\lVert \cdot \rVert_\infty$.

{% end %}

Examples 5-8 are called **sequence spaces**. They are "infinite-dimensional analogues" of examples 1-4.

### Inequalities of Minkowski and Hölder

{% tangent(summary="tl;dr") %}
We aim at proving these two ubiquitous inequalities. Minkowski is just the triangle inequality for $\ell_p^n$, and Hölder is a generalisation of Cauchy-Schwarz.
{% end %}

Recall that a function $f : (0, \infty) \to \mathbb{R}$ is **convex** if
$$f((1-t)x+ty) \leq (1-t)f(x) + tf(y) \\;\forall\\; x,y \in (0,\infty) \\;\forall\\; t \in [0,1]$$
and **concave** if $\geq$.

{% lemma(label="x^p-is-convex") %}
Let $1 \leq p < \infty$. Then $x \mapsto x^p: (0,\infty) \to \mathbb{R}$ is convex.
{% end %}

{% proof() %}

We need to show $((1-t)x + ty)^p \leq (1-t)x^p + ty^p \\;\forall\\; x,y \in (0,\infty) \\;\forall\\; t \in [0,1]$.

Fix $y > 0, t \in [0,1]$. Define $g(x)$ to be the difference:

$$g(x) = \left((1-t)x + ty\right)^p - \left((1-t)x^p + ty^p\right),\quad x > 0.$$

Want $g(x) \leq 0 \\;\forall\\; x > 0$, then done.

$$g'(x) = p(1-t)\left((1-t)x + ty\right)^{p-1} - p(1-t)x^{p-1}.$$

If $0 < x < y$ then $g'(x) \geq 0$. If $y < x$ then $g'(x) \leq 0$. In either case, by MVT have $g(x) \leq g(y) = 0 \\;\forall\\; x \in (0, \infty)$.
{% end %}

{% theorem(name="Minkowski") %}
Let $1 \leq p < \infty$, $n \in \mathbb{N}$. For $x,y \in \mathbb{R}^n$ (or $\mathbb{C}^n$),
$$\lVert x + y \rVert_p \leq \lVert x \rVert_p + \lVert y \rVert_p$$
{% end %}

(This shows that $\ell_p^n = (\mathbb{R}^n, \lVert\cdot\rVert_p)$ and $(\ell_p, \lVert\cdot\rVert_p)$ are normed spaces.)

{% proof(of="Minkowski") %}
Let $B = \\{x \in \mathbb{R}^n \mid \lVert x \rVert_p \leq 1\\}$. We will show $B$ is a convex set later (necessary). Then we complete the proof as follows:

Let $x,y \in \mathbb{R}^n$. *Need* $\lVert x+y \rVert_p \leq \lVert x \rVert_p + \lVert y \rVert_p$. WLOG $x,y,x+y$ nonzero.

$$\begin{aligned}
\frac{x+y}{\lVert x \rVert_p + \lVert y \rVert_p} &= \frac{\lVert x \rVert_p}{\lVert x \rVert_p + \lVert y \rVert_p} \cdot \frac{x}{\lVert x \rVert_p} + \frac{\lVert y \rVert_p}{\lVert x \rVert_p + \lVert y \rVert_p} \cdot \frac{y}{\lVert y \rVert_p}\\\\
& \in B \text{ since convex combination of elts of } B.
\end{aligned}$$ 

Hence $\lVert \frac{x+y}{\lVert x \rVert_p + \lVert y \rVert_p} \rVert_p \leq 1$, so $\lVert x+y \rVert_p \leq \lVert x \rVert_p + \lVert y \rVert_p \\; \checkmark$

- To show $B$ is convex: let $x,y \in B, t \in [0,1]$. *Need* $(1-t)x + ty \in B$.

    For $1 \leq k \leq n$,
    $$|(1-t)x_k + ty_k|^p \leq \left((1-t)|x_k| + t |y_k| \right)^p \leq (1-t) |x_k|^p + t|y_k|^p$$
    where the second inequality is by {{ref(label="x^p-is-convex")}} if $x_k \neq 0, y_k \neq 0$, otherwise trivial.

    Sum over $k$:

    $$\lVert (1-t)x + ty \rVert_p^p \leq (1-t) \underbrace{\lVert x \rVert_p^p}\_{\leq 1} + t \underbrace{\lVert y \rVert_p^p}\_{\leq 1} \leq 1 \\; \checkmark$$ 

    So $(1-t)x + ty \in B$.
{% end %}

{% exercise() %}
Show that $\ell_p, 1 \leq p \leq \infty$, is complete. (Slick proof later)
{% end %}

Now onto Hölder.

Let $1 < p < \infty$. The **conjugate index** of $p$ is the unique $q$, $1 < q < \infty$, such that $\frac{1}{p} + \frac{1}{q} = 1$. For example if $p=2$ then $q=2$.

{% lemma(name="Young's inequality") %}
Let $ 1 < p,q < \infty$ with $\frac{1}{p} + \frac{1}{q} = 1$. Then $\forall a,b \geq 0,$
$$ab \leq \frac{a^p}{p} + \frac{b^q}{q}$$
{% end %}

{% proof() %}
WLOG $a>0, b>0$. Take log of both sides, and use concavity of log.
{% end %}

{% theorem(name="Hölder") %}
Let $ 1 < p,q < \infty$ with $\frac{1}{p} + \frac{1}{q} = 1$. Then for $x \in \ell_p, y \in \ell_q$, we have $x \cdot y = (x\_n y\_n) \in \ell\_1$ and
$$\lVert x \cdot y \rVert\_1 \leq \lVert x \rVert\_p \cdot \lVert y \rVert\_q$$
{% end %}

#### Remarks

- $p=1, q=\infty$ also works:
    - Let $x = (x_n) \in \ell_1, y = (y_n) \in \ell_\infty$. Then $\forall n$, $|x_n y_n| = |x_n| \cdot |y_n| \leq |x_n| \cdot \lVert y \rVert_\infty$.
    - So by comparison test, $x \cdot y = (x_n y_n) \in \ell_1$ and $\lVert x \cdot y \rVert_1 \leq \lVert x \rVert_1 \cdot \lVert y \rVert_\infty$.
- $p=q=2$ is Cauchy-Schwarz.

{% proof(of="Hölder") %}
WLOG $x \neq 0, y \neq 0$. By homogeneity, WLOG $\lVert x \rVert_p = \lVert y \rVert_q = 1$.

By Young's inequality, $|x_n y_n| \leq \frac{|x_n|^p}{p} + \frac{|y_n|^q}{q} \\;\forall n$. Sum over $n$:
$$\begin{aligned}
\sum_{n=1}^\infty |x_n y_n| &\leq \frac{\lVert x \rVert_p^p}{p} + \frac{\lVert y \rVert_q^q}{q}\\\\
&= \frac{1}{p} + \frac{1}{q} = 1 = \lVert x \rVert_p \cdot \lVert y \rVert_q.
\end{aligned}$$
{% end %}

{% exercise() %}
Deduce Minkowski from Hölder.
{% end %}

### More examples of normed spaces

{% examples() %}
9. $C[0,1] = \big\\{f : [0,1] \to \mathbb{R} \mid f \text{ is continuous}\big\\}$, $\lVert f \rVert_\infty = \sup_{x \in [0,1]} |f(x)|$ (**sup-norm** or **uniform norm**)

    This is a Banach space (recall uniform limit of cts fns is cts).

10. More generally, given a compact Hausdorff space $K$,
$$C(K) = \big\\{f:K\to\mathbb{R} \mid f \text{ cts}\big\\}$$ 
is a Banach space in the sup-norm $\lVert f \rVert_\infty = \sup_{x \in K} |f(x)|$.
(We will look at compact Hausdorff spaces in depth later.)

{% end %}
