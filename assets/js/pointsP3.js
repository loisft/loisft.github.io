let points = [];
let numPointsSlider; // Curseur pour le nombre de points
let BSlider; // Curseur pour la taille B
//let Bmin = 4;
//let Bmax = 4;

let pointSize = 2; // Taille des points dessinés
width = 600;
height = 600;


function setup() {
  let targetDiv = select('#script-target-2'); // Sélectionne la cible

  let canvas = createCanvas(width, height,WEBGL); // Créer un canevas en 3D
  
  canvas.parent(targetDiv); // Place le canvas dans le conteneur cible

  
 // Créer le curseur pour B
 //BSlider = createSlider(Bmin, Bmax, (Bmin + Bmax) / 2); // Min: 1, Max: 50, Valeur initiale: 10
 //BSlider.position(20, 20);
 //BSlider.input(updatePoints); // Mettre à jour les points quand B change
  
// Générer des points initialement
updatePoints();
}

function draw() {
  clear();
  orbitControl();
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);

  for (let p of points) {
    push();
    fill(255, 0, 0);
    noStroke();
    translate(p[0].x * width/2, p[0].y * height/2, p[0].z * height/2); // Ajuster l'échelle pour la visualisation
    sphere(pointSize/sqrt(p[1])); // Dessiner une sphère pour représenter le point
    pop();
  }
}

function updatePoints(B=5) {
  //let B = BSlider.value();
  points = []; // Réinitialiser les points
  for (let x = -B; x <= B; x++) {
    for (let y = -B; y <= B; y++) {
      for (let z = -B; z <= B; z++) {
        for (let w = -B; w <= B; w++) { 
          if (areCoprime(x, y, z, w) && !(x === 0 && y === 0 && z === 0)) {
            H=max(abs(x),abs(y),abs(z),abs(w));
            points.push([createVector(x / H, y / H, z / H),H]); 
          }
        }
      }
    }
  }
}

function areCoprime(a, b, c, d) {
  return gcd(gcd(gcd(abs(a), abs(b)), abs(c)), abs(d)) === 1;
}

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}


document.addEventListener("DOMContentLoaded", function() {
  // Cibler le div avec l'ID 'script-target'
  var targetDiv = document.getElementById('script-target-2');  

  if (targetDiv) {
    // Ajoute du contenu ou manipule le contenu ici
    targetDiv.innerHTML += '<p>Contenu ajouté par le script JS.</p>';
  }
});

