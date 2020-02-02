/* Write a function to implement quick sort*/
//Two steps: 1-> Place any pivot on correct possition
//           2->Recursive call on left side and right side of pivot 

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function pivotIndex(arr, start = 0, end = arr.length - 1) {
    let swapIndex = start;
    let pivot = arr[start];
    for (let i = start+1; i <=end; i++){
        if (pivot > arr[i]) {
            swapIndex += 1;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    // console.log(arr);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left <right) {
        let pivot = pivotIndex(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
    return arr;
}

let arr = [1, 2, -1, 6, -10, -11];
console.log(quickSort(arr));