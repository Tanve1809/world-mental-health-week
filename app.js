var home =document.getElementById("home");

var text =document.getElementById("text");
var image=document.getElementById("image");
home.onclick=()=>{ 
  image.style.display="none";
  text.style.display="inherit"
}