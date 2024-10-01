let points = [];
let numPointsSlider; // Slider for the number of points
let BSlider; // Slider for the size B

let pointSize = 2; // Size of the drawn points
let BMin = 5;
let BMax = 50;

let Nmin = BMin * BMin * BMin;
let Nmax = BMax * BMax * BMax;

let width = 500;
let height = 500;

function setup() {
  let targetDiv = select('#script-target'); // Sélectionne le div cible
  let canvas = createCanvas(width, height);
  canvas.background('background-color');
  canvas.parent(targetDiv); // Place le canvas dans le conteneur cible

  //createCanvas(width, height);
  
  // Create a container for the sliders
  let container = createDiv();
  container.parent(targetDiv);

  container.position(1.8 * width, height); // Position the container 
  container.style('background-color'); // Background color
  container.style('padding', '10px'); // Spacing around the content
  container.style('border-radius', '5px'); // Round the corners
  container.style('text-align', 'center'); 

  // Create the slider for Bmax
  let bmaxLabel = createElement('label', 'Bound on the height');
  bmaxLabel.parent(container);
  createElement('br').parent(container);
  BmaxSlider = createSlider(BMin, BMax, (BMin + BMax) / 2); 
  BmaxSlider.parent(container);
  BmaxSlider.input(updatePoints); // Update points when B changes
  createElement('br').parent(container);
  let Bmax = BmaxSlider.value;
  //createElement(Bmax).parent(container);

  createElement('br').parent(container);

  // Create the slider for B
  let bLabel = createElement('label', 'Points of small height');
  bLabel.parent(container);
  createElement('br').parent(container);
  BSlider = createSlider(BMin, BMax/2, (BMin + BMax) / 4); 
  BSlider.parent(container);
  BSlider.input(draw); // Redraw points when B changes
  createElement('br').parent(container);

  createElement('br').parent(container);

  // Create the slider for the number of points
  let numPointsLabel = createElement('label', 'Number of points');
  numPointsLabel.parent(container);
  createElement('br').parent(container);
  numPointsSlider = createSlider(Nmin, Nmax, (Nmin + Nmax) / 2); 
  numPointsSlider.parent(container);
  numPointsSlider.input(updatePoints); // Update points when the number changes
  
  // Generate points initially
  updatePoints();
}

function draw() {
  background(255);
  // Draw the points
  for (let p of points) {
    let H=max(abs(p[0]),abs(p[1]),abs(p[2]));
    let R = 0;
    let G = 0;
    let B = 0;
    if (H < BSlider.value()){ 
      R = 255;
      G = 0;
      B = 0;
    }
    fill(R,G,B);
    noStroke();
    let point=createVector(p[0]/H,p[1]/H);
    if(p[0]*p[0]+p[1]*p[1]-p[2]*p[2]==0){
      ellipse(width / 2 + point.x * width / 2, height / 2 - point.y * height / 2, pointSize*5/sqrt(H), pointSize*5/sqrt(H)); // Use pointSize
    }
    else{
      ellipse(width / 2 + point.x * width / 2, height / 2 - point.y * height / 2, pointSize*5/sqrt(H), pointSize*5/sqrt(H)); // Use pointSize
    }
  }
}

// Function to update the points
function updatePoints() {
  let numPoints = numPointsSlider.value();
  points = []; // Reset points
  for (let i = 0; i < numPoints; i++) {
    //let [x, y, z] = generateCoprimePoint(BmaxSlider.value());
    //let H=max(abs(x),abs(y),abs(z)); // Height of the point
    points.push(generateCoprimePoint(BmaxSlider.value()));
    //points.push(createVector(x / H, y / H)); // Normalize to get something representable
  }
}

// Function to generate coprime integers
function generateCoprimePoint(B) {
  let x, y, z;

  do {
    x = floor(random(-B, B + 1));
    y = floor(random(-B, B + 1));
    z = floor(random(-B, B + 1)); 
  } while (!areCoprime(x, y, z)); 
  return [x, y, z];
}

// Function to check if three numbers are coprime
function areCoprime(a, b, c) {
  return gcd(gcd(abs(a), abs(b)), abs(c)) === 1;
}

// Function to calculate the GCD
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
  var targetDiv = document.getElementById('script-target');  

  if (targetDiv) {
    // Ajoute du contenu ou manipule le contenu ici
    targetDiv.innerHTML //+= '<p>Contenu ajouté par le script JS.</p>';
  }
});
