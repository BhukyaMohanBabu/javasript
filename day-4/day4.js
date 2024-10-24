//task-1 :traffic light system//

var trafic_light="red"

if (trafic_light=="red"){
    console.log("Stop")
}
else if(trafic_light=="Yellow"){
    console.log("Get ready to move")
}
else if(trafic_light=="Green"){
    console.log("Go")
}
else{
    console.log("Invalid input")
}

//task-2 : Weather Description (temperature descrition)//

var Temperature_is = 15;

if (Temperature_is == 0){
    console.log("It's freezing cold")
}
else if (Temperature_is ==15){
    console.log("It's cool day.")

}
else if (trafic_light ==25){
    console.log("It's pleasant day")

}
else{
    console.log("Unknown weather.")
}

//task-3 : day of Week !!//

var Day = prompt("enter number");
if (Day == 1){
    console.log("Today is Monday...!!")

}
else if ( Day ==2){
    console.logO("Today is Tuesday..!!")
}
else if ( Day == 3){
    console.log("Today is Wednesday..!!")

}
else if (Day == 4){
    console.log("Today is Thursday..!!")

}
else if( Day == 5){
    console.log("Today is Friday..!!")

}
else if ( Day == 6){
    console.log("Today is Saturday..!!")

}
else if ( Day == 7){
    console.log("Today is sunday..!!")
}
else {
    console.log("Invalid day number..!!")
}