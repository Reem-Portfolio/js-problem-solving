
function determines(num){
    if(num==7){
        console.log("Weekend");
    }
    else if(num>7){
        console.log("sorry enter num from 1 to 7");
    }
    else{
        console.log("Weekday");
    }
}
num = prompt("enter the day number");
determines(num);
