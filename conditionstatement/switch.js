switch(3){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two")
        break;
    case 3:
        console.log("three")
        break;
    case 4:
        console.log("fore")
        break;
    default:
        console.log('no match');
        break;

}


let value="mohes"

switch(typeof value){
    case "number":
        console.log("NUMBER")
        break;
    case "string":
        console.log("string")
        break;
    case "boolean":
        console.log("boolean")
        break;
    
    default:
        console.log ("others")
        break;



}

let DayName=7
switch(DayName){
    case 1:
        console.log(DayName="SUNDAY")
        break;
    case 2:
        console.log(DayName="MONDAY")
        break;
    case 3:
        console.log(DayName="TUSDAY")
        break;
     case 4:
        console.log(DayName="wednesday")
        break;
    case 5:
        console.log(DayName="thrsday")
        break;
    case 6:
        console.log(DayName="friday")
        break;
    case 7:
        console.log(DayName="saturday")
        break;
    default:
        console.log ("invalied day")
        break;

}
console.log("Day name :"+ DayName)