const ocultar = document.querySelector('.navy1');
setTimeout(function () {
    ocultar.style.display = 'flex'
}, 300);

window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
        ocultar.style.display = 'none'
    } else {
        ocultar.style.display = 'flex'
    }
});
const mostrar = document.querySelector('.nav2');
setTimeout(function () {
   mostrar.style.display = 'none'
}, 300);

window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
        mostrar.style.display = 'block';
       
        
    } else {
        mostrar.style.display = 'none'
       
    
    }
});

const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

const expandir = document.querySelector(".expandir-btn");

expandir.addEventListener("click", function () {
  document.querySelector("#menulate").classList.toggle("expand");
});


function expand() {
    let element = document.getElementById("menulate");
    element.classList.toggle("expand");
 }
