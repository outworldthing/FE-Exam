document.getElementById("blog-1").addEventListener("mouseover", function() {
  document.getElementById("blog-image").style.content = "url('images/61fa4fd439310c3222e142ba_Blog Image 2.png')";
  document.getElementById("blog-1").className += " blog-active";
  document.getElementById("learn-1").className += " active-span";

}, false);

document.getElementById("blog-1").addEventListener("mouseout", function() {
  document.getElementById("blog-image").style.content = "";
  document.getElementById("blog-1").className = document.getElementById("blog-1").className.replace(" blog-active", "");
  document.getElementById("learn-1").className = document.getElementById("learn-1").className.replace(" active-span", "");

}, false);

document.getElementById("blog-2").addEventListener("mouseover", function() {
  document.getElementById("blog-image").style.content = "url('images/61fa50143a337b6520618374_Blog Image 9.png')";
  document.getElementById("blog-2").className += " blog-active";
  document.getElementById("learn-2").className += " active-span";
}, false);

document.getElementById("blog-2").addEventListener("mouseout", function() {
  document.getElementById("blog-image").style.content = "";  
  document.getElementById("blog-2").className = document.getElementById("blog-2").className.replace(" blog-active", "");
  document.getElementById("learn-2").className = document.getElementById("learn-2").className.replace(" active-span", "");

}, false);

document.getElementById("blog-3").addEventListener("mouseover", function() {
  document.getElementById("blog-image").style.content = "url('images/61fa503d384336649c7557ac_Blog Image 6.png')";
  document.getElementById("blog-3").className += " blog-active";
  document.getElementById("learn-3").className += " active-span";

}, false);

document.getElementById("blog-3").addEventListener("mouseout", function() {
  document.getElementById("blog-image").style.content = "";  
  document.getElementById("blog-3").className = document.getElementById("blog-2").className.replace(" blog-active", "");
  document.getElementById("learn-3").className = document.getElementById("learn-3").className.replace(" active-span", "");

}, false);

document.getElementById("blog-4").addEventListener("mouseover", function() {
  document.getElementById("blog-image").style.content = "url('images/623376b57925d763656caec2_Blog Image.png')";
  document.getElementById("blog-4").className += " blog-active";
  document.getElementById("learn-4").className += " active-span";
}, false);

document.getElementById("blog-4").addEventListener("mouseout", function() {
  document.getElementById("blog-image").style.content = "";  
  document.getElementById("blog-4").className = document.getElementById("blog-2").className.replace(" blog-active", "");
  document.getElementById("learn-4").className = document.getElementById("learn-3").className.replace(" active-span", "");

}, false);