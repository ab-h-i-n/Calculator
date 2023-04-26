var screen = document.querySelector(".screen");
var buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button){
    button.addEventListener("click",function(){
        screen.innerText += button.value;
    });
});

var ac = document.querySelector(".ac");
ac.addEventListener("click",function(){
    screen.innerText = "";
})

var eq = document.querySelector(".eq");
eq.addEventListener("click", function() {
  try {
    var result = eval(screen.innerText);
    screen.innerText = result;
  } catch(e) {
    screen.innerText = "Syntax Error";
    screen.classList.add("error");
    setTimeout(function() {
      screen.classList.remove("error");
      screen.innerText = "";
    }, 500);
  }
});


var c = document.querySelector(".c");
c.addEventListener("click",function() {
    var string = screen.innerText;
    screen.innerText = string.substring(0,string.length-1);
    
});