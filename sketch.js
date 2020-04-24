var bird;
var pipes = [];
var hits = 0;
function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(0);
    bird.update();
    bird.show();

    if(frameCount % 100 == 0){ //do this every 100 frames
		pipes.push(new Pipe());
    }

    if(frameCount % 1000 == 0){
    	Pipe.speed += 1;
    }

    for(var i = pipes.length-1; i >= 0; i --){
    	pipes[i].show();
    	pipes[i].update();

    	if(pipes[i].hits(bird)){
    		bird.resetBird();
    		pipes = [];
    		hits ++;
    		//console.log(hits);
    		document.getElementById("score").innerHTML = "Deaths: " + hits;
    	}

    	if(pipes.length != 0){
			if(pipes[i].offscreen()){ //if pipe exits screen, delete from array
    			pipes.splice(i,1);
    		}
    	}
    	
    }
}

function keyPressed() {
	if(key == ' '){
		bird.up();
	}
}