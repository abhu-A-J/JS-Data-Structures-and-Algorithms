/* Write a function to implement linear search of an array of integers */

function linearSeach(arr, keyToSearch) {
    if (arr.length < 1) {
        return -1;
    }
    for (let i = 0; i < arr.length; i++){
        if (keyToSearch === arr[i]) {
            return `The elem is found at index number ${i}`;
        }
    }
    return `The element doesn't exist.`;
}

console.log(linearSeach([1, 2, 3, -1, 9, 3, 4], -1));
console.log(linearSeach([], -1));

