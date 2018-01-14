var body = document.getElementsByTagName('body')[0];

body.style.fontFamily = "Arial, sans-serif";

var lala = document.getElementById("span");

var nick = document.getElementById("nickname");
 nick.innerHTML = "ioana";


var favs = document.getElementById("favorites");
favs.innerHTML = "lala la ";

var home = document.getElementById("hometown");
home.innerHTML = "buc"

var array = document.getElementsByTagName("li");
for(i=0;i<array.length;i++)
  {
    array[i].classList.add('red');
  }

var img = document.createElement("img");
 img.setAttribute("src", "http://www.anyplace-control.com/images/articles/linux.jpeg");
 document.body.appendChild(img);
