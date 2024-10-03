---
layout: coding
permalink: /creativecoding/
title: creative coding
description: 
nav: true
include_scripts: [
    "https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.js",
    "/assets/js/pointsP2random.js",
    #"/assets/js/pointsP3.js"
    ]
---

Here is a representation of some rational points on the projective plane.
More precisely, the first cursor provides a value $B$ for the bound on the height 

$$H ( [ x : y : z  ]) = \mathrm{max} ( | x | , | y | , | z |)$$

where $$(x,y,z)\in \mathbf{Z}^3_\mathrm{prim}$$
and we randomly and uniformly pick a certain number of points of height at most $B$. 
You can make this number of points vary with the third cursor. 

The second cursor controls a certain value $B_\mathrm{small} \leqslant B$ and the script plots in red the points of height at most $B_\mathrm{small}$.

This script is inspired by [E.Peyre's beautiful illustrations](https://www-fourier.ujf-grenoble.fr/~peyre/images/index.php). 

You will find [here](/assets/js/pointsP3.html) a similar figure for the 3-dimensional projective space. 