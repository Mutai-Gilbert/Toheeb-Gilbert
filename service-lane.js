'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'serviceLane' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY cases
 */

function serviceLane(n, cases) {
    // Write your code here
    const arr = []; // declare the array
    for (let i of cases){ //iterations
        arr.push(Math.min(...n.slice(i[0],i[1]+1)));
    }
    return arr;

}


// Modifications to main(), since the original code didn't pass the correct arguments to solve the algorithm
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    const [n, t] = [...readLine().split(' ')].map(x => parseInt(x, 10))
    const width = readLine().split(' ').map(x => parseInt(x, 10))
    const cases = Array(t).fill(0).map(x => readLine().split(' ').map(y => parseInt(y, 10)))
    let result = serviceLane(width, cases)

    ws.write(result.join("\n") + "\n")
    ws.end()
}