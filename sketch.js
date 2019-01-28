let time = 0 ;
let wave = [] ;
let slider ;

function setup() {
    createCanvas(800,600) ;
    slider = createSlider(1, 100, 1) ;
}

function draw(){
  background(0) ;
  translate(200,250) ;

  let x = 0;
  let y = 0;

for (let i=0; i<slider.value(); i++){
  let prevx = x ;
  let prevy = y ;
    let n = 2*i+1;
    let radius = 100 * (4 / (n * PI)) ;
    x += radius * cos(n*time) ;
    y += radius * sin(n*time) ;
     ;

    stroke(255, 100) ;
    noFill() ;
    ellipse(prevx,prevy, 2*radius) ;

    fill(255);
    stroke(255);
    //ellipse(x,y,8) ;
    line(prevx,prevy,x,y) ;


}
wave.unshift(y)

translate(300,0);
line(x-300,y,0,wave[0]);

    beginShape();
    noFill();
    for (let i=0; i<wave.length; i++){
      vertex(i,wave[i]);
    }
    endShape()

    time += 0.1 ;
    if (wave.length > 600) {
      wave.pop() ;
    }
}
