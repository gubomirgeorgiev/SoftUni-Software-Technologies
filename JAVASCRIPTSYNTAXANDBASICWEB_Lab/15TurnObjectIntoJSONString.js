function getObjFromJson(arr) {
    let newArr = {};
    for (let i = 0; i < arr.length; i++) {
        let splitArr = arr[i].split(" -> ");
        newArr[splitArr[0]] = splitArr[1];
    }
    let obj = JSON.stringify(newArr,getObjFromString);
    console.log(obj)
    function getObjFromString(key, value) {
        if(!isNaN(+value) && isFinite(value)){
            return Number(value);
        }
        else{
            return value;
        }
    }
}


getObjFromJson(['name -> Angel',
    'surname -> Georgiev',
    'age -> 20',
    'grade -> 6.00',
    'date -> 23/05/1995',
    'town -> Sofia',
]);
