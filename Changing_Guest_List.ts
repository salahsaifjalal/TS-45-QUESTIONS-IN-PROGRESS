let newGuestList: string[] = ["Imran", "Ishaq", "Rizwan","Mohsin"]
newGuestList.pop()
newGuestList.push("Javed")
newGuestList.shift()
newGuestList.unshift("Ahmed")
for (let NGL of newGuestList)  {
console.log(`salam my dear ${NGL}, You are invited to Dinner today at 9:00 P.M.`)
}