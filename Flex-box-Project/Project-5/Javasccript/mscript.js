// console.log(1+2)
// document.write(" Welcom to JS")
 document.write("Java script is fun")

 //document.getElementById(pp).innerHTML="Huhuh";
// let y =5
// let x =5

// let z = y+x
// console.log(z)

// const age = 16;

let age = 5;
// Check if the age is above 16

if (age >= 16) {
	console.log("You can drink");
} else {
	console.log("only Juice");
}

var possible = (age >= 16) ? "Beer" : "Juice";
console.log  (possible);

let person = {
	firstName: "Yohana",
	age: 100-6,
	adress: "kessel lo "
  };
  
//   document.querySelector("#data").innerHTML =person.name
//   document.querySelector("#data").innerHTML =person.firstName + " is " + person.age + " years old.";
// console.log(person);

// document.querySelector("#tab").innerHTML = <tr>
// <td> ${person.name}</td>
// <td> ${person.age}</td>
// <td> ${person.adress}</td>
// </tr>

let arr1=[1,2,3,4,5]
console.log(arr1[3])
let arr2=["Abel" , "James", "carl"]
console.log(arr2[2])
//insertting elements 
arr2= [...arr2, "Bond"]
console.log
arr1.push("Mario")
console.log(arr1)

//object in array
// let Students = [
// 	{name: "jan",
// age : 22,
// adress:"Leuven"
// },
// {
// 	name:"Kebede",
// 	age:33,
// 	adress:"Kessel lo"
// },{
// 	name:"Abebe",
// 	age:43,
// 	adress:"Gent"
// }
// ]
let Students = [
	{name: "jan",
age : 22,
adress:"Leuven",
straat: "Schapenstraat",
email:"jansmith@gmail.com"
},
{
	name:"Kebede",
	age:33,
	adress:"Kessel lo",
	straat: "Gastoneysekenslaan",
	email:"jansmith@gmail.com"
},{
	name:"Abebe",
	age:43,
	adress:"Gent",
	straat: "Brusselstraat",
	email:"jansmith@gmail.com"
}
]
console.log(Students)
console.log(Students[2].name)
//for loop
//let isStuden  = "false"
for(let i = 0;i<Students.length;i++){
console.log(Students[i].name)
Students[i].isStudents= true
}
console.log(Students)
//map
Students.map((Students)=>{
	console.log(Students)
})

Students.map((Students)=>{
    document.querySelector("#tab>tbody").innerHTML += `<tr>
    <td>${Students.name}</td>
    <td>${Students.age}</td>
    <td>${Students.straat}</td>
    </tr>`
})



