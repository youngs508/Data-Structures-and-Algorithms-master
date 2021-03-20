
function containsCommonItems(arr1, arr2) {
    for (let i=0; i < arr1.length; i++) {
        for (let j=0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            } 
        }
    }
    return false;
}

//O(a*b)
//O(1) - Space Complexity

array1 = ['a', 'b', 'c', 'x'];
array2 = ['z', 'y', 'a'];
// This is because of the way javascript works. Object properties are turned into strings when created.

function containsCommonItems2(arr1, arr2) {
    // loop through first array and create object
    // where properties === items in the array 
    // can we assume always 2 parameters in the function?
    let map = {};
    for (let i=0; i < arr1.length; i++) {
        if(!map[array1[i]]) {
            const item = array1[i];
            map[item] = true;
        }
    }
    // loop through second array and check if
    // item in second array exists on created object.
    for (let j=0; j < arr2.length; j++) {
        if(map[array2[j]]) {
            return true;
        }
    }  
    return false;  
}

//O(a + b) Time Complexity
//O(a) Space Complexity

// console.log(containsCommonItems2(array1, array2));

function containsCommonItems3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

console.log(containsCommonItems3(array1, array2));