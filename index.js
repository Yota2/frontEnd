console.log("hello")

// //objects
// let person = {
//     naam: "John",
//     leeftijd: 25,
//     woonplaats: "Antwerpen"
// }
// console.log(person)
// console.log(person.naam)
// console.log(`deze persoon heet ${person.naam} en woont in ${person.woonplaats}.`)
// console.log("deze persoon heet " + person.naam + " en is " + person.leeftijd + ".")

// let person2 = {
//     naam: "John",
//     leeftijd: 25,
//     adres: {
//         straat: "Reigersstraat",
//         nummer: 5,
//         woonplaats: "Antwerpen"
//     }
// }
// console.log(person2.adres.straat)
// //spread operator
// person2 = {...person2, email: "JJ@yahoo.com"}
// console.log(person2)

// document.querySelector("#data").innerHTML = person2.naam
// document.querySelector("#tabel>tbody").innerHTML = `<tr>
// <td style="padding:20px;border:2px solid black">${person2.naam}</td>
// <td>${person2.leeftijd}</td>
// <td>${person2.adres.woonplaats}</td>
// </tr>`

// //array
// let arr1 = [1,2,3,4,5]
// console.log(arr1[1])
// let arr2 = ["Lies", "Jan", "Jos", "Carl"]
// console.log(arr2[3])
// console.log(arr2.length)
// arr2[1] = "Piet"
// console.log(arr2)
// //elementen toevoegen aan array
// arr2 = [...arr2, "Marc"]
// console.log(arr2)
// arr2.push("Marie")
// console.log(arr2)

//objecten in array
// let students = [
//     {naam:"Jan",
//     leeftijd: 22,
//     woonplaats: "Mechelen"
// },
// {
//     naam : "Jos",
//     leeftijd: 28,
//     woonplaats: "Gent"
// },
// {
//     naam : "Piet",
//     leeftijd: 26,
//     woonplaats: "Brussel"
// }
// ]
// console.log(students)
// console.log(students[1].naam)
// console.log(students.length)
// //for loop
// for(let i = 0; i< students.length; i ++){
//     console.log(i)
//     console.log(students[i].naam)
//     students[i].id = i
//     console.log(students)
// }

let students = [
    {
        naam: "Jan",
        leeftijd: 22,
        email: "Jakke@yahoo.com",
        adres: {
            straat: "Leopoldlei",
            nummer: 210,
            woonplaats: "Mechelen"
        }

    },
    {
        naam: "Jos",
        leeftijd: 28,
        email: "jj@yahoo.com",
        adres: {
            straat: "Reigerstraat",
            nummer: 7,
            woonplaats: "Gent"
        }
        
    },
    {
        naam: "Piet",
        leeftijd: 26,
        email: "PatjePluk@gmail.com",
        adres: {
            straat: "Rue de la paix",
            nummer: 42,
            woonplaats: "Brussel"
        }
        
    }
]

for(let x = 0; x < students.length; x++){
    console.log(students[x].naam)
    students[x].isStudent = true
}
console.log(students)

//map
students.map((student) => {
    console.log(student)

console.log(`student ${student.naam} is ${student.leeftijd} jaar.`)
})

students.map((student)=>{
    document.querySelector("#tabel>tbody").innerHTML += `<tr>
    <td>${student.naam}</td>
    <td>${student.leeftijd}</td>
    <td>${student.adres.woonplaats}</td>
    </tr>`
})
