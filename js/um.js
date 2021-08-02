var canvas = document.getElementById('#tela1');
var c = tela1.getContext('2d');

	tela1.width = 500;
	tela1.height = 600;
	
c.beginPath();
c.strokeStyle = '#000000';
c.lineTo(200, 400);
c.lineTo(250, 450);
c.lineTo(250, 400);
c.lineTo(200, 400);
c.stroke();

c.beginPath();
c.strokeStyle = '#000000';
c.lineTo(200, 400);
c.lineTo(250, 450);
c.lineTo(250, 400);
c.lineTo(200, 400);
c.stroke();

c.beginPath();
c.strokeStyle = '#000000';
c.lineTo(100, 300);
c.lineTo(150, 350);
c.lineTo(150, 300);
c.lineTo(100, 300);
c.stroke();

c.beginPath();
c.strokeStyle = '#000000';
c.lineTo(100, 300);
c.lineTo(150, 350);
c.lineTo(150, 300);
c.lineTo(100, 300);
c.stroke();

c.beginPath();
c.strokeStyle = '#000000';
c.lineTo(300, 500);
c.lineTo(350, 550);
c.lineTo(350, 500);
c.lineTo(300, 500);
c.stroke();

c.beginPath();
c.strokeStyle = '#000000';
c.lineTo(300, 500);
c.lineTo(350, 550);
c.lineTo(350, 500);
c.lineTo(300, 500);
c.stroke();

var circle = new Path2D();
circle.arc(150, 360, 20, 0, 2 * Math.PI);
c.fillStyle = "#ffd700";
c.fill(circle);

var circle = new Path2D();
circle.arc(250, 460, 20, 0, 2 * Math.PI);
c.fillStyle = "#c0c0c0";
c.fill(circle);

var circle = new Path2D();
circle.arc(350, 560, 20, 0, 2 * Math.PI);
c.fillStyle = "#cd7f32";
c.fill(circle);
