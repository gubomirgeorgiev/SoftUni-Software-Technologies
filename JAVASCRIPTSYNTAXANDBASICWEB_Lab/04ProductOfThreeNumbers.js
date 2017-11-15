function getNegativeOrPositive(num) {
    if (num.includes(0)){
        console.log('Positive');
    }
    else {
        if(num[0]*num[1]*num[2]>0){
            console.log('Positive');
        }
        else{
            console.log('Negative');
        }
    }

}
getNegativeOrPositive([2,
    3,
    -1
]);
