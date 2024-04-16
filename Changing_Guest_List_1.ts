let guestList:string[] = ["Imran Khan", "Ishaq", "Rizwan", "Mohsin"]
console.log(` The guest who are invited at dinner are ${guestList}`)
for (let GL of guestList) {
    console.log(`My dear ${GL}, You are invited to Dinner today at 9 P.M. `)
    }
console.log(`The guest who can not attend dinnner are ${guestList[0]} and   ${guestList[3]}`)

