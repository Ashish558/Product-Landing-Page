
window.addEventListener("load", function(){

var menuBtn = document.getElementById("menu-btn")
var navList= document.getElementById("nav-list")

menuBtn.addEventListener("click", toggleNav)

function toggleNav(){
  menuBtn.classList.toggle("active")
  navList.classList.toggle("in-active")
}

window.addEventListener("scroll", function(){
  if(window.scrollY>40){
      if(menuBtn.classList.contains("active")){
        menuBtn.classList.remove("active")
        navList.classList.add("in-active")
      }
      else{
        return
      }
  }  
})
// SMOOTH SCROLL

const links = document.querySelectorAll(".nav .lists a");

for (let i = 0 ; i<links.length ; i++) {
  links[i].addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  })
   menuBtn.classList.toggle("active")
   navList.classList.toggle("in-active")
}

})