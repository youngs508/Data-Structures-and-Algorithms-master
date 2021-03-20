//Create a function that reverse a string:
//'Hi My name is Andrei' should be:
//'ierdnA si eman yM iH'

function reverse(str) {
    //check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'that is not good';
    } 

    const backwards = [];
    for (let i = str.length - 1; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}

function reverse2(str) {
    return str.split('').reverse().join('');
} 

const reverse3 = str => [...str].reverse().join('');

console.log(reverse3('Hi My name is Andrei'));