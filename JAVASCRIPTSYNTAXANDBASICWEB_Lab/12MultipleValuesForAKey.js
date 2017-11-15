function getKeyValues(arr) {
    let key = arr[arr.length-1];
    let newArr = Object.assign(arr.splice(0,arr.length-1).map(x=>x.split(' ')).filter(x=>x[0]===key));
    if(newArr.length>0){
        for (let i = 0; i<newArr.length; i++){
            console.log(newArr[i][1])
        }
    }
    else {
        console.log('None');
    }
}

getKeyValues(['3 test',
    '3 test1',
    '4 test2',
    '4 test3',
    '4 test5',
    '4'
]);
