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



console.log(mergeArray([-1,0,10,12,89],[-10,1,3,4,90]))