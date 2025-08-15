// Problem-04: Same Same But Different 

function  isSame(arr1 , arr2 ) {
    if(! Array.isArray(arr1) || ! Array.isArray(arr2)){
        return 'invalid';
    }
    else if(arr1.length !== arr2.length){
        return false;
    }

    for(let index =0; index  < arr1.length; index ++){
        if(arr1[index] !== arr2[index]){
            return false;
        }
    }
    return true;
}

const array1 = [1 , 4 , 5];

const array2 = [1 , 4 , 5];

console.log(isSame(array1,array2))