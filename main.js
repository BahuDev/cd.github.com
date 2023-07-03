ns4 = (document.layers)? true:false
ie4 = (document.all)? true:false

function init() {
    if (ns4) {document.captureEvents(Event.MOUSEMOVE);}
    document.onmousemove=mousemove;
}

function mousemove(event) {
    var mouse_x = y = 0;
    if (document.attachEvent != null) {
        mouse_x = window.event.clientX;
        mouse_y = window.event.clientY;
    } else if (!document.attachEvent && document.addEventListener) {
        mouse_x = event.clientX;
        mouse_y = event.clientY;
    }
    status="x = " + mouse_x + ", y = " + mouse_y;
  
    //This is dark gradient, comment that to see all screen (don't forget base gradint in css)
    var fl = document.getElementById('flashlight'); 
    fl.style.transform = 'translate(calc(' + mouse_x + 'px - 50vw), ' + 'calc(' + mouse_y + 'px - 50vh))';
  
    var m18 = document.getElementById('m18'); //Display property of this element is none (css) until g.onclick condition (see below) is true. It is Easter egg part.
    m18.style.left = mouse_x + 'px';  
    m18.style.top = mouse_y + 'px';
}
init()

//Div with gradient (.flashlight) is located above text and button, so I creating invisible blocks (.hovAll .hovBtn .hovStar) under .flashlight. New class "hovered" for lower elements is creating when invisible blocks hovered.   

var hA = document.getElementById('hovAll'); 
var hB = document.getElementById('hovBtn');
var hS = document.getElementById('hovStar');
var clickCount = 0; //This variable needs for Easter egg

hA.onmouseover = function () {
  var hint = document.getElementById('hint');
  hint.classList.add("hovered");
}

hA.onmouseout = function () {
  var hint = document.getElementById('hint');
  hint.classList.remove("hovered");
}

hB.onmouseover = function () {
  var btn = document.getElementById('btn');
  btn.classList.add("hovered");
}

hB.onmouseout = function () {
  var btn = document.getElementById('btn');
  btn.classList.remove("hovered");
}

//Easter egg code

hS.onmouseover = function () {
  var star = document.getElementById('star');
  star.classList.add("hovered");
}

hS.onmouseout = function () {
  var star = document.getElementById('star');
  star.classList.remove("hovered");
}

hS.onclick = function () {
  clickCount++;
  if (clickCount >= 18) {
    var bd = document.getElementsByTagName('body');
    bd[0].style.cursor = 'none';
    hB.style.cursor = 'none';
    hS.style.cursor = 'none';
    var m18 = document.getElementById('m18');
    m18.style.display = 'inline-block';
    var star = document.getElementById('star');
    star.style.opacity = 1;
    star.style.fill = 'hsl(357, 79%, 59%)';
  }
  else {
    var star = document.getElementById('star');
    star.style.fill = 'hsl(357, ' + 4*clickCount + '%, 59%)';
  }
}

hS.onmousedown = function () {
  var star = document.getElementById('star');
  star.classList.add("pressed");
}

hS.onmouseup = function () {
  var star = document.getElementById('star');
  star.classList.remove("pressed");
}


