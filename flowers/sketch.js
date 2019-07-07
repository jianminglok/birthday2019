// Flower Generator

// Developed by Willa Hua as an art project
// Based on plant morphology, recursion and rose curves
// Inspired by Holger Lippmann and Diana Lange
// willahua.com
// Github username: wiiilla


// Variables Documentation
// Format:
// Name in code/ Name on UI: Descriptions

// Inflorescense variables:
// branches/brancing : total number of branches
// scale/scaling : the scaling factor; the strokeWeight multiplier as a branch develops
// angle/expansion: the angle between 2 adjacent branches
// layers/laying: the number of layers a branch branches out
// variance/randomization: the mutiplier for randomization, creating more or less organic effect

// Floret variables:
// number/blossom : total number of branches
// size/mass : the scaling factor; the strokeWeight multiplier as a branch develops
// shape1/shape: the angle between 2 adjacent branches
// shape2/volume: the number of layers a branch branches out
// color/color: the mutiplier for randomization, creating more or less organic effect

function palette(i){
  // Costumize color palette here
  p = [
    {"inner": color("#4D8C81"), "stroke": color("#6C9E9C"), "outer": color("#93FAE7")},
    {"inner": color("#D24240"), "stroke": color("#D24240"), "outer": color("#E57B75")},
    {"inner": color("#88328A"), "stroke": color("#FCFCFD"), "outer": color("#F25EF5")},
    {"inner": color("#E57B75"), "stroke": color("#CBB3A7"), "outer": color("#EFE8DE")},
    {"inner": color("#C71C9C"), "stroke": color("#BD4DA1"), "outer": color("#FFA3E8")}
  ];
  // set transparency
  for (var j=0; j<5 ; j++) {
    p[j]["inner"]["_array"][3] = 1;
    p[j]["stroke"]["_array"][3] = 0.9;
    p[j]["outer"]["_array"][3] = 0.8;
  }
  return  (p[round(map(i, 0, 1, 0, p.length))]);
}


function sliders_setup () {
  sliders={};
  // Inflorescense variables:
  sliders["inflorescense"] = {};
  sliders["inflorescense"]["branches"] = createSlider(0, 1, random(0.8, 1), 0.02);
  sliders["inflorescense"]["branches"].position(140, 70);
  sliders["inflorescense"]["branches"].style('width', '100px');
  sliders["inflorescense"]["branches"].mousePressed(redraw);

  sliders["inflorescense"]["scale"] = createSlider(0, 1, random(0, 0.5), 0.02);
  sliders["inflorescense"]["scale"].position(140, 95);
  sliders["inflorescense"]["scale"].style('width', '100px');
  sliders["inflorescense"]["scale"].mousePressed(redraw);

  sliders["inflorescense"]["angle"] = createSlider(0, 1, random(0, 0.5), 0.02);
  sliders["inflorescense"]["angle"].position(140, 120);
  sliders["inflorescense"]["angle"].style('width', '100px');
  sliders["inflorescense"]["angle"].mousePressed(redraw);

  sliders["inflorescense"]["layers"] = createSlider(0, 1, random(0.8, 1), 0.02);
  sliders["inflorescense"]["layers"].position(140, 145);
  sliders["inflorescense"]["layers"].style('width', '100px');
  sliders["inflorescense"]["layers"].mousePressed(redraw);

  sliders["inflorescense"]["variance"] = createSlider(0, 1, random(0.2, 0.6), 0.02);
  sliders["inflorescense"]["variance"].position(140, 170);
  sliders["inflorescense"]["variance"].style('width', '100px');
  sliders["inflorescense"]["variance"].mousePressed(redraw);

  // Floret variables:
  sliders["floret"] = {};
  sliders["floret"]["blossom"] = createSlider(0, 1, random(0.2, 0.6), 0.02);
  sliders["floret"]["blossom"].position(500, 70);
  sliders["floret"]["blossom"].style('width', '100px');
  sliders["floret"]["blossom"].mousePressed(redraw);

  sliders["floret"]["size"] = createSlider(0, 1, random(0.1, 0.6), 0.02);
  sliders["floret"]["size"].position(500, 95);
  sliders["floret"]["size"].style('width', '100px');
  sliders["floret"]["size"].mousePressed(redraw);

  sliders["floret"]["shape1"] = createSlider(0, 1, random(0, 1), 0.02);
  sliders["floret"]["shape1"].position(500, 120);
  sliders["floret"]["shape1"].style('width', '100px');
  sliders["floret"]["shape1"].mousePressed(redraw);

  sliders["floret"]["shape2"] = createSlider(0, 1, random(0, 0.8), 0.02);
  sliders["floret"]["shape2"].position(500, 145);
  sliders["floret"]["shape2"].style('width', '100px');
  sliders["floret"]["shape2"].mousePressed(redraw);

  sliders["floret"]["color"] = createSlider(0, 1, random(0, 1), 0.02);
  sliders["floret"]["color"].position(500, 170);
  sliders["floret"]["color"].style('width', '100px');
  sliders["floret"]["color"].mousePressed(redraw);

}


function setup() {
  // Presets
  var width = window.innerWidth, height = window.innerHeight;
  var centerX = 0, centerY = 0;
  saveCounter = 1;
  maxDiam = min(width, height) * 8/10
  colorMode(HSB, 360, 100, 100, 1);
  angleMode(RADIANS);
  noLoop();

  // Sliders
  

  createCanvas(width, height);
}

function draw() {
  // UI
  clear();
  noStroke();
  noFill()
  
  var backgroundColor = color("#36481D");
  backgroundColor["_array"][3] = 0.15;
  fill(backgroundColor);
  ellipse(0 + width/2, height/2, min(width, height) * 8/10, min(width, height) * 8/10);

  translate(width / 2, height/2);
  smooth();

  

}

function doubleClicked() {
  redraw();
}

function saveFile() {
  save("flower"+str(saveCounter)+".png")
  saveCounter = saveCounter + 1;
}


var times = 0;
setInterval(function(){ 

    if(times < 99) {
    redraw();

    // Push Slider Value to default drawing
    var params = []
    params.push(random(0.8, 1))
    params.push(random(0, 0.5))
    params.push(random(0, 0.5))
    params.push(random(0.3, 0.4))
    params.push(random(0.2, 0.3))
    params.push(random(0.2, 0.5))
    params.push(random(2.0, 2.7))
    params.push(random(0.3, 0.5))
    params.push(random(0, 0.8))
    params.push(random(0, 1))

    // Draw
    branch(params);
    times += 1;
    }
  

}, 1500);
