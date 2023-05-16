function dropDown() {
  lazyLoad();
  var toggle = document.getElementById("dropdown");
  if (toggle.className.indexOf("show") == -1) {
    toggle.className += " show";  
  } else { 
    toggle.className = toggle.className.replace(" show", "");
  }
}