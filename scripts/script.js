const d = document;

const $container = d.querySelector(".card");
const $select = d.getElementById("ice-cream");
const img = d.createElement("img");
let $imgOption = d.getElementById("img-option");
const $imgBx = d.getElementById("imgBx");
const $form = d.getElementById("form");

$select.addEventListener("change", e => {
    console.log(e.target.value);
    const id = e.target.value;

    if(id == "Opciones") img.setAttribute("src", "");
    
    if(id == 1) img.setAttribute("src", "src/Sandia.png");
    
    if(id == 2) img.setAttribute("src", "src/Parchita.png");

    if(id == 3) img.setAttribute("src", "src/Kiwi.png");

    if(id == 4) img.setAttribute("src", "src/Durazno.png");

    img.style.width = "80px";
    $imgBx.appendChild(img);
})

$form.addEventListener("submit", e => {
    e.preventDefault();

    $container.classList.add("none");
    
   let name = document.getElementById('name').value;
   let lastName = document.getElementById('lastName').value;
   let direction = document.getElementById('direction').value;
   let contactNumber = document.getElementById('contactNumber').value;
   let iceCream = document.getElementById('ice-cream').value;
    
   let factura = {
       name,
       lastName,
       direction,
       contactNumber,
       iceCream
   }

   console.log(factura);
})