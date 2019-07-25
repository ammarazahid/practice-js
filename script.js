let students = [
    {
        name: "Amna",
        gender: "f",
        dob: new Date("02-04-1990"),
        address: {
            ilaqa: "Gulistan-e-Johar",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 47114
        },
        phoneNo: "0331-2324243",
        admissionTestScore: 56,
        hasInternet: true,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: false
    },
    {
        name: "Hadia",
        gender: "f",
        dob: new Date("05-15-1984"),
        address: {
            ilaqa: "Lyari",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 75660
        },
        phoneNo: "0345-3452953",
        admissionTestScore: 48,
        hasInternet: false,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: true
    },
    {
        name: "Ahmed",
        gender: "m",
        dob: new Date("06-27-2002"),
        address: {
            ilaqa: "University Road",
            city: "Quetta",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0333-0124325",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Fariha",
        gender: "f",
        dob: new Date("09-13-1998"),
        address: {
            ilaqa: "University Road",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0331-9432532",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Abdullah",
        gender: "m",
        dob: new Date("01-24-1972"),
        address: {
            ilaqa: "Bazar Colony",
            city: "Lahore",
            country: "Pakistan",
            postalCode: 32212
        },
        phoneNo: "0345-9912121",
        admissionTestScore: 33,
        hasInternet: false,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: true
    }
];

// 1

//   for(let i = 0; i < students.length; i++){
//       console.log("Name: " + students[i].name);
//       if(students[i].gender === "f"){
//       console.log("Gender: Female");
//       }else{
//           console.log("Gender: Male");
//       }
//       console.log("City: " + students[i].address.city);
//       console.log("Score: " + students[i].admissionTestScore +
//        "Marks");
//       console.log(" ");
//   }

// 2

//   for (let i = 0; i < students.length; i++) {
//       if(students[i].gender == "f"){
//           console.log(students[i].name);
//       }

//   }

// 3

// for(let i = 0; i <students.length; i++){
//     if(students[i].gender == "m"){
//         console.log(students[i].name);
//     }
// }

// console.log(students[0]);

// 4

// for(let i =0; i < students.length; i++) {
//  if(students[i].admissionTestScore > 50){
//      console.log(students[i].name);

//     }

// }

// 5

// for(let i =0; i < students.length; i++) {
//   if(students[i].hasInternet == true && students[i].address.city == "Karachi"){
//       console.log(students[i].name);
//   }
// } 
/*
Amna's address:
Gulistan-e-Johar in Karachi, Pakistan

*/

// 6

// for(let i= 0; i < students.length; i++) {
//     console.log(students[i].name + "'s address");
//     console.log(students[i].address.ilaqa + " in " + students[i].address.city + ", " + students[i].address.country);
// }



// 7

// for(let i = 0; i < students.length; i++){
//     if(students[i].phoneNo.charAt(2) === "3" && students[i].phoneNo.charAt(3) <= "7"){
//         console.log(students[i].name);
//     }
// }

// // 8
// let groupA = [];
// let groupB = [];
// for(let i = 0; i < students.length; i++){
//     if(students[i].hasJob == true || students[i].hasSchoolBefore == true){
//         groupB.push(students[i].name);
//     }else if(students[i].hasJob == false || students[i].hasSchoolBefore == false){
//             groupA.push(students[i].name);
//         }         
//     }
//     console.log("Group A: " + groupA.join(", "));
//     console.log("Group B: " + groupB.join(", "));

// // 9
// let today= new Date();
// for (let i = 0; i < students.length; i++) {
//     let age= today.getFullYear() - students[i].dob.getFullYear();

//     console.log(students[i].name + "'s age is " + age + " years");
// }

// 10

// for (let i = 0; i < students.length; i++) {
//     if(students[i].dob.getFullYear()  )
//     console.log(students[i].name);
// }

