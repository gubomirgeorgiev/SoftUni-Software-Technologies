function setElements(arr) {
    let newArr = [];
    //let obj = Object.assign(arr.slice(1,arr.length).map(x=>x.split(" - ").map(Number)));
    for(let i = 0; i<arr.length;i++){
        let arrSplit = arr[i].split(' ');
        if (arrSplit[0]==='add'){
            newArr.push(arrSplit[1]);
        }
        else{
            if(newArr.length>=Number(arrSplit[1])){
                newArr.splice(Number(arrSplit[1]),1)
            }
        }
    }
    for (let num of newArr){
        if(num!=""&&num!=null&&num!=undefined){
            console.log(num)
        }
    }
}

setElements(['add 3',
    'add 5',
    'remove 2',
    'remove 0',
    'add 7'
]);
