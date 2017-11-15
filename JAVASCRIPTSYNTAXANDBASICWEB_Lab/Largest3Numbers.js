function getNumbers(arr){
    let numArr = arr.map(JSON.parse).map(Number).sort((a,b)=>b-a).slice(0,3);
    //let numArr = arr.split(' ').map(Number).sort((a,b)=>b-a).slice(0,3);
    console.log(numArr.join("\n",x=>x))
}

getNumbers(['10',
    '30',
    '15',
    '20',
    '50',
    '5']);
