let name1 = prompt("Enter a name:");
let name2 = prompt("Enter a second name:");
let name3 = prompt("Enter a third name:");

let nameFirst = name1.length;
let nameSecond = name2.length;
let nameThird = name3.length;


/* TEST FOR 1st CONDITION */

let longName = "";
let longestName = false;

if ((nameFirst > nameSecond) && (nameFirst > nameThird)) {
    longName = name1;
    longestName = true;
} else if ((nameSecond > nameFirst) && (nameSecond > nameThird)) {
    longName = name2;
    longestName = true;
} else if ((nameThird > nameFirst) && (nameThird > nameSecond)) {
    longName = name3;
    longestName = true;
}


/* TEST FOR 2nd CONDITION */

let tiedName1 = "";
let tiedName2 = "";

let tiedNameMessage = "";
let tiedNameResult = false;

if (longestName !== true) {
    if ((nameFirst === nameSecond) || (nameSecond === nameThird) || (nameThird === nameFirst)) {
    if ((nameFirst === nameSecond) && (nameFirst !== nameThird)) {
        tiedName1 = name1;
        tiedName2 = name2;
        tiedNameResult = true;
        tiedNameMessage = `${tiedName1} and ${tiedName2} tie for the longest name.`;
    } else if ((nameSecond === nameThird) && (nameThird !== nameFirst)) {
        tiedName1 = name2;
        tiedName2 = name3;
        tiedNameResult = true;
        tiedNameMessage = `${tiedName1} and ${tiedName2} tie for the longest name.`;
    } else if ((nameFirst === nameThird) && (nameFirst !== nameSecond)) {
        tiedName1 = name1;
        tiedName2 = name3;
        tiedNameResult = true;
        tiedNameMessage = `${tiedName1} and ${tiedName2} tie for the longest name.`;
    }
}
}


/* TEST FOR 3rd CONDITION */

let threeNameMatch = false;

if ((longestName !== true) && (tiedNameResult !== true)) {
    if ((nameFirst === nameSecond) && (nameFirst === nameThird)) {
        threeNameMatch = true;
}
}


/* RESULTS */

if (longestName === true) {
    console.log(`${longName} has the longest name.`);
} else if (tiedNameResult === true) {
    console.log(tiedNameMessage);
} else if (threeNameMatch === true) {
    console.log(`All three names, ${name1}, ${name2}, and ${name3}, are the same length.`);
} 