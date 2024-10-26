// Task-1 :

var arr=[3,5,10,15,23,22,25,35,56]

for (i in arr){
    if (arr[i]%5==0){
        console.log(arr[i])
    }
}

console.log("========================================")

// Task-2 :

var arr2=["htmL","csS","javaScrIPT","react","angulaR","nodE","EXPREss"]
for (i in arr2){
    if (arr2[i].at(-1)==arr2[i].at(-1).toUpperCase()){
        console.log(arr2[i])
    }
}
console.log("========================================")

// Task-3 :

var arr=["html","css","js","react","angular"]
for (i in arr){
    if (i%2==0){
        console.log(arr[i].toUpperCase())
    }
}
