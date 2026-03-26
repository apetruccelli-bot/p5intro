let topo;
function preload() {  
 topo = loadImage('Topo_Gigio.jpg');

}


function setup() {
  createCanvas(400, 400);
background  (160,0,0);


let x;
let y;

for (let i=0; i<10; i = i+1){
  
  let x = random (300);
  let y = random (300);
 image(topo, x, y, 30, 30);

}


}