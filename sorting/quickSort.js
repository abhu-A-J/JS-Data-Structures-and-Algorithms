/* Write a function to implement quick sort*/
//Two steps: 1-> Place any pivot on correct possition
//           2->Recursive call on left side and right side of pivot 

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function pivotIndex(arr, start = 0, end = arr.length - 1) {
    
    let swapIndex = 0;
    let pivot = arr[start];
    for (let i = 1; i < arr.length; i++){
        if (pivot > arr[i]) {
            swapIndex += 1;
            swap(arr, swapIndex, i);
        }
    }

    swap(arr, start, swapIndex);
    console.log(arr);
    return swapIndex;
}

// let arr = [1, 2, -1, 6, -10, -11];
// console.log(pivotIndex(arr, 0, arr.length - 1));