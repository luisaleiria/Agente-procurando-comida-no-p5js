// Seeking a Target (Seek)
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/p1Ws1ZhG36g
// https://thecodingtrain.com/learning/nature-of-code/5.2-seek.html

// Seek: https://editor.p5js. org/codingtrain/sketches/AxuChwlgb
// Seek with Sliders: https://editor.p5js.org/codingtrain/sketches/DROTtSI7J
// Arrive: https://editor.p5js.org/codingtrain/sketches/dQx9oOfTN
// Pursue: https://editor.p5js.org/codingtrain/sketches/XbsgoU_of

let vehicle;
let target;
let food;
let collected;

function setup() {
  createCanvas(500, 500);
  vehicle = new Vehicle(100, 100);
  collected = 0;
  spawnFood();
}

function draw() {
  background(0);

  fill('magenta');
  textSize(18);
  textAlign(LEFT, TOP);
  text("Comidas coletadas: " + collected, 10, 10);

  fill('yellow');
  noStroke();
  circle(food.x, food.y, 16); // comida com diam=16 (metade do veículo)

  let distance = dist(vehicle.pos.x, vehicle.pos.y, food.x, food.y);

  if (distance < vehicle.vision){
    vehicle.seek(food); // veiculo aplica força de busca em direção a comida se tiver no campo de visão
  }
  else{
    vehicle.explore(); //anda aleatorio
  }

    if (distance < vehicle.r + 8) { // 8 é metade do diam da comida, para saber se dois circs se tocaram compara a distancia entre os centros com a soma dos raios 
        collected++;
        console.log("Foram coletadas:" + collected + "comidas");
        spawnFood();
        }

    vehicle.seek(food); // veiculo aplica força de busca em direção a comida
    vehicle.update(); // faz o veículo se mover
    vehicle.show(); // mostra o veículo na posição atual
}

function spawnFood() {
  food = createVector(random(width), random(height));
}
