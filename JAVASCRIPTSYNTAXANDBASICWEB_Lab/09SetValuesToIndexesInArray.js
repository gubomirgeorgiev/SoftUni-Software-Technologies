function setValues(arr) {
    let newArr = Array.apply(0, {length: Number(arr[0])}).map(x=>x=0);
    let obj = Object.assign(arr.slice(1,arr.length).map(x=>x.split(" - ").map(Number)));
    for(let i = 0; i<obj.length;i++){
        newArr[obj[i][0]]=obj[i][1];
    }
    console.log(newArr.join("\n",x=>x));
}

setValues(['5',
    '0 - 3',
    '3 - -1',
    '4 - 2',
]);
