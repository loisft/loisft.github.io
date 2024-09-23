---
layout: page
permalink: /research/
title: research
description: a list of research works and projects
years: [2022,2023]
nav: true
img: /assets/img/research.jpg
---

<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

---

## PhD thesis 

My PhD project,
conducted under the supervision of [Emmanuel Peyre](https://www-fourier.univ-grenoble-alpes.fr/~peyre) at 
[Institut Fourier](https://www-fourier.univ-grenoble-alpes.fr),
[Université Grenoble Alpes](https://www.univ-grenoble-alpes.fr/), from 2020 to 2023,
concerned the study of stabilisation phenomena occuring in the moduli space of rational curves on a <i>nice variety</i> (typically, a Fano variety), 
or more generally the moduli space of sections of a <i>nice family</i> above a smooth projective irreducible curve.

In my PhD thesis, I formulate a geometric/motivic analogue of the [Batyrev-Manin-Peyre conjectures](https://en.wikipedia.org/wiki/Manin_conjecture)
unsing 
the tools of motivic integration.
One asks about the asymptotic behaviour, in a well-chosen ring of varities, of the class of the moduli space of curves of arbitrary large degree. 
These predictions 
have to be understood as questions or principles
concerning the distribution of curves on Fano-like varieties. 

Then I verify the validity of these predictions for certain classes of varieties such as equivariant compactifications (vector spaces, split torus) or twisted products obtained from them. 

This type of questions is still at the center of my research project. 

Keywords: moduli space, rational curves, Fano varieties, motivic Euler product. 

<i>
This project was supported by a doctoral grant awarded by [l'École polytechnique](https://www.polytechnique.edu)
to its former students. / 
Ce projet doctoral était financé par une allocation ministérielle <a href="https://www.polytechnique.edu">AMX</a>.
</i> 

## additional material
my [master 2 thesis](/assets/pdf/FAISANT_MemoireRendu150620.pdf) (in French).
