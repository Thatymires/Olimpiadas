class Starfield
{
	fps ;
    canvas ;
    width ;
	height ;
    minVelocity ;
    maxVelocity ;
    qtdestars ;
	stars;
    intervalId ;
	ctx;
	star;
	
	  constructor(ctx) {
		  this.fps = 30;
	
	this.width = 0;
	this.height = 0;
	this.minVelocity = 15;
	this.maxVelocity = 30;
	this.qtdestars = 300;
	this.intervalId = 0;

    this.ctx = ctx;
	//console.table(this.ctx);
	//define o tamanho da janela
	this.width = window.innerWidth;
	console.table(window.innerWidth);
	this.height = window.innerHeight;
	console.table(window.innerHeight);
	this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;
	    
  }
  
 
inicializa()
{
	
	var self = this;
	 
addEventListener('resize', function resize(event){
    
	self.width = window.innerWidth;
    self.height = window.innerHeight;
	self.ctx.canvas.width = self.width;
	self.ctx.canvas.height = self.height;
	console.table(self.ctx.width);
	console.table(self.ctx.height);
    self.desenha() 
	
}); 

}
start()
{
	
	this.stars = [];
	for(var i=0; i<this.qtdestars; i++) {
			var x = Math.random()*this.width;
			
			var y =  Math.random()*this.height;
			var size =  Math.random()*3+1;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			
			this.star = new Star(x,y, size,vel );
		this.stars[i] = this.star;
	}
	
	var timeUpdate = 1000 / this.fps;
	var self = this;
	this.intervalId = setInterval(function() {
        self.update();
        self.desenha();	
    }, timeUpdate);
}

	desenha()
	{
		
		this.ctx.fillStyle = '#d0d5d7';
		this.ctx.fillRect(0, 0, this.width, this.height);
		
		//desenha as estrelas no plano de fundo
		this.ctx.fillStyle = 'red';
		for(var i=0; i<this.stars.length;i++) {
			this.star = this.stars[i];
			this.ctx.fillRect(this.star.x, this.star.y, this.star.size, this.star.size);
			//console.table(star);
		}
		
	}


  update(){
	var dt = 1 / this.fps;

	for(var i=0; i<this.stars.length; i++) {
		var star = this.stars[i];
		star.y += dt * star.velocity;
		//	If the star has moved from the bottom of the screen, spawn it at the top.
		if(star.y > this.height) {
			var x = Math.random()*this.width;
			var size =  Math.random()*3+1;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			let s = new Star(x, 0,size, vel);
			//console.table(s);			
		 	this.stars[i] = s;
		}
		
	}
	//console.table(this.stars);
}

stop()
{
	clearInterval(this.intervalId);
}
	
}
