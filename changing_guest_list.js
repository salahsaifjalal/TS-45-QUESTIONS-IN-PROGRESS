var newGuestList = ["Imran", "Ishaq", "Rizwan", "Mohsin"];
newGuestList.pop();
newGuestList.push("Javed");
newGuestList.shift();
newGuestList.unshift("Ahmed");
for (var _i = 0, newGuestList_1 = newGuestList; _i < newGuestList_1.length; _i++) {
    var NGL = newGuestList_1[_i];
    console.log("salam my dear ".concat(NGL, ", You are invited to Dinner today at 9:00 P.M."));
}
