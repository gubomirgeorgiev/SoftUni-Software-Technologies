function getParseJSONObjectValue(arr) {
    let obj = arr.map(JSON.parse);
    for (let object of obj) {
        console.log(`Name: ${object.name}\nAge: ${object.age}\nDate: ${object.date}`)
    }
}

getParseJSONObjectValue(['{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}'
]);
