let points = [];
let numPointsSlider; // Curseur pour le nombre de points
let BSlider; // Curseur pour la taille B
let B = 50; // Bornes pour x, y, z, w
let currentIndex = 0; // Index pour le point actuel

function setup() {
  createCanvas(600, 600, WEBGL); // Créer un canevas en 3D
  
  // Créer le curseur pour B
  BSlider = createSlider(1, 50, 10); // Min: 1, Max: 50, Valeur initiale: 10
  BSlider.position(10, 10);
  BSlider.input(updatePoints); // Mettre à jour les points quand B change
  
  // Créer le curseur pour le nombre de points
  numPointsSlider = createSlider(1, 20, 10); // Min: 1, Max: 20, Valeur initiale: 10
  numPointsSlider.position(10, 40);
  numPointsSlider.input(updatePoints); // Mettre à jour les points quand le nombre change
  
  // Générer des points initialement
  updatePoints();
}

function draw() {
  background(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
  // Dessiner les points
  for (let p of points) {
    push();
    fill(255, 0, 0);
    noStroke();
    translate(p.x * 50, p.y * 50, p.z * 50); // Ajuster l'échelle pour la visualisation
    sphere(5); // Dessiner une sphère pour représenter le point
    pop();
  }

  // Dessiner les axes
  stroke(0);
  line(0, 0, 0, 100, 0, 0); // Axe X
  line(0, 0, 0, 0, 100, 0); // Axe Y
  line(0, 0, 0, 0, 0, 100); // Axe Z
}

// Fonction pour mettre à jour les points
function updatePoints() {
  let numPoints = numPointsSlider.value();
  points = []; // Réinitialiser les points
  currentIndex = 0; // Réinitialiser l'index
  
  for (let x = -B; x <= B; x++) {
    for (let y = -B; y <= B; y++) {
      for (let z = -B; z <= B; z++) {
        for (let w = 1; w <= B; w++) { // w doit être positif
          if (areCoprime(x, y, z, w) && !(x === 0 && y === 0 && z === 0)) {
            points.push(createVector(x / w, y / w, z / w)); // Normaliser
          }
        }
      }
    }
  }

  // Limiter le nombre de points si nécessaire
  points = points.slice(0, numPoints);
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
