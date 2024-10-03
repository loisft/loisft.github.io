let points = [];
let numPointsSlider; // Curseur pour le nombre de points
let BSlider; // Curseur pour la taille B
let B = 10; // Bornes pour x, y, z, w
let pointSize = 2; // Taille des points dessinés

let Bmin = 5;
let Bmax = 12;

let Nmin = Bmin*Bmin*Bmin*Bmin;
let Nmax = Bmax*Bmax*Bmax*Bmax;

width = 400;
height = 400;

function setup() {
  createCanvas(width, height, WEBGL); // Créer un canevas en 3D
  
 // Créer le curseur pour B
 BSlider = createSlider(Bmin, Bmax, (Bmin + Bmax) / 2); // Min: 1, Max: 50, Valeur initiale: 10
 BSlider.position(20, 20);
 BSlider.input(updatePoints); // Mettre à jour les points quand B change
 
 // Créer le curseur pour le nombre de points
 numPointsSlider = createSlider(Nmin, Nmax, (Nmin+Nmax) /2); // Min: 1, Max: 20, Valeur initiale: 10
 numPointsSlider.position(20, 50);
 numPointsSlider.input(updatePoints); // Mettre à jour les points quand le nombre change
 
  // Générer des points initialement
  updatePoints();
}

function draw() {
  background(255);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  
  // Dessiner les points
  for (let p of points) {
    push();
    fill(0, 0, 0);
    noStroke();
    translate(p.x * width/2 , p.y * height/2, p.z * width/2); // Ajuster l'échelle pour la visualisation
    sphere(pointSize); // Dessiner une sphère pour représenter le point
    pop();
  }

}

// Fonction pour mettre à jour les points
function updatePoints() {
  let numPoints = numPointsSlider.value();
  points = []; // Réinitialiser les points
  for (let i = 0; i < numPoints; i++) {
    let [x, y, z, w] = generateCoprimePoint(BSlider.value());
    let H=max(abs(x),abs(y),abs(z),abs(w));
    points.push(createVector(x / H, y / H, z / H)); // Normaliser pour obtenir des points dans l'espace projectif
  }
}

// Fonction pour générer des entiers relatifs mutuellement premiers
function generateCoprimePoint(B) {
  let x, y, z, w;

  do {
    x = floor(random(-B, B + 1));
    y = floor(random(-B, B + 1));
    z = floor(random(-B, B + 1));
    w = floor(random(-B, B + 1)); 
  } while (!areCoprime(x, y, z, w) || (x === 0 && y === 0 && z === 0)); // Assurez-vous que x, y, z ne sont pas tous les trois zéro

  return [x, y, z, w];
}

// Fonction pour vérifier si quatre nombres sont mutuellement premiers
function areCoprime(a, b, c, d) {
  return gcd(gcd(gcd(abs(a), abs(b)), abs(c)), abs(d)) === 1;
}

// Fonction pour calculer le PGCD
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
