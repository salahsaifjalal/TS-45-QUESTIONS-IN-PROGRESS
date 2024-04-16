var guestList = ["Imran Khan", "Ishaq", "Rizwan", "Mohsin"];
console.log(" The guest who are invited at dinner are ".concat(guestList));
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var GL = guestList_1[_i];
    console.log("My dear ".concat(GL, ", You are invited to Dinner today at 9 P.M. "));
}
console.log("The guest who can not attend dinnner are ".concat(guestList[0], " and   ").concat(guestList[3]));
