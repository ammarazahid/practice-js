// let students = [
//   {
//     name: "Amna",
//     gender: "f",
//     dob: new Date("02-04-1990"),
//     address: {
//       ilaqa: "Gulistan-e-Johar",
//       city: "Karachi",
//       country: "Pakistan",
//       postalCode: 47114
//     },
//     phoneNo: "0331-2324243",
//     admissionTestScore: 56,
//     hasInternet: true,
//     hasComputer: false,
//     hasJob: true,
//     hasSchoolBefore: false
//   },
//   {
//     name: "Hadia",
//     gender: "f",
//     dob: new Date("05-15-1984"),
//     address: {
//       ilaqa: "Lyari",
//       city: "Karachi",
//       country: "Pakistan",
//       postalCode: 75660
//     },
//     phoneNo: "0345-3452953",
//     admissionTestScore: 48,
//     hasInternet: false,
//     hasComputer: false,
//     hasJob: false,
//     hasSchoolBefore: true
//   },
//   {
//     name: "Ahmed",
//     gender: "m",
//     dob: new Date("06-27-2002"),
//     address: {
//       ilaqa: "University Road",
//       city: "Quetta",
//       country: "Pakistan",
//       postalCode: 82215
//     },
//     phoneNo: "0333-0124325",
//     admissionTestScore: 33,
//     hasInternet: true,
//     hasComputer: false,
//     hasJob: false,
//     hasSchoolBefore: false
//   },
//   {
//     name: "Fariha",
//     gender: "f",
//     dob: new Date("09-13-1998"),
//     address: {
//       ilaqa: "University Road",
//       city: "Karachi",
//       country: "Pakistan",
//       postalCode: 82215
//     },
//     phoneNo: "0331-9432532",
//     admissionTestScore: 33,
//     hasInternet: true,
//     hasComputer: false,
//     hasJob: false,
//     hasSchoolBefore: false
//   },
//   {
//     name: "Abdullah",
//     gender: "m",
//     dob: new Date("01-24-1972"),
//     address: {
//       ilaqa: "Bazar Colony",
//       city: "Lahore",
//       country: "Pakistan",
//       postalCode: 32212
//     },
//     phoneNo: "0345-9912121",
//     admissionTestScore: 33,
//     hasInternet: false,
//     hasComputer: false,
//     hasJob: true,
//     hasSchoolBefore: true
//   }
// ];

// for (let i = 0; i < students.length; i++) {
//    if(students[i].phoneNo.startsWith("033")) {
//    console.log(students[i].name + " " + students[i].phoneNo);
//    }
// }

/*
Amna's address:
Gulistan-e-Johar in Karachi, Pakistan
*/ 

/*

Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, in the below format:
*/

// for (let i = 0; i < students.length; i++) {
// if(students[i].hasJob == true) {
//        console.log("Group b: " + students[i].name);
// } else if(students[i].hasJob == false){
//   console.log("Group A: " + students[i].name);

// }
// }

/*
Amna's age is 29 years

*/

// for (let i = 0; i < students.length; i++){
//   console.log(students[i].name + "'s age is " + students[i].dob + " Years");
// }