var car = { brand:'Toyota',
    model:'Corolla',
    year:'2020'
    };
for (i in car){
    console.log(`${i}:${car[i].toUpperCase()}`)
}
