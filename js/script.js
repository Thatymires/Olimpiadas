var canvas = document.getElementById('#tela');
var c = tela.getContext('2d');

	tela.width = 400;
	tela.height = 150;

	
c.font="bold 40px Arial";
c.fillStyle="#001d57";
c.fillText("TOKYO 2020", 80, 50);
	

c.beginPath();
c.strokeStyle = '#018ac3';
c.arc(140, 85, 25, 0, Math.PI * 2, false);
c.stroke();

c.beginPath();
c.strokeStyle = '#000000';
c.arc(200, 85, 25, 0, Math.PI * 2, false);
c.stroke();

c.beginPath();
c.strokeStyle = '#dd000f';
c.arc(260, 85, 25, 0, Math.PI * 2, false);
c.stroke();

c.beginPath();
c.strokeStyle = '#fafe07';
c.arc(170, 110, 25, 0, Math.PI * 2, false);
c.stroke();

c.beginPath();
c.strokeStyle = '#289500';
c.arc(230, 110, 25, 0, Math.PI * 2, false);
c.stroke();

var img = new Image();
img.src = "img/tokyo1.jpg";
c.drawImage(img, 100, 100);

var s;
var book = [
   {
       stars: 1,
       Validation: true
   }
];
for(s = 0; s < book[0]["stars"]; s++){
     var img = document.createElement("IMG");
     img.src = "img/tokyo1.jpg";
     img.style.width = "420px";
     img.style.height = "300px";
     document.getElementById('imagens').appendChild(img);
}

var img = new Image();
img.src = "img/tocha1.jpg";
c.drawImage(img, 100, 100);

var s;
var book = [
   {
       stars: 1,
       Validation: true
   }
];
for(s = 0; s < book[0]["stars"]; s++){
     var img = document.createElement("IMG");
     img.src = "img/tocha1.jpg";
     img.style.width = "420px";
     img.style.height = "180px";
     document.getElementById('imagens1').appendChild(img);
}

var img = new Image();
img.src = "img/mascote.png";
c.drawImage(img, 100, 100);

var s;
var book = [
   {
       stars: 1,
       Validation: true
   }
];
for(s = 0; s < book[0]["stars"]; s++){
     var img = document.createElement("IMG");
     img.src = "img/mascote.png";
     img.style.width = "420px";
     img.style.height = "300px";
     document.getElementById('imagens2').appendChild(img);
}
