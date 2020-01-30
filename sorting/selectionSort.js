/*Write a function to implement selection sort */

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let smallest = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        if (i !== smallest) {
            arr[i] = arr[i] + arr[smallest];
            arr[smallest] = arr[i] - arr[smallest];
            arr[i] = arr[i] - arr[smallest];
       }
    }
    return arr;
}

console.log(selectionSort([0, 10, -10, -11, 1]))
console.log(selectionSort([1, 2, -1, 0, 54, 6]))
