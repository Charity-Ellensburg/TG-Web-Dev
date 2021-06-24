var a=20;
if (a==3) {
    console.log("results i");
} else if (a>4) {
    console.log("results ii"); 
} else if (a>11) {
    console.log ("results iii");
} else if (a<3) {
    console.log ("results iv");
}

var month=5;
if (month==1) {
    console.log("January");
} else if (month==2) {
    console.log("Februari");
} else if (month==3) {
    console.log("March");
} else if (month==4) {
    console.log ("April");
} else if (month==5) {
    console.log ("May");
} else if (month==6) {
    console.log ("June");
} else if (month==7) {
    console.log ("July"); 
} else if (month==8) {
    console.log ("August");
} else if (month==9) {
    console.log ("September"); 
} else if (month==10) {
    console.log ("October"); 
} else if (month==11) {
    console.log ("November"); 
} else if (month==12) {
    console.log ("December"); 
} else {
    console.log ("not a valid month")
}

let maand=6

switch (maand) {
    case 1 :
        console.log('januari');
        break;
    case 2:
        console.log('februari');
        break;
    case 3:
        console.log('maart');
        break;
    case 4:
        console.log('april');
        break;
    case 5:
        console.log('mei');
        break;
    case 6:
        console.log('juni');
        break;
    case 7:
        console.log('juli');
        break;
    case 8:
        console.log('augustus');
        break;
    case 9:
        console.log('september');
        break;
    case 10:
        console.log('oktober');
        break;
    case 11:
        console.log('november');
        break;
    case 12:
        console.log('december');
        break;
}

let x = 3;
let results; (x<=4 && x>=0) ? results = 2 : results = 5
 console.log(results);