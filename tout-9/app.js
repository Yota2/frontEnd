// let box1 = document.querySelector(".mouseente")
// function mouseenter(){
//     box1.style.width="400px";
//     box1.style.backgroundcolor = "red"
// }

// function mouseLeave(){
//     box1.style.width="100px";
//     box1.style.backgroundcolor = "pink"
// }

// let box2 =    document.querySelector(".mousmove")
// function mousmove(){
//     var x = a.clientX;
//     var y = a.clientY;
//     box2.innerHTML = ´ the mouse is movie to the x direction $(x) and y($)

let showText =false;
let tekst = document.getElementById("text")
function show(){
showText =  !showText
if(show == true){
  tekst.style.visibility="visble"
}else{
  tekst.style.visibility="hidden"
}
console.log(show)
}
//boekLijst
let titel = document.getElementById("titel")
let schrijver = document.getElementById("schrijver")
let verhaal = document.getElementById("verhaal")
let boek = document.getElementById("boek")
let btnLijst = document.getElementById("btnLijst")

btnLijst.addEventListener('click', function(){
  boek.innerHTML += `<tr>
  <td>${titel.value}</td>
  <td>${schrijver.value}</td>
  <td>${verhaal.value}</td>
  <td> <i class="fa-solid fa-trash-can"></i> </td>
  </tr>`
})

titel.value="";

function removerij(e){
  console.log(e.parentElement.parentElement)

e.parentElement.parentElement.remov()
}

