document.onkeydown = checkKey;
let i =0;
function checkKey(e) {

    e = e || window.event;
    var image  = document.getElementById('image');
     i = i + (e.keyCode == '38' ? 5 : (e.keyCode == '40' ? -5 : 0));
    image.style="-webkit-transform: rotate("+i+"deg)";
  }

function show(){
  var counter = 	Math.floor(i / 11.25);
  console.log(counter+', порядковый номер для + , градусы делённые на 11.25');
  var moduloCounter = counter %32;
  console.log(moduloCounter+'moduloCounter - остаток от деления на 32');

  var numbers = [0, 450, 850, 400, 600, "П", 500, 350,
                800, 600, "+", 750, 600, 350, 500, "Б",
                400, 600, 350, 500, 450, 0, 850, 700,
                500, 750, 350, "Х2", 750, 550, 350, 1000];

var mod = Math.sign(moduloCounter);
console.log(mod+'mod');
if(moduloCounter < 0) {
  moduloCounter = 32 + moduloCounter;
}
var result = document.getElementById('result');
result.innerHTML = numbers[moduloCounter];
}
