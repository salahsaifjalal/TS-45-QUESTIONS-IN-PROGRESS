//import chalk from "chalk";
//import computerAsk from "inquirer";
let names: string[]= ["Ahasan Raza", "Mohsin","Rizwan", "Ishaq Qureshi", "Imran Khan"]
console.log(names[0]); console.log(names[1]) ;console.log(names[2]);console.log(names[3]);console.log(names[4])

// Another method
console.log("\n")
names.forEach((NM) => { 
   console.log(NM);
});
// Below codes for practise
let first_I_Name = names.find(NMS=> NMS.startsWith('I'))//print first name in the array starting with "I"
console.log("\n"+first_I_Name);

let names_Length = names.filter(NL => NL.length>6) // print array of those names whosee length is > 6 only.
console.log(names_Length) 

let upperCaseNames = names.map(ucn=> ucn.toUpperCase()); { console.log(upperCaseNames)  }
//console.log(chalk.green("This text is in the blue color"));
