/*Write a function for implementing bubble sort*/
function bubbleSort1(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j] + arr[j + 1];
                arr[j + 1] = arr[j] - arr[j + 1];
                arr[j] = arr[j] - arr[j + 1];
            }
        }
    }
    return arr;
} 
console.log(bubbleSort1([-1, 2, 40, 3, 55, 0]));

//Approach no. two: to reduce the number of iterations
function bubbleSort2(arr){
    for(let i=arr.length;i>0;i--){
        for(let j=0;j<i-1;j++){
             if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j] + arr[j + 1];
                arr[j + 1] = arr[j] - arr[j + 1];
                arr[j] = arr[j] - arr[j + 1];
            }
        }
    }
}
console.log(bubbleSort1([-1, 2, 40, 3, 55, 0]));
