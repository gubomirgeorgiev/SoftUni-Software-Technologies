function getTownIncome(input) {
    let obj = input.map(JSON.parse);
    let sumOfIncome = {};
    for (let tow of obj) {
        if (tow.town in sumOfIncome) {
            sumOfIncome[tow.town] += tow.income;
        }
        else {
            sumOfIncome[tow.town] = tow.income;
        }
    }
    let towns = Object.keys(sumOfIncome).sort();
    for (let town of towns) {
        console.log(`${town} -> ${sumOfIncome[town]}`)
    }
}


getTownIncome(['{"town":"Sofia","income":200}',
    '{"town":"Varna","income":120}',
    '{"town":"Pleven","income":60}',
    '{"town":"Varna","income":70}'
]);
