// task-1 even or odd message alert//

var input=prompt("Enter any number :")
if (input%2==0){
    alert("even")
}
else {
   alert("Odd")
}

// task-2 compare to numbers//

var input1=+prompt("Enter the first number :");
var input2=+prompt("Enter the second number:");
if (input1>input2){
    alert("Greater...!!")
}
else if( input1==input2){
    alert("Equal..!!")
}
else if (input<input2){
    alert("Less than..!!")
}
else{
    alert("Invalid ")
}


// task-3  : Driving age //

age=+prompt("Enter your age :")
driving_license = prompt("Do you have valid Driving liecense ? :")
if (age>=18){
    if ( driving_license=="True"){
        alert("You can drive..!!")
    }

}

else{
    alert("cannot deive..!!")
}
// task-4 :positive and negative numbers
var pn=+prompt("enter any number :")
if (pn>0){
    alert("Positive..!!")
}
else if(pn<0){
    alert("Negative..!!")
}
else{
    alert("Zero..!")
}