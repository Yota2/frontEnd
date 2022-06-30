let datum = document.getElementById("datum")
let dag = new Date()
// document.getElementById = day
let options={weekday:'short', year: 'numeric' , month: 'long', day: 'numeric'}
let volDat = dag.toLocaleString('nl-BE' , options)
datum.innerHTML = volDat

let weekdag = ["sunday", "monday","tusday","wensday","thursday","friday","staturday"]

weekdag = new Date().getDate()
console.log(weekdag)
// getdate, getDate(), getMonth 

// let datum1 = document.getElementById("datum1")
// let Date = new Date().getDate()
// // document.getElementById = day
// let maand= ["jan" , "Feb", "maart" , "aprs", "may", "jun"]
// maand = maand[new Date().getMonth]
// console.log(maand)
// let jaar = new Date.getFullyear()
// console.log(jaar)
// datum1.innerHTML= weekdag + " "+ Date + " " + maand + ""  + jaar 
// var welcome;  
// var person  = prompt("Please enter your name", "Your name here ..... ");
//     var date = new Date();  
//     var hour = date.getHours();  
//     var minute = date.getMinutes();  
//     var second = date.getSeconds();  
//     if (minute < 10) {  
//       minute = "0" + minute;  
//     }  
//     if (second < 10) {  
//       second = "0" + second;  
//     }  
//     if (hour < 12) {  
//       welcome = "Good morning";  
//     } else if (hour < 17) {  
//       welcome = "Good afternoon";  
//     } else {  
//       welcome = "Good evening";  
//     }  
//     document.write("<h2>" + "<font color='red'>" + welcome + ":"   +    person + "</font>" + " welcome ");  
//     document.write("<br>" + hour + ":" + minute + ":" + second); 

//     // asking user to get
//     var monthNames = [ "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December" ];
//       function myFunction() {
//     var today = new Date();
//     var date = prompt("Please enter date.", today.getDate()+"-"+monthNames[today.getMonth()]+"-"+today.getFullYear());

//     if (date != null) {
//         x = "Hello! You have entered date as: " + date;
//         document.getElementById("demo").innerHTML = x;
//     }
// }


let result = Math.random()
result =Math.random()*10
result = (Math.random(Math.random)*10)
console.log(result)+1

result = (Math.random(Math.random*9)+1)
console.log(result)


   let speelgoed = ["bal", "pop", "lego","auto", "puzzel", "playstation", "lala","lkia","lulu","dulala"]
   let kind = speelgoed[Math.round(Math.random()*10)]
   console.log(kind)

   function test1(parameter1 ,paramter2,paramter3){
   return console.log(parameter1,paramter2,paramter3)
}
test1("hallo",5,"😢","🎶","🎶","😎")
test1("hallo","freddy",10)

let vrienden = ["els", "marie","linda","karen"]

var studenten=[
    {
        id:1,
        name:"Lala",
        crusus:"Java",
        puten:30,

    },
    {
        id:2,
        name:"Tigist",
        crusus:"Javascript",
        puten:50,

    },
    {
        id:1,
        name:"Miki",
        crusus:"python",
        puten:70,

    },
]
let passed =studenten.filter(diploma)
function diploma(puten){
    return puten.puten>=50;
}
passed.map((studenten)=>{
    document.querySelector("#tabel1").innerHTML += `<tr>
    <td>${studenten.id}</td>
    <td>${studenten.name}</td>
    <td>${studenten.crusus}</td>
       <td>${studenten.puten}</td>
    </tr>`})

    
    let faild =studenten.filter(diploma)
    function faildresult(puten){
        return puten.puten<=50;
    }
    faild.map((studenten)=>{
        document.querySelector("#tabel2").innerHTML += `<tr>
        <td>${studenten.id}</td>
        <td>${studenten.name}</td>
        <td>${studenten.crusus}</td>
           <td>${studenten.puten}</td>
        </tr>`})

