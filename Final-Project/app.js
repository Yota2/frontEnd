console.log("Hallo world")



function myFunction(e) {
    var x = document.querySelectorAll(".blog-containt");
    var y = document.querySelectorAll(".main-title");

    console.log(e.innerHTML)
    for(let z=0; z< y.length; z++){
        if(e.innerHTML === y[z].innerHTML){
            console.log(y[z].innerHTML)
               if (x[z].style.display === "none") {
          x[z].style.display = "block";
          y[z].style.borderBottom = "2px dashed blue"
        } else {
          x[z].style.display = "none";

        }
        }else{
            x[z].style.display = "none";
            y[z].style.borderBottom = "none"
        }
        console.log(x)
     
    }}
// ----------------------------------------------------------------------------------------------------
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
// ------------------------------------------------------------------------------------------------------------------------

