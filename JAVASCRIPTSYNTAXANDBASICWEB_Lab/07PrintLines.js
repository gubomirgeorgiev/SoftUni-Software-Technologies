function getLines(arr) {
    let counter = 0;
    while (arr[counter]!=="Stop"){
        console.log(arr[counter]);
        counter++;
    }
}

getLines(['3',
    '6',
    '5',
    '4',
    'Stop',
    '10',
    '12'
]);
