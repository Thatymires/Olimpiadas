var canvas = document.getElementById('#tela2');
var c = tela2.getContext('2d');
var grd = c.createRadialGradient(75, 50, 5, 
90, 60, 150);
var grd1 = c.createRadialGradient(75, 50, 10, 
120, 60, 150);
var grd2 = c.createRadialGradient(75, 50, 5, 
90, 60, 150);

	tela2.width = 400;
	tela2.height = 200;
	
c.font="bold 50px Arial";
c.strokeText("1", 180, 70);

c.font="bold 50px Arial";
c.strokeText("2", 60, 110);

c.font="bold 50px Arial";
c.strokeText("3", 300, 110);

grd.addColorStop(0, "white");
grd.addColorStop(1, "blue");
c.fillStyle = grd;
c.fillRect(10, 130, 120, 60);
console.log(c);

grd1.addColorStop(0, "white");
grd1.addColorStop(1, "blue");
c.fillStyle = grd1;
c.fillRect(130, 90, 120, 100);
console.log(c);


grd2.addColorStop(0, "white");
grd2.addColorStop(1, "blue");
c.fillStyle = grd2;
c.fillRect(250, 130, 120, 60);
console.log(c);
