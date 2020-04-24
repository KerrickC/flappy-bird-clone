function Bird(){ 
	this.y = height/2;
	this.x = 35;

	this.gravity = 0.5;
	this.lift = -15;
	this.velocity = 0;


	this.show = function() { //display on screen
		fill(255);
		ellipse(this.x, this.y, 32, 32);
	}

	this.up = function() {
		this.velocity += this.lift;
	}

	this.update = function() {
		this.velocity += this.gravity;
		this.velocity *= 0.95;
		this.y += this.velocity;

		if(this.y > height){
			this.y = height;
			this.velocity = 0;

		}else if(this.y < 0){
			this.y = 0;
			this.velocity = 0;
		}

	}

	this.resetBird = function() {
		this.y = height/2;
	}



}