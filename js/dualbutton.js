const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

const expandir = document.querySelector(".toggle-btn");

expandir.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
  
});

function expand() {
  let element = document.getElementById("sidebar");
  console.log = element;
  element.classList.toggle("expand");
  
}

const dualButton = document.getElementById("botondual");
console.log = dualButton;

dualButton.innerHTML = `
<button class="btn_dual paddingSolo" onClick="dual()" id="evo">
            <i class="fa-solid fa-notes-medical"></i>
            <span class="toggleTitle">Evolucion</span>
        </button>
        <button class="btn_dual btn_hide" id="enCurso">
            <i class="fa-solid fa-notes-medical"></i>
            <span class="toggleTitle">En curso</span>
        </button>`;

function dual() {
    let evoBtn = document.getElementById("evo")
    evoBtn.classList.toggle("paddingSolo")
   

    let removeHide = document.getElementById("enCurso")
    removeHide.classList.toggle('btn_hide')
    removeHide.classList.add('evo_active')

}


// function dual() {
//   dualButton.innerHTML = `<div class="dualbuttongroup" id="toogleDual">
//       <button class="btn_dual">
//           <i class="fa-solid fa-notes-medical"></i>
//           <span class="toggleTitle">Evolucion</span>
//       </button>
//       <button class="btn_dual evo_active">
//           <i class="fa-solid fa-notes-medical"></i>
//           <span class="toggleTitle">En curso</span>
//       </button>
//   </div>`;
// }
