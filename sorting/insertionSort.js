/*Write afunction to implement insertion sort*/ 

function insertionSort(arr) {
    let i, j;
    for (i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for (j = i - 1; j >= 0; j--){
            if (arr[j] > currentVal) {
                arr[j + 1] = arr[j];
            }
            else {
                break;
            }
        } 
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([0,-1,90,-10,4,1]))