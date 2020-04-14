
document.onkeydown = checkKey;
let i =0;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
      var image  = document.getElementById('image');
              i = i+5;
              image.style="-webkit-transform: rotate("+i+"deg)";

              console.log(i+' первый i');
          } else if (e.keyCode == '40') {
      var image  = document.getElementById('image');
              i = i-5;
              image.style="-webkit-transform: rotate("+i+"deg)";
              console.log(i+' первый i');
    }
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
if (mod===1) {
  var result = document.getElementById('result');
  result.innerHTML = numbers[moduloCounter];
} else {
  if (moduloCounter != 0) {
    var negativeNumber = 32+moduloCounter;
    var mod1= Math.abs(negativeNumber);
    console.log(mod1);
    var result = document.getElementById('result');
    result.innerHTML = numbers[mod1];
    console.log(mod1+'модуль числа отрицательного');
  } else {
    var result = document.getElementById('result');
    result.innerHTML = numbers[0];
  }
}
}

  //this.style.transform (20deg);
