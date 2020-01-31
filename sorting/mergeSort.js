/*Write a function to implement merge sort*/
//Helper method to merge two sorted array and return one complete sorted array
function mergeArray(arr1, arr2) {
    let i = 0, j = 0, newArr = [];

    while (i < arr1.length && j < arr2.length) {
        
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        }
        else if (arr2[j] < arr1[i]) {
            newArr.push(arr2[j]);
            j++;
        }
        else {
            newArr.push(arr2[j]);
            newArr.push(arr1[i]);
            i++; j++;
        }
    }

    if (i !== arr1.length) {
        while (i < arr1.length) {
            newArr.push(arr1[i]);
            i++;
        }
    }
    if (j !== arr2.length) {
        while (j < arr2.length) {
            newArr.push(arr2[j]);
            j++;
        }
    }
    return newArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return mergeArray(left, right);
    
}



// console.log(mergeArray([-1,0,10,12,89],[-10,1,3,4,90]))
console.log(mergeSort([-1,-10,10,100,2,9,7]))