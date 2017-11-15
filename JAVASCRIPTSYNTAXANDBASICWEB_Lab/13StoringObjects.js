function getObjectOnTheConsole(arr) {
    let obj = Object.assign(arr.map(x => x.split(' -> ')));
    for (let object of obj) {
        console.log(`Name: ${object[0]}\nAge: ${object[1]}\nGrade: ${object[2]}`)
    }
}

getObjectOnTheConsole(['Pesho -> 13 -> 6.00',
'Ivan -> 12 -> 5.57',
'Toni -> 13 -> 4.90'
]);
