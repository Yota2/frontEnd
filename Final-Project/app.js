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
     
    }


}